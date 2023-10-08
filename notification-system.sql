-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 08, 2023 at 09:39 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notification-system`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `attachments` blob DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `type` varchar(255) DEFAULT NULL,
  `archive` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `title`, `content`, `attachments`, `created_at`, `type`, `archive`) VALUES
(1, 1, 'Pierwszy post', 'Treść pierwszego posta', NULL, '2023-09-28 08:00:00', 'news', 1),
(2, 2, 'Drugi post', 'Treść drugiego posta', NULL, '2023-09-21 09:15:00', 'note', 1),
(3, 1, 'Trzeci post', 'Treść trzeciego posta', NULL, '2023-09-21 10:30:00', 'note', NULL),
(4, 3, 'Czwarty post', 'Treść czwartego post', NULL, '2023-09-21 12:45:00', 'news', NULL),
(5, 2, 'Piąty post', 'Treść piątego posta', NULL, '2023-09-21 14:00:00', 'news', NULL),
(6, 1, 'Szósty post', 'Treść szóstego posta', NULL, '2023-09-21 15:15:00', 'note', NULL),
(7, 4, 'Siódmy post', 'Treść siódmego posta', NULL, '2023-09-21 16:30:00', 'note', NULL),
(8, 3, 'Ósmy post', 'Treść ósmego posta', NULL, '2023-09-21 17:45:00', 'news', NULL),
(9, 4, 'Dziewiąty post', 'Treść dziewiątego posta', NULL, '2023-09-21 19:00:00', 'note', NULL),
(10, 2, 'Dziesiąty post', 'Treść dziesiątego posta', NULL, '2023-09-21 20:15:00', 'news', NULL),
(11, 1, 'Pogoda', 'Dziś troszkę wietrzenie', NULL, '2023-10-04 18:55:31', 'news', NULL),
(22, 1, 'Mecz', 'dziś liga mistrzów', NULL, '2023-10-04 19:20:05', 'news', NULL),
(23, 1, 'praca', 'dziś wolne', NULL, '2023-10-04 19:21:25', 'news', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post_comments`
--

CREATE TABLE `post_comments` (
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `post_comments`
--

INSERT INTO `post_comments` (`comment_id`, `user_id`, `post_id`, `content`, `created_at`) VALUES
(1, 1, 1, 'To jest świetny post!', '2023-09-21 08:00:00'),
(2, 2, 2, 'Dziękujemy za ten artykuł.', '2023-09-21 09:15:00'),
(3, 3, 3, 'Bardzo ciekawy temat.', '2023-09-21 10:30:00'),
(4, 4, 4, 'Super zdjęcie!', '2023-09-21 12:45:00'),
(5, 5, 5, 'Takie treści lubię!', '2023-09-21 14:00:00'),
(6, 6, 6, 'Dobrze napisane.', '2023-09-21 15:15:00'),
(7, 7, 7, 'Czekam na więcej.', '2023-09-21 16:30:00'),
(8, 8, 8, 'Ogromne brawa!', '2023-09-21 17:45:00'),
(9, 9, 9, 'Jestem pod wrażeniem.', '2023-09-21 19:00:00'),
(10, 10, 10, 'Trzymaj tak dalej!', '2023-09-21 20:15:00'),
(11, 1, 2, 'Fajny post.', '2023-09-22 07:30:00'),
(12, 2, 3, 'Nie mogę się doczekać kolejnego.', '2023-09-22 08:45:00'),
(13, 3, 4, 'Ciekawostki!', '2023-09-22 10:00:00'),
(14, 4, 5, 'Świetnie wygląda.', '2023-09-22 11:15:00'),
(15, 5, 6, 'Masz talent.', '2023-09-22 12:30:00'),
(16, 6, 7, 'Dobre informacje.', '2023-09-22 13:45:00'),
(17, 7, 8, 'Warto przeczytać.', '2023-09-22 15:00:00'),
(18, 8, 9, 'Podoba mi się.', '2023-09-22 16:15:00'),
(19, 9, 10, 'Polecam każdemu.', '2023-09-22 17:30:00'),
(20, 10, 1, 'Dobry wybór tematu.', '2023-09-22 18:45:00'),
(21, 1, 10, 'To jest świetny post!', '2023-09-20 08:00:00');

--
-- Wyzwalacze `post_comments`
--
DELIMITER $$
CREATE TRIGGER `add_to_post_comment_relations` AFTER INSERT ON `post_comments` FOR EACH ROW BEGIN
    INSERT INTO post_comment_relations (post_id, comment_id)
    VALUES (NEW.post_id, NEW.comment_id);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post_comment_relations`
--

CREATE TABLE `post_comment_relations` (
  `post_id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `post_comment_relations`
--

INSERT INTO `post_comment_relations` (`post_id`, `comment_id`) VALUES
(1, 1),
(1, 11),
(2, 2),
(2, 12),
(3, 3),
(3, 13),
(4, 4),
(4, 14),
(5, 5),
(5, 15),
(6, 6),
(6, 16),
(7, 7),
(7, 17),
(8, 8),
(8, 18),
(9, 9),
(9, 19),
(10, 10),
(10, 20),
(10, 21);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tickets`
--

CREATE TABLE `tickets` (
  `ticket_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `priority` enum('niski','średni','wysoki') NOT NULL,
  `status` enum('otwarte','przypisane','zamknięte') NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modification_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`ticket_id`, `subject`, `description`, `priority`, `status`, `created_at`, `modification_date`, `user_id`, `owner_id`) VALUES
