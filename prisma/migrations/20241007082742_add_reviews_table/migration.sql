-- CreateTable
CREATE TABLE `Reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reviewer_name` VARCHAR(191) NOT NULL,
    `reviewer_image` VARCHAR(191) NOT NULL,
    `reviewer_title` VARCHAR(191) NOT NULL,
    `review_content` TEXT NOT NULL,
    `review_rating` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
