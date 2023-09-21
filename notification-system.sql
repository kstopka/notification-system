-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Wrz 21, 2023 at 10:20 PM
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
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `user_id`, `post_id`, `content`, `created_at`) VALUES
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
-- Wyzwalacze `comments`
--
DELIMITER $$
CREATE TRIGGER `add_to_post_comment_relations` AFTER INSERT ON `comments` FOR EACH ROW BEGIN
    INSERT INTO post_comment_relations (post_id, comment_id)
    VALUES (NEW.post_id, NEW.comment_id);
END
$$
DELIMITER ;

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
(1, 1, 'Pierwszy post', 'Treść pierwszego posta', NULL, '2023-09-21 08:00:00', 'news', 1),
(2, 2, 'Drugi post', 'Treść drugiego posta', NULL, '2023-09-21 09:15:00', 'note', 1),
(3, 1, 'Trzeci post', 'Treść trzeciego posta', NULL, '2023-09-21 10:30:00', 'note', NULL),
(4, 3, 'Czwarty post', 'Treść czwartego posta', NULL, '2023-09-21 12:45:00', 'news', NULL),
(5, 2, 'Piąty post', 'Treść piątego posta', NULL, '2023-09-21 14:00:00', 'news', NULL),
(6, 1, 'Szósty post', 'Treść szóstego posta', NULL, '2023-09-21 15:15:00', 'note', NULL),
(7, 4, 'Siódmy post', 'Treść siódmego posta', NULL, '2023-09-21 16:30:00', 'note', NULL),
(8, 3, 'Ósmy post', 'Treść ósmego posta', NULL, '2023-09-21 17:45:00', 'news', NULL),
(9, 4, 'Dziewiąty post', 'Treść dziewiątego posta', NULL, '2023-09-21 19:00:00', 'note', NULL),
(10, 2, 'Dziesiąty post', 'Treść dziesiątego posta', NULL, '2023-09-21 20:15:00', 'news', NULL);

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
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname`, `email`, `password`) VALUES
(1, 'John', 'Doe', 'john@example.com', 'haslo123'),
(2, 'Alice', 'Smith', 'alice@example.com', 'tajnehaslo'),
(3, 'Bob', 'Johnson', 'bob@example.com', 'mojehaslo'),
(4, 'Eva', 'Brown', 'eva@example.com', 'silnehaslo'),
(5, 'Michael', 'Wilson', 'michael@example.com', '123456'),
(6, 'Olivia', 'Lee', 'olivia@example.com', 'haselko'),
(7, 'David', 'Anderson', 'david@example.com', 'haselkopodobne'),
(8, 'Sophia', 'Robinson', 'sophia@example.com', 'qwerty'),
(9, 'Daniel', 'Murphy', 'daniel@example.com', 'mypass123'),
(10, 'Emma', 'Garcia', 'emma@example.com', '12345678');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `post_comment_relations`
--
ALTER TABLE `post_comment_relations`
  ADD PRIMARY KEY (`post_id`,`comment_id`),
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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `post_comment_relations`
--
ALTER TABLE `post_comment_relations`
  ADD CONSTRAINT `post_comment_relations_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  ADD CONSTRAINT `post_comment_relations_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`comment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
