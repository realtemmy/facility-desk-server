import express from "express";
import { upload } from "./middleware/upload";
import { AuthController } from "./modules/auth/auth.controller";
import path from "path";
import fs from "fs";
import http from "http";

const app = express();
const authController = new AuthController();

// Mock request
const PORT = 3456;

app.post(
  "/test/bulk",
  upload.single("file"),
  (req, res, next) => {
    console.log("Middle: After multer");
    next();
  },
  authController.bulkRegistration
);

app.use((err: any, req: any, res: any, next: any) => {
  console.error("Error handler caught:", err);
  if (!res.headersSent) {
    res.status(500).send("Error");
  }
});

const server = app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);

  // Create a dummy file
  const filePath = path.join(__dirname, "test.csv");
  fs.writeFileSync(filePath, "email,name\ntest@test.com,Test");

  // Make request
  const Boundary = "---------------------------974767299852498929531610575";
  const body = `--${Boundary}\r
Content-Disposition: form-data; name="file"; filename="test.csv"\r
Content-Type: text/csv\r
\r
email,name
test@test.com,Test\r
--${Boundary}--\r\n`;

  const req = http.request(
    {
      host: "localhost",
      port: PORT,
      path: "/test/bulk",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data; boundary=" + Boundary,
        "Content-Length": Buffer.byteLength(body),
      },
    },
    (res) => {
      console.log("Response status:", res.statusCode);
      res.on("data", (d) => console.log("Body:", d.toString()));
      server.close(() => {
        process.exit(0);
      });
    }
  );

  req.write(body);
  req.end();
});
