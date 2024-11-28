CREATE DATABASE `custom_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;


DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_0.jpg','홍길동','9612324','남자','대학생'),(2,'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_1.jpg','홍길동2','9612321','여자','무직'),(3,'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg','김좌진','1212321','남자','무직'),(4,'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg','임꺽정','2212321','남자','도둑');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-29  3:02:00
