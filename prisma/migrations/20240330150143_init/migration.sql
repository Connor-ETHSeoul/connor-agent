/*
  Warnings:

  - You are about to drop the `Agent_Output` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Smart_Contract` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Agent_Output`;

-- DropTable
DROP TABLE `Smart_Contract`;

-- CreateTable
CREATE TABLE `Agent_output` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proposalId` INTEGER NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Smart_contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `version` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
