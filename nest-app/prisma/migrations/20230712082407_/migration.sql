/*
  Warnings:

  - You are about to drop the column `companyName` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "companyName",
DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
