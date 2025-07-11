-- CreateEnum
CREATE TYPE "ThingType" AS ENUM ('SKILL', 'FAMILIAR', 'TROPHY', 'TATTOO', 'ITEM');

-- CreateTable
CREATE TABLE "WikiLinks" (
    "name" TEXT NOT NULL,
    "type" "ThingType" NOT NULL,
    "url" TEXT NOT NULL,
    "manual" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "WikiLinks_name_type_key" ON "WikiLinks"("name", "type");
