-- CreateEnum
CREATE TYPE "DataType" AS ENUM ('absolu', 'taux');

-- CreateEnum
CREATE TYPE "VisualizationType" AS ENUM ('KPI', 'Graphe', 'Heatmap');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyKBIS" TEXT NOT NULL,
    "companyURL" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "roles" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "filters" JSONB NOT NULL,
    "timeScaleStart" TIMESTAMP(3) NOT NULL,
    "timeScaleEnd" TIMESTAMP(3) NOT NULL,
    "timeScaleStep" INTEGER NOT NULL,
    "dataType" "DataType" NOT NULL,
    "visualizationType" "VisualizationType" NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
