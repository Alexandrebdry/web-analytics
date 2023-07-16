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
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "appID" TEXT NOT NULL,
    "appSecret" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionFunnel" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ConversionFunnel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionFunnelTag" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "conversionFunnelId" INTEGER NOT NULL,

    CONSTRAINT "ConversionFunnelTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "filters" JSONB NOT NULL,
    "timeScaleStart" TIMESTAMP(3) NOT NULL,
    "timeScaleEnd" TIMESTAMP(3) NOT NULL,
    "timeScaleStep" INTEGER NOT NULL,
    "dataType" "DataType" NOT NULL,
    "visualizationType" "VisualizationType" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFunnel" ADD CONSTRAINT "ConversionFunnel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_conversionFunnelId_fkey" FOREIGN KEY ("conversionFunnelId") REFERENCES "ConversionFunnel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
