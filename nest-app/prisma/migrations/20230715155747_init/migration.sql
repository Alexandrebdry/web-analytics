/*
  Warnings:

  - You are about to drop the `_ConversionFunnelToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConversionFunnelToTag" DROP CONSTRAINT "_ConversionFunnelToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversionFunnelToTag" DROP CONSTRAINT "_ConversionFunnelToTag_B_fkey";

-- DropTable
DROP TABLE "_ConversionFunnelToTag";

-- CreateTable
CREATE TABLE "ConversionFunnelTag" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "conversionFunnelId" INTEGER NOT NULL,

    CONSTRAINT "ConversionFunnelTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_conversionFunnelId_fkey" FOREIGN KEY ("conversionFunnelId") REFERENCES "ConversionFunnel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
