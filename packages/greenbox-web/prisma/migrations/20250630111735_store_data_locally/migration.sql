-- CreateTable
CREATE TABLE "Greenbox" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Greenbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "playerId" INTEGER NOT NULL,
    "playerName" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("playerId")
);

-- AddForeignKey
ALTER TABLE "Greenbox" ADD CONSTRAINT "Greenbox_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("playerId") ON DELETE RESTRICT ON UPDATE CASCADE;
