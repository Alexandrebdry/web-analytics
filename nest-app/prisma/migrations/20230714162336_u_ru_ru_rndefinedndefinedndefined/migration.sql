/*
  Warnings:

  - You are about to drop the column `app_id` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `app_secret` on the `Credentials` table. All the data in the column will be lost.
  - Added the required column `appID` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appSecret` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "app_id",
DROP COLUMN "app_secret",
ADD COLUMN     "appID" TEXT NOT NULL,
ADD COLUMN     "appSecret" TEXT NOT NULL;
