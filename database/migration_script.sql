-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: devschema
-- Source Schemata: devschema
-- Created: Tue Aug 19 11:55:14 2014
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;;

-- ----------------------------------------------------------------------------
-- Schema devschema
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `devschema` ;
CREATE SCHEMA IF NOT EXISTS `devschema` ;

-- ----------------------------------------------------------------------------
-- Table devschema.categories
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `devschema`.`categories` (
  `cat_id` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL DEFAULT '0',
  `label` VARCHAR(25) CHARACTER SET 'utf8' NOT NULL,
  `cat_order` INT(11) NOT NULL DEFAULT '0',
  `icon` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `isvisible` VARCHAR(5) CHARACTER SET 'utf8' NULL DEFAULT 'true',
  `isdefault` VARCHAR(5) CHARACTER SET 'utf8' NOT NULL DEFAULT 'false')
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- ----------------------------------------------------------------------------
-- Table devschema.category
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `devschema`.`category` (
  `cat_id` VARCHAR(50) NOT NULL DEFAULT '0',
  `label` VARCHAR(25) NOT NULL,
  `cat_order` INT(11) NOT NULL DEFAULT '0',
  `icon` VARCHAR(100) NULL DEFAULT NULL,
  `isvisible` VARCHAR(5) NULL DEFAULT 'true',
  `isdefault` VARCHAR(5) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`cat_id`),
  UNIQUE INDEX `cat_id_UNIQUE` (`cat_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ----------------------------------------------------------------------------
-- Table devschema.members
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `devschema`.`members` (
  `mem_email_id` VARCHAR(255) NOT NULL,
  `mem_first_name` VARCHAR(25) NOT NULL,
  `mem_last_name` VARCHAR(25) NULL DEFAULT NULL,
  `mem_display_name` VARCHAR(50) NOT NULL,
  `mem_password` VARCHAR(71) NULL DEFAULT NULL,
  `mem_join_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `mem_timezone` TINYINT(4) NULL DEFAULT NULL,
  `mem_day_light_saving` VARCHAR(5) NULL DEFAULT NULL,
  `mem_type` VARCHAR(10) NULL DEFAULT NULL,
  `mem_group` TINYINT(4) NULL DEFAULT NULL,
  `mem_status` TINYINT(4) NULL DEFAULT NULL,
  `mem_suspended_until` DATETIME NULL DEFAULT NULL,
  `mem_status_reason` VARCHAR(300) NULL DEFAULT NULL,
  `mem_last_login` DATETIME NULL DEFAULT NULL,
  `mem_birthday` DATE NULL DEFAULT NULL,
  `mem_location` VARCHAR(255) NULL DEFAULT NULL,
  `mem_validated` VARCHAR(5) NULL DEFAULT 'false',
  `mem_validated_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`mem_email_id`),
  UNIQUE INDEX `mem_email_id_UNIQUE` (`mem_email_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ----------------------------------------------------------------------------
-- Table devschema.processes
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `devschema`.`processes` (
  `proc_id` VARCHAR(50) NOT NULL DEFAULT '0',
  `cat_id` VARCHAR(50) NOT NULL,
  `label` VARCHAR(25) NOT NULL,
  `proc_order` VARCHAR(11) NOT NULL DEFAULT '0',
  `icon` VARCHAR(100) NOT NULL,
  `type` VARCHAR(15) NOT NULL COMMENT 'tileview, listview, operations',
  `type_id` VARCHAR(15) NOT NULL,
  `type_name` VARCHAR(50) NOT NULL,
  `isvisible` VARCHAR(5) NOT NULL DEFAULT 'true',
  `isdefault` VARCHAR(5) NOT NULL DEFAULT 'false',
  `url` INT(200) NOT NULL,
  PRIMARY KEY (`proc_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- ----------------------------------------------------------------------------
-- Trigger devschema.category_dup_BINS
-- ----------------------------------------------------------------------------
DELIMITER $$
USE `devschema`$$
CREATE DEFINER=`profilehippo`@`%` TRIGGER `category_dup_BINS` BEFORE INSERT ON `categories` FOR EACH ROW SET new.cat_id = uuid();

-- ----------------------------------------------------------------------------
-- Trigger devschema.process_BINS
-- ----------------------------------------------------------------------------
DELIMITER $$
USE `devschema`$$
CREATE DEFINER=`cpses_rbAGEDOquW`@`localhost` TRIGGER `process_BINS`
BEFORE
INSERT ON `processes`
FOR EACH ROW
SET new.proc_id = uuid();
SET FOREIGN_KEY_CHECKS = 1;;
