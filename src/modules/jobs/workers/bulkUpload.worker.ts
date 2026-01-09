import { Worker } from "bullmq";
import IORedis from "ioredis";
import * as XLSX from "xlsx";
import fs from "fs/promises";
import csvtojson from "csvtojson";

import { AuthService } from "../../auth/auth.service";
import { AppError } from "../../../errors";

const authService = new AuthService();
const connection = new IORedis({ maxRetriesPerRequest: null });

const extractData = async (filePath: string) => {
  if (filePath.endsWith(".xlsx") || filePath.endsWith(".xls")) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(worksheet, {
      defval: "",
      blankrows: false,
    });
    return rows;
  } else if (filePath.endsWith(".csv")) {
    const csv = await csvtojson().fromFile(filePath);
    return csv;
  } else if (filePath.endsWith(".json")) {
    const json = await fs.readFile(filePath, "utf-8");
    return JSON.parse(json);
  }
};

const worker = new Worker(
  "bulk-upload",
  async (job) => {
    const { filePath } = job.data;

    if (
      !filePath.endsWith(".xlsx") &&
      !filePath.endsWith(".xls") &&
      !filePath.endsWith(".csv") &&
      !filePath.endsWith(".json")
    ) {
      return new AppError(
        "Unsupported file type",
        400,
        "UNSUPPORTED_FILE_TYPE"
      );
    }
    switch (job.name) {
      case "process-users":
        try {
          const data = await extractData(filePath);
          const BATCH_SIZE = 50;

          for (let i = 0; i < data.length; i += BATCH_SIZE) {
            const batch = data.slice(i, i + BATCH_SIZE);
            await Promise.all(
              batch.map((row: any) =>
                authService.register(row).catch((err) => {
                  console.error("Row failed:", row.email, err.message);
                })
              )
            );
          }
        } catch (error) {
          console.error("Error processing users:", error);
        } finally {
          await fs.unlink(filePath);
        }
        break;
      default:
        break;
    }
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log("Job completed");
});

worker.on("failed", (job) => {
  console.log("Job failed");
});
