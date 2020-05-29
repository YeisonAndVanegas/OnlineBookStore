-- Create database book-store
DROP SCHEMA IF EXISTS `book_store_dev`;
CREATE SCHEMA `book_store_dev`;

-- Select the database
USE `book_store_dev`;

-- Create category table tbl_category
CREATE TABLE IF NOT EXISTS `book_store_dev`.`tbl_category`(
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category_name` VARCHAR(255) NULL DEFAULT NULL);
    
-- Create book table tbl_book
CREATE TABLE IF NOT EXISTS `book_store_dev`.`tbl_book`(
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `sku` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `unit_price` DECIMAL(13,2) DEFAULT NULL,
    `image_url` VARCHAR(255) DEFAULT NULL,
    `active` BIT DEFAULT 1,
    `units_in_stock` INT(11) DEFAULT NULL,
    `date_created` DATETIME DEFAULT NULL,
    `last_updated` DATETIME DEFAULT NULL,
    `category_id` BIGINT(20) NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`)
);

-- Insert sample data to category table
INSERT INTO tbl_category(category_name) VALUES ('Text Books');
INSERT INTO tbl_category(category_name) VALUES ('Fantacy');

-- Insert sample data to book table
INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-101',
    'C# Crash Course',
    'Learn C# Programming Languaje',
    'assets/images/books/text-101.png',
    1,
    100,
    900,
    1,
    '2020-05-29 00:33:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-102',
    'C++ Crash Course',
    'Learn C++ Programming Languaje',
    'assets/images/books/text-102.png',
    1,
    100,
    700,
    1,
    '2020-05-29 00:33:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-103',
    'Cracking The Coding Interview',
    'Learn Cracking The Coding Interview',
    'assets/images/books/text-103.png',
    1,
    100,
    1000,
    1,
    '2020-05-29 00:35:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-104',
    'Data Structures And Algorithms',
    'Learn Data Structures And Algorithms',
    'assets/images/books/text-104.png',
    1,
    100,
    1200,
    1,
    '2020-05-29 00:36:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-105',
    'Head First Design Patterns',
    'Learn Head First Design Patterns',
    'assets/images/books/text-105.png',
    1,
    100,
    600,
    1,
    '2020-05-29 00:38:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-106',
    'Java Programming',
    'Learn Java Programming from scratch',
    'assets/images/books/text-106.png',
    1,
    100,
    800,
    1,
    '2020-05-29 00:39:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-107',
    'ML With Python',
    'Learn machine learning with python',
    'assets/images/books/text-107.png',
    1,
    100,
    1500,
    1,
    '2020-05-29 00:40:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-108',
    'Practical API Design',
    'Learn how to design API practically',
    'assets/images/books/text-108.png',
    1,
    100,
    999,
    1,
    '2020-05-29 00:41:05'
);

INSERT INTO tbl_book
(
	sku, 
    name,
    description,
    image_url,
    active,
    units_in_stock,
    unit_price,
    category_id,
    date_created
)
VALUES
(
	'text-109',
    'Python Programming',
    'Learn python programming from scratch',
    'assets/images/books/text-109.png',
    1,
    100,
    499,
    1,
    '2020-05-29 00:43:05'
);