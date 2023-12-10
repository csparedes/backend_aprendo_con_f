-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema teacher_app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema teacher_app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teacher_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `teacher_app` ;

-- -----------------------------------------------------
-- Table `teacher_app`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teacher_app`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(80) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `email` VARCHAR(80) NOT NULL,
  `name` VARCHAR(80) NOT NULL,
  `postal_code` VARCHAR(12) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `longitude` DECIMAL(10,6) NULL DEFAULT NULL,
  `latitude` DECIMAL(10,6) NULL DEFAULT NULL,
  `experience` INT NULL DEFAULT NULL,
  `hourly_rate` DECIMAL(10,0) NULL DEFAULT NULL,
  `imageUrl` VARCHAR(200) NULL DEFAULT NULL,
  `phone` VARCHAR(15) NULL DEFAULT NULL,
  `role` ENUM('administrador', 'profesor', 'estudiante') NOT NULL,
  `description` LONGTEXT NULL DEFAULT NULL,
  `status` ENUM('registrado', 'activo', 'inactivo') NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app`.`knowledge_area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teacher_app`.`knowledge_area` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  `level` VARCHAR(45) NULL,
  `teacher_id` INT NOT NULL,
  `area` VARCHAR(80) NULL DEFAULT NULL,
  `active` TINYINT(1) NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_knowledge_areas_users1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_knowledge_areas_users1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `teacher_app`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app`.`student_enrollment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teacher_app`.`student_enrollment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rating` ENUM('1', '2', '3', '4', '5') NULL DEFAULT NULL,
  `review` LONGTEXT NULL DEFAULT NULL,
  `student_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `enrollment_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `active` TINYINT NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`, `student_id`, `teacher_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_student_enrollment_users1_idx` (`student_id` ASC) VISIBLE,
  INDEX `fk_student_enrollment_teacher_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_student_enrollment_teacher`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `teacher_app`.`user` (`id`),
  CONSTRAINT `fk_student_enrollment_users1`
    FOREIGN KEY (`student_id`)
    REFERENCES `teacher_app`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
