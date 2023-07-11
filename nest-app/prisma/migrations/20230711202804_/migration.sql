/*
  Warnings:

  - Added the required column `companyKBIS` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyURL` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyKBIS" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "companyURL" TEXT NOT NULL;
