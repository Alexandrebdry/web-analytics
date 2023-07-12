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
CREATE TABLE "ConversionFunnel" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ConversionFunnel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionFunnelTag" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "conversionFunnelId" INTEGER NOT NULL,

    CONSTRAINT "ConversionFunnelTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFunnelTag" ADD CONSTRAINT "ConversionFunnelTag_conversionFunnelId_fkey" FOREIGN KEY ("conversionFunnelId") REFERENCES "ConversionFunnel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
