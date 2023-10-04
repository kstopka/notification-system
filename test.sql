-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.101.56:3306
-- Czas generowania: 28 Maj 2023, 10:35
-- Wersja serwera: 8.0.32-24
-- Wersja PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `piomroz_systemZarzadzaniaProdukcja`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Country`
--

CREATE TABLE `db.Country` (
  `idCountry` int NOT NULL,
  `nameCountry` varchar(45) NOT NULL,
  `descriptionCountry` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Customer`
--

CREATE TABLE `db.Customer` (
  `idCustomer` int NOT NULL,
  `salesValueCustomer` double NOT NULL,
  `nameCustomer` varchar(60) NOT NULL,
  `NIPCustomer` varchar(45) NOT NULL,
  `countryCustomer` int NOT NULL,
  `cityCustomer` varchar(45) NOT NULL,
  `post_codeCustomer` varchar(45) NOT NULL,
  `buildingNumberCustomer` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.DetailsOrder`
--

CREATE TABLE `db.DetailsOrder` (
  `idDetailsOrder` int NOT NULL,
  `partIdDetailOrder` bigint NOT NULL,
  `qualityDetailOrder` int NOT NULL,
  `idGeneralDetailOrder` int NOT NULL,
  `qualityOccupiedDetailOrder` int NOT NULL,
  `qualityProductionDetailsOrder` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.GeneralTreatment`
--

CREATE TABLE `db.GeneralTreatment` (
  `idGeneralTreatment` int NOT NULL,
  `partGeneralTreatment` int NOT NULL,
  `treatmentOptionGeneralTreatment` int NOT NULL,
  `expectedTimeGeneralTreatment` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Material`
--

CREATE TABLE `db.Material` (
  `idMaterial` tinyint NOT NULL,
  `nameMaterial` varchar(50) NOT NULL,
  `priceMaterial` double NOT NULL,
  `unitMaterial` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Orders`
--

CREATE TABLE `db.Orders` (
  `idOrders` int NOT NULL,
  `customerIdOrders` int NOT NULL,
  `dateOrders` date NOT NULL,
  `deliveryOrders` date DEFAULT NULL,
  `expectedTravelOrders` tinyint NOT NULL,
  `finishOrders` date DEFAULT NULL,
  `valueOrders` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Parts`
--

CREATE TABLE `db.Parts` (
  `idParts` int NOT NULL,
  `nameParts` varchar(55) NOT NULL,
  `materialParts` tinyint NOT NULL,
  `quintityMagazinParts` int NOT NULL,
  `quantityOrderParts` int NOT NULL,
  `quantityOccupiedParts` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Production`
--

CREATE TABLE `db.Production` (
  `idProduction` bigint NOT NULL,
  `treatmentIdProduction` int NOT NULL,
  `startDateProduction` date NOT NULL,
  `finishDateProduction` date NOT NULL,
  `qualityProduction` int NOT NULL,
  `productionOrderProduction` int NOT NULL,
  `partIdProduction` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.ProductionOrder`
--

CREATE TABLE `db.ProductionOrder` (
  `idProductionOrder` int NOT NULL,
  `founderUser` int NOT NULL,
  `projectNameProductionOrder` int NOT NULL,
  `deadlineProductionOrder` date NOT NULL,
  `expectionFinishProductionOrder` date DEFAULT NULL,
  `priorytyProductionOrder` tinyint NOT NULL,
  `customerProductionOrder` int NOT NULL,
  `dateOfFinishProductionOrder` date DEFAULT NULL,
  `dateOfBirthProductionOrder` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Projekt`
--

CREATE TABLE `db.Projekt` (
  `idProjekt` int NOT NULL,
  `nameProjekt` varchar(45) NOT NULL,
  `descriptionProjekt` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.ProjektPartList`
--

CREATE TABLE `db.ProjektPartList` (
  `idProjektPartList` bigint NOT NULL,
  `partProjektPartList` int NOT NULL,
  `quantityProjektPartList` int NOT NULL,
  `projektProjektPartList` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Right`
--

CREATE TABLE `db.Right` (
  `idRight` tinyint NOT NULL,
  `positionNameRight` varchar(45) NOT NULL,
  `listToolRight` tinyint NOT NULL,
  `modifyProductionRight` tinyint NOT NULL,
  `modifySaleDepRight` tinyint NOT NULL,
  `modifyMagazinRight` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.TreatmentOptions`
--

CREATE TABLE `db.TreatmentOptions` (
  `idTreatmentOptions` int NOT NULL,
  `nameTreatmentOptions` varchar(60) NOT NULL,
  `costTreatmentOptions` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `db.Users`
--

CREATE TABLE `db.Users` (
  `idUsers` int NOT NULL,
  `nemeUsers` varchar(45) NOT NULL,
  `passwordUsers` varchar(45) NOT NULL,
  `positionUsers` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `db.Country`
--
ALTER TABLE `db.Country`
  ADD PRIMARY KEY (`idCountry`);

--
-- Indeksy dla tabeli `db.Customer`
--
ALTER TABLE `db.Customer`
  ADD PRIMARY KEY (`idCustomer`),
  ADD KEY `countryCustomerRelation` (`countryCustomer`);

--
-- Indeksy dla tabeli `db.DetailsOrder`
--
ALTER TABLE `db.DetailsOrder`
  ADD PRIMARY KEY (`idDetailsOrder`);

--
-- Indeksy dla tabeli `db.GeneralTreatment`
--
ALTER TABLE `db.GeneralTreatment`
  ADD PRIMARY KEY (`idGeneralTreatment`),
  ADD KEY `treatmentOptionGeneralTreatmentRelation` (`treatmentOptionGeneralTreatment`),
  ADD KEY `partGeneralTreatment` (`partGeneralTreatment`);

--
-- Indeksy dla tabeli `db.Material`
--
ALTER TABLE `db.Material`
  ADD PRIMARY KEY (`idMaterial`);

--
-- Indeksy dla tabeli `db.Orders`
--
ALTER TABLE `db.Orders`
  ADD PRIMARY KEY (`idOrders`),
  ADD KEY `customerOrderRelation` (`customerIdOrders`);

--
-- Indeksy dla tabeli `db.Parts`
--
ALTER TABLE `db.Parts`
  ADD PRIMARY KEY (`idParts`),
  ADD KEY `materialParts` (`materialParts`);

--
-- Indeksy dla tabeli `db.Production`
--
ALTER TABLE `db.Production`
  ADD PRIMARY KEY (`idProduction`),
  ADD KEY `productionOrderRelation` (`productionOrderProduction`),
  ADD KEY `partsProductionRelation` (`partIdProduction`),
  ADD KEY `treatmentProductionRelation` (`treatmentIdProduction`);

--
-- Indeksy dla tabeli `db.ProductionOrder`
--
ALTER TABLE `db.ProductionOrder`
  ADD PRIMARY KEY (`idProductionOrder`),
  ADD KEY `ProjectNameProductionOrderRelation` (`projectNameProductionOrder`),
  ADD KEY `founderUserProductionOrder` (`founderUser`),
  ADD KEY `customerProductionOrder` (`customerProductionOrder`);

--
-- Indeksy dla tabeli `db.Projekt`
--
ALTER TABLE `db.Projekt`
  ADD PRIMARY KEY (`idProjekt`);

--
-- Indeksy dla tabeli `db.ProjektPartList`
--
ALTER TABLE `db.ProjektPartList`
  ADD PRIMARY KEY (`idProjektPartList`),
  ADD KEY `partProjektPartList` (`partProjektPartList`),
  ADD KEY `projektProjektPartList` (`projektProjektPartList`);

--
-- Indeksy dla tabeli `db.Right`
--
ALTER TABLE `db.Right`
  ADD PRIMARY KEY (`idRight`);

--
-- Indeksy dla tabeli `db.TreatmentOptions`
--
ALTER TABLE `db.TreatmentOptions`
  ADD PRIMARY KEY (`idTreatmentOptions`);

--
-- Indeksy dla tabeli `db.Users`
--
ALTER TABLE `db.Users`
  ADD PRIMARY KEY (`idUsers`),
  ADD KEY `positionUderRelation` (`positionUsers`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `db.Country`
--
ALTER TABLE `db.Country`
  MODIFY `idCountry` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Customer`
--
ALTER TABLE `db.Customer`
  MODIFY `idCustomer` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.DetailsOrder`
--
ALTER TABLE `db.DetailsOrder`
  MODIFY `idDetailsOrder` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.GeneralTreatment`
--
ALTER TABLE `db.GeneralTreatment`
  MODIFY `idGeneralTreatment` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Material`
--
ALTER TABLE `db.Material`
  MODIFY `idMaterial` tinyint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Orders`
--
ALTER TABLE `db.Orders`
  MODIFY `idOrders` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Parts`
--
ALTER TABLE `db.Parts`
  MODIFY `idParts` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Production`
--
ALTER TABLE `db.Production`
  MODIFY `idProduction` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Projekt`
--
ALTER TABLE `db.Projekt`
  MODIFY `idProjekt` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.ProjektPartList`
--
ALTER TABLE `db.ProjektPartList`
  MODIFY `idProjektPartList` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Right`
--
ALTER TABLE `db.Right`
  MODIFY `idRight` tinyint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.TreatmentOptions`
--
ALTER TABLE `db.TreatmentOptions`
  MODIFY `idTreatmentOptions` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `db.Users`
--
ALTER TABLE `db.Users`
  MODIFY `idUsers` int NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `db.Customer`
--
ALTER TABLE `db.Customer`
  ADD CONSTRAINT `countryCustomerRelation` FOREIGN KEY (`countryCustomer`) REFERENCES `db.Country` (`idCountry`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.GeneralTreatment`
--
ALTER TABLE `db.GeneralTreatment`
  ADD CONSTRAINT `partGeneralTreatment` FOREIGN KEY (`partGeneralTreatment`) REFERENCES `db.Parts` (`idParts`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `treatmentOptionGeneralTreatmentRelation` FOREIGN KEY (`treatmentOptionGeneralTreatment`) REFERENCES `db.TreatmentOptions` (`idTreatmentOptions`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.Orders`
--
ALTER TABLE `db.Orders`
  ADD CONSTRAINT `customerOrderRelation` FOREIGN KEY (`customerIdOrders`) REFERENCES `db.Customer` (`idCustomer`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.Parts`
--
ALTER TABLE `db.Parts`
  ADD CONSTRAINT `materialParts` FOREIGN KEY (`materialParts`) REFERENCES `db.Material` (`idMaterial`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.Production`
--
ALTER TABLE `db.Production`
  ADD CONSTRAINT `partsProductionRelation` FOREIGN KEY (`partIdProduction`) REFERENCES `db.Parts` (`idParts`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `productionOrderRelation` FOREIGN KEY (`productionOrderProduction`) REFERENCES `db.ProductionOrder` (`idProductionOrder`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `treatmentProductionRelation` FOREIGN KEY (`treatmentIdProduction`) REFERENCES `db.TreatmentOptions` (`idTreatmentOptions`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.ProductionOrder`
--
ALTER TABLE `db.ProductionOrder`
  ADD CONSTRAINT `customerProductionOrder` FOREIGN KEY (`customerProductionOrder`) REFERENCES `db.Customer` (`idCustomer`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `founderUserProductionOrder` FOREIGN KEY (`founderUser`) REFERENCES `db.Users` (`idUsers`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ProjectNameProductionOrderRelation` FOREIGN KEY (`projectNameProductionOrder`) REFERENCES `db.Projekt` (`idProjekt`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.ProjektPartList`
--
ALTER TABLE `db.ProjektPartList`
  ADD CONSTRAINT `partProjektPartList` FOREIGN KEY (`partProjektPartList`) REFERENCES `db.Parts` (`idParts`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `projektProjektPartList` FOREIGN KEY (`projektProjektPartList`) REFERENCES `db.Projekt` (`idProjekt`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ograniczenia dla tabeli `db.Users`
--
ALTER TABLE `db.Users`
  ADD CONSTRAINT `positionUderRelation` FOREIGN KEY (`positionUsers`) REFERENCES `db.Right` (`idRight`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
