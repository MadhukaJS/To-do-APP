CREATE DATABASE  IF NOT EXISTS `tododb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tododb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: tododb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `completed` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'Complete project documentation','Write comprehensive',1,'2025-07-24 13:08:51'),(2,'uuu','yyy',0,'2025-07-24 21:25:23'),(3,'hi','mm',0,'2025-07-24 23:00:39'),(4,'test2','this is test',1,'2025-07-24 23:10:20'),(5,'t3','ttttt3',1,'2025-07-24 23:14:11'),(6,'t6','66',1,'2025-07-24 23:29:56'),(7,'ko','k11',1,'2025-07-25 04:03:17'),(8,'test madhuka','hi',0,'2025-07-25 04:42:32'),(9,'hi','hi',1,'2025-07-25 04:54:07'),(10,'go to shop','cargills',1,'2025-07-25 04:56:20'),(11,'hi','hello',1,'2025-07-25 05:30:39'),(12,'44','rr',1,'2025-07-25 07:54:52'),(13,'hi','mmm',0,'2025-07-25 08:11:12'),(14,'hello456','gg',1,'2025-07-25 08:14:11'),(15,'go shoping','buy some foods',0,'2025-07-25 08:25:24'),(16,'go to gym','get water bottle',0,'2025-07-25 08:37:18'),(17,'go to temple','get flowers and oil lamps',0,'2025-07-25 08:37:36'),(18,'office trip payment','5000/-',0,'2025-07-25 08:44:41'),(19,'go to swimming','get goggles',0,'2025-07-25 08:47:04'),(20,'go to playground','get bat and ball',0,'2025-07-25 09:07:25');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-25  9:20:39
