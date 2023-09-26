/*
  Warnings:

  - You are about to drop the `app` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "accounProvider" DROP NOT NULL;

-- DropTable
DROP TABLE "app";
