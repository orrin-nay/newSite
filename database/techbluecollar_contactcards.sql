-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: techbluecollar
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contactcards`
--

DROP TABLE IF EXISTS `contactcards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactcards` (
  `idcontact` int(11) NOT NULL AUTO_INCREMENT,
  `idsite` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `phonenumber` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `main` int(1) DEFAULT '0',
  PRIMARY KEY (`idcontact`),
  UNIQUE KEY `idcontact_UNIQUE` (`idcontact`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactcards`
--

LOCK TABLES `contactcards` WRITE;
/*!40000 ALTER TABLE `contactcards` DISABLE KEYS */;
INSERT INTO `contactcards` VALUES (1,1,'orrin naylor','CEO and Owner','8015571577','naylor.orrin@gmail.com','Orrin is the owner and foundre of techbluecollar.',1),(3,1,'orrin naylor','CEO and Owner','8015571577','naylor.orrin@gmail.com','Orrin is the owner and foundre of techbluecollar.',0),(28,51,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(39,62,'Orrin Naylor','czx','8012015569','naylor.orrin@gmail.com','cZX',1),(38,61,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(37,60,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(36,59,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(35,58,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(34,57,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(33,56,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(32,55,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(31,54,'Orrin Naylor','ceo bruh','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(29,52,'Orrin Naylor','fdsa','4354678723','naylor.orrin@gmail.com','orrin does all the things',1),(30,53,'Orrin Naylor','fdsa','4354678723','naylor.orrin@gmail.com','orrin does all the things',1),(40,63,'Orrin Naylor','fdsfads','8012015569','naylor.orrin@gmail.com','fdsafds',1),(41,64,'Orrin Naylor','fdas','8012015569','naylor.orrin@gmail.com','afsdfasd',1),(42,65,'Orrin Naylor','fdsa','8012015569','naylor.orrin@gmail.com','fsda',1),(43,66,'Orrin Naylor','d','8012015569','naylor.orrin@gmail.com','orrin does all the things',1),(44,67,'Orrin Naylor','fdsa','8012015569','naylor.orrin@gmail.com','fsad',1),(45,68,'Orrin Naylor','fdsa','8012015569','naylor.orrin@gmail.com','orrin does all the things',1);
/*!40000 ALTER TABLE `contactcards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-09 22:54:05
