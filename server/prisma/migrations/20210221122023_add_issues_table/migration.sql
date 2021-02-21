-- CreateTable
CREATE TABLE `Issues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `due_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
