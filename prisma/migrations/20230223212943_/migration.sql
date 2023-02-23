/*
  Warnings:

  - You are about to drop the column `const` on the `Project` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "const",
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