(1, 'Zgłoszenie 1', 'Opis zgłoszenia 1', 'niski', 'otwarte', '2023-10-04 22:14:53', '2023-10-05 19:24:22', 7, 1),
(2, 'Zgłoszenie 2', 'Opis zgłoszenia 2', 'średni', 'przypisane', '2023-10-04 22:14:53', '2023-10-05 19:24:22', 2, 1),
(3, 'Zgłoszenie 3', 'Opis zgłoszenia 3', 'wysoki', 'otwarte', '2023-10-04 22:14:53', '2023-10-05 19:24:22', 3, 1),
(4, 'Zgłoszenie 4', 'Opis zgłoszenia 4', 'niski', 'zamknięte', '2023-10-04 22:14:53', '2023-10-05 19:24:22', 4, 1),
(5, 'Zgłoszenie 5', 'Opis zgłoszenia 5', 'średni', 'otwarte', '2023-10-04 22:14:53', '2023-10-05 19:24:22', 5, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ticket_comments`
--

CREATE TABLE `ticket_comments` (
  `comment_id` int(11) NOT NULL,
  `ticket_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_text` text DEFAULT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `ticket_comments`
--

INSERT INTO `ticket_comments` (`comment_id`, `ticket_id`, `user_id`, `comment_text`, `comment_date`) VALUES
(1, 1, 6, 'Komentarz do zgłoszenia 1 - Komentarz 1', '2023-10-04 20:17:24'),
(2, 1, 7, 'Komentarz do zgłoszenia 1 - Komentarz 2', '2023-10-04 20:17:24'),
(3, 2, 8, 'Komentarz do zgłoszenia 2 - Komentarz 1', '2023-10-04 20:17:24'),
(4, 2, 9, 'Komentarz do zgłoszenia 2 - Komentarz 2', '2023-10-04 20:17:24'),
(5, 2, 10, 'Komentarz do zgłoszenia 2 - Komentarz 3', '2023-10-04 20:17:24'),
(6, 3, 6, 'Komentarz do zgłoszenia 3 - Komentarz 1', '2023-10-04 20:17:24'),
(7, 3, 7, 'Komentarz do zgłoszenia 3 - Komentarz 2', '2023-10-04 20:17:24'),
(8, 3, 8, 'Komentarz do zgłoszenia 3 - Komentarz 3', '2023-10-04 20:17:24'),
(9, 3, 9, 'Komentarz do zgłoszenia 3 - Komentarz 4', '2023-10-04 20:17:24'),
(10, 4, 10, 'Komentarz do zgłoszenia 4 - Komentarz 1', '2023-10-04 20:17:24'),
(11, 5, 6, 'Komentarz do zgłoszenia 5 - Komentarz 1', '2023-10-04 20:17:24'),
(12, 5, 7, 'Komentarz do zgłoszenia 5 - Komentarz 2', '2023-10-04 20:17:24'),
(13, 5, 8, 'Komentarz do zgłoszenia 5 - Komentarz 3', '2023-10-04 20:17:24');

--
-- Wyzwalacze `ticket_comments`
--
DELIMITER $$
CREATE TRIGGER `add_to_ticket_comment_relations` AFTER INSERT ON `ticket_comments` FOR EACH ROW BEGIN
    INSERT INTO ticket_comment_relations (ticket_id, comment_id)
    VALUES (NEW.ticket_id, NEW.comment_id);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ticket_comment_relations`
--

CREATE TABLE `ticket_comment_relations` (
  `ticket_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `ticket_comment_relations`
--

INSERT INTO `ticket_comment_relations` (`ticket_id`, `comment_id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(5, 11),
(5, 12),
(5, 13);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `permissions` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname`, `email`, `password`, `permissions`) VALUES
(1, 'John', 'Doe', 'john@example.com', 'haslo123', 'admin'),
(2, 'Alice', 'Smith', 'alice@example.com', 'tajnehaslo', 'user'),
(3, 'Bob', 'Johnson', 'bob@example.com', 'mojehaslo', 'user'),
(4, 'Eva', 'Brown', 'eva@example.com', 'silnehaslo', 'user'),
(5, 'Michael', 'Wilson', 'michael@example.com', '123456', 'user'),
(6, 'Olivia', 'Lee', 'olivia@example.com', 'haselko', 'user'),
(7, 'David', 'Anderson', 'david@example.com', 'haselkopodobne', 'user'),
(8, 'Sophia', 'Robinson', 'sophia@example.com', 'qwerty', 'user'),
(9, 'Daniel', 'Murphy', 'daniel@example.com', 'mypass123', 'user'),
(10, 'Emma', 'Garcia', 'emma@example.com', '12345678', 'user');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `post_comments`
--
ALTER TABLE `post_comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `comments_ibfk_2` (`post_id`);

--
-- Indeksy dla tabeli `post_comment_relations`
--
ALTER TABLE `post_comment_relations`
  ADD PRIMARY KEY (`post_id`,`comment_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- Indeksy dla tabeli `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `fk_owner_id` (`owner_id`);

--
-- Indeksy dla tabeli `ticket_comments`
--
ALTER TABLE `ticket_comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `ticket_id` (`ticket_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `ticket_comment_relations`
--
ALTER TABLE `ticket_comment_relations`
  ADD KEY `ticket_id` (`ticket_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ticket_comments`
--
ALTER TABLE `ticket_comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD CONSTRAINT `post_comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `post_comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

--
-- Constraints for table `post_comment_relations`
--
ALTER TABLE `post_comment_relations`
  ADD CONSTRAINT `post_comment_relations_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  ADD CONSTRAINT `post_comment_relations_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `post_comments` (`comment_id`);

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `fk_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `ticket_comments`
--
ALTER TABLE `ticket_comments`
  ADD CONSTRAINT `ticket_comments_ibfk_1` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`ticket_id`),
  ADD CONSTRAINT `ticket_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `ticket_comment_relations`
--
ALTER TABLE `ticket_comment_relations`
  ADD CONSTRAINT `ticket_comment_relations_ibfk_1` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`ticket_id`),
  ADD CONSTRAINT `ticket_comment_relations_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `ticket_comments` (`comment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
