-- AlterTable
ALTER TABLE "preventives" ADD COLUMN     "zoneId" TEXT;

-- AddForeignKey
ALTER TABLE "preventives" ADD CONSTRAINT "preventives_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "zones"("id") ON DELETE SET NULL ON UPDATE CASCADE;
