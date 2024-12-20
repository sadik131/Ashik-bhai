/*
  Warnings:

  - Made the column `discount` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `originalPrice` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "originalPrice" SET NOT NULL;
