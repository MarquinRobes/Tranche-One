-- Celestia Passage database (MySQL / MariaDB, utf8mb4), normalized to 3NF.
CREATE DATABASE IF NOT EXISTS celestia_passage
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE celestia_passage;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS bookings, booking_statuses, customers, faqs, site_settings,
  itinerary_days, package_stops, packages, nations;
SET FOREIGN_KEY_CHECKS = 1;

-- One row per nation (destination region).
CREATE TABLE nations (
  nation_id    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug         VARCHAR(40)  NOT NULL UNIQUE,      -- used in URLs, e.g. 'mondstadt'
  name         VARCHAR(60)  NOT NULL,
  eyebrow      VARCHAR(80)  NOT NULL,             -- "The Nation of Freedom"
  accent_color CHAR(7)      NOT NULL              -- hex, e.g. #287d73
) ENGINE=InnoDB;

-- One travel package per nation (kept separate so a nation can later have several).
CREATE TABLE packages (
  package_id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nation_id        INT UNSIGNED NOT NULL,
  title            VARCHAR(150) NOT NULL,
  description      TEXT         NOT NULL,
  price_per_person DECIMAL(10,2) NOT NULL CHECK (price_per_person >= 0),
  days             TINYINT UNSIGNED NOT NULL,
  nights           TINYINT UNSIGNED NOT NULL,
  image_file       VARCHAR(120) NOT NULL,         -- file name inside static/images
  is_active        TINYINT(1)   NOT NULL DEFAULT 1,
  CONSTRAINT fk_package_nation FOREIGN KEY (nation_id) REFERENCES nations(nation_id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE package_stops (
  stop_id    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  package_id INT UNSIGNED NOT NULL,
  stop_order TINYINT UNSIGNED NOT NULL,
  name       VARCHAR(120) NOT NULL,
  UNIQUE KEY uq_stop_order (package_id, stop_order),
  CONSTRAINT fk_stop_package FOREIGN KEY (package_id) REFERENCES packages(package_id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE itinerary_days (
  day_id      INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  package_id  INT UNSIGNED NOT NULL,
  day_number  TINYINT UNSIGNED NOT NULL,
  title       VARCHAR(120) NOT NULL,
  description TEXT         NOT NULL,
  image_file  VARCHAR(120) NOT NULL,
  UNIQUE KEY uq_day (package_id, day_number),
  CONSTRAINT fk_day_package FOREIGN KEY (package_id) REFERENCES packages(package_id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE faqs (
  faq_id     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  question   VARCHAR(200) NOT NULL,
  answer     TEXT         NOT NULL,
  sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB;

-- Site-wide values (contact details, images) so they are edited in one place.
CREATE TABLE site_settings (
  setting_key   VARCHAR(60)  PRIMARY KEY,
  setting_value VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE customers (
  customer_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name   VARCHAR(120) NOT NULL,
  email       VARCHAR(150) NOT NULL UNIQUE,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE booking_statuses (
  status_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(30) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- A reservation request. unit_price is a snapshot of the package price at request
-- time, so later price changes do not rewrite past bookings. Total = unit_price * travelers.
CREATE TABLE bookings (
  booking_id  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  reference   CHAR(10)     NOT NULL UNIQUE,
  customer_id INT UNSIGNED NOT NULL,
  package_id  INT UNSIGNED NOT NULL,
  travel_date DATE         NOT NULL,
  travelers   TINYINT UNSIGNED NOT NULL CHECK (travelers BETWEEN 1 AND 10),
  unit_price  DECIMAL(10,2) NOT NULL,
  status_id   INT UNSIGNED NOT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_booking_customer (customer_id),
  KEY idx_booking_package (package_id),
  CONSTRAINT fk_booking_customer FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_booking_package FOREIGN KEY (package_id) REFERENCES packages(package_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_booking_status FOREIGN KEY (status_id) REFERENCES booking_statuses(status_id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;
