-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema winetrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `winetrackerdb` ;

-- -----------------------------------------------------
-- Schema winetrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `winetrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `winetrackerdb` ;

-- -----------------------------------------------------
-- Table `winery`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `winery` ;

CREATE TABLE IF NOT EXISTS `winery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `link` VARCHAR(180) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wine` ;

CREATE TABLE IF NOT EXISTS `wine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `rating` INT NOT NULL,
  `price` VARCHAR(45) NULL,
  `tasting_notes` VARCHAR(200) NULL,
  `winery_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_wine_winery_idx` (`winery_id` ASC),
  CONSTRAINT `fk_wine_winery`
    FOREIGN KEY (`winery_id`)
    REFERENCES `winery` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS wineuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'wineuser'@'localhost' IDENTIFIED BY 'wineuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'wineuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `winery`
-- -----------------------------------------------------
START TRANSACTION;
USE `winetrackerdb`;
INSERT INTO `winery` (`id`, `name`, `city`, `link`) VALUES (1, 'The Winery at Holy Cross Abbey', 'Cañon City', 'https://abbeywinery.com/');
INSERT INTO `winery` (`id`, `name`, `city`, `link`) VALUES (2, 'Aspen Peak Cellars', 'Bailey', 'https://www.aspenpeakcellars.com/');
INSERT INTO `winery` (`id`, `name`, `city`, `link`) VALUES (3, 'Steamboat Winery', 'Steamboat Springs', 'https://steamboatwinery.com/');
INSERT INTO `winery` (`id`, `name`, `city`, `link`) VALUES (4, 'InVINtions', 'Greenwood Village', 'https://www.invintionswinery.com/');

COMMIT;


-- -----------------------------------------------------
-- Data for table `wine`
-- -----------------------------------------------------
START TRANSACTION;
USE `winetrackerdb`;
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (1, 'American Riesling', 2018, 'Riesling', 'white', 4, '19.00', 'Fruity tartness and refreshing crisp finish ', 1);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (2, 'Pomegranate Rouge', 2018, 'Zinfandel', 'red', 3, '16.00', 'This light red wine is made from Zinfandel with natural pomegranate flavors and is very refreshing, balanced with sweet and tang.', 2);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (3, 'Cabernet Sauvignon', 2017, 'Cabernet Sauvignon', 'red', 5, '32.00', 'Intensely smooth with big black cherry and smoky oak on the palette.', 1);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (4, 'Monterey Chardonnay', 2017, 'Chardonnay', 'white', 3, '21.00', 'Loaded with beautiful, ripe fruit flavors of pear, green apple, citrus and hints of oak. ', 1);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (5, 'Colorado Riesling', 2018, 'Riesling', 'white', 2, '17.00', 'Off-dry with aromas of pear and other wonderful aromatics. Well balanced between a touch of sweetness and refreshing acidity.', 2);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (6, 'River Angler Cabernet', 2016, 'Cabernet', 'red', 4, '25.99', ' It is richly layered with flavors of spice: vanilla, allspice, and cinnamon, blended with hints of blackberry, boysenberry, violets, mocha and Creme de cassis.', 3);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (7, 'The Aspens Barbera', 2017, 'Barbera', 'red', 4, '24.99', 'This savory Barbera has a ruby red color.  It has hints of cherry, currrant and baking spice with supple tannins and fresh acidity.', 3);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (8, 'Perfect Mates', 2019, 'White Blend', 'white', 4, '24.95', ' Zesty notes of green apple and orange peel form the backdrop of this fruit forward wine.', 4);
INSERT INTO `wine` (`id`, `name`, `year`, `type`, `color`, `rating`, `price`, `tasting_notes`, `winery_id`) VALUES (9, 'Devil’s Rebellion', 2019, 'Red Blend', 'red', 5, '24.95', 'This full-bodied red offers big plum and cherry fruit with a defining spice of red currant with rich black cherry, mocha, vanilla and smoke flavors.', 4);

COMMIT;

