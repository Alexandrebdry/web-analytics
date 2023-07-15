/*
  Warnings:

  - You are about to drop the `ConversionFunnelTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConversionFunnelTag" DROP CONSTRAINT "ConversionFunnelTag_conversionFunnelId_fkey";

-- DropForeignKey
ALTER TABLE "ConversionFunnelTag" DROP CONSTRAINT "ConversionFunnelTag_tagId_fkey";

-- DropTable
DROP TABLE "ConversionFunnelTag";

-- CreateTable
CREATE TABLE "_ConversionFunnelToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConversionFunnelToTag_AB_unique" ON "_ConversionFunnelToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ConversionFunnelToTag_B_index" ON "_ConversionFunnelToTag"("B");

-- AddForeignKey
ALTER TABLE "_ConversionFunnelToTag" ADD CONSTRAINT "_ConversionFunnelToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ConversionFunnel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversionFunnelToTag" ADD CONSTRAINT "_ConversionFunnelToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
