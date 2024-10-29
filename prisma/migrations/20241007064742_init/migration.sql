-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `com_title` VARCHAR(191) NOT NULL,
    `comp_logo` VARCHAR(191) NOT NULL,
    `comp_description` TEXT NOT NULL,
    `comp_phone` VARCHAR(191) NOT NULL,
    `comp_email` VARCHAR(191) NOT NULL,
    `comp_website` VARCHAR(191) NOT NULL,
    `comp_rating` VARCHAR(191) NOT NULL,
    `com_details` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comp_id` VARCHAR(191) NOT NULL,
    `offer_type` VARCHAR(191) NOT NULL,
    `offer_title` VARCHAR(191) NOT NULL,
    `offer_code` VARCHAR(191) NOT NULL,
    `offer_description` TEXT NOT NULL,
    `offer_link1` TEXT NOT NULL,
    `offer_link2` TEXT NOT NULL,
    `offer_users` VARCHAR(191) NOT NULL,
    `offer_expiry` VARCHAR(191) NOT NULL,
    `offer_isverify` VARCHAR(191) NOT NULL,
    `offer_details` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faqs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comp_id` INTEGER NOT NULL,
    `question` TEXT NOT NULL,
    `answer` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
