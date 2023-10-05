/*
  Warnings:

  - You are about to drop the column `delete` on the `RoleAcess` table. All the data in the column will be lost.
  - Added the required column `remove` to the `RoleAcess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoleAcess" DROP COLUMN "delete",
ADD COLUMN     "remove" BOOLEAN NOT NULL;
