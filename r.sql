-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 29 déc. 2022 à 15:32
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quiz`
--

-- --------------------------------------------------------

--
-- Structure de la table `responses`
--

CREATE TABLE `responses` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `iscorrect` int(11) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `responses`
--

INSERT INTO `responses` (`id`, `content`, `iscorrect`, `question_id`) VALUES
(1, 'Amazon EC2 costs are billed on a monthly basis', 0, 1),
(2, 'Users retain full administrative access to their Amazon EC2 instances', 0, 1),
(3, 'Amazon EC2 instances can be launched on demand when needed.', 1, 1),
(4, 'Users can permanently run enough instances to handle peak workloads', 0, 1),
(5, 'AWS Storage Gateway', 0, 2),
(6, 'AWS Database Migration Service (AWS DMS)', 1, 2),
(7, 'Amazon EC2.', 0, 2),
(8, 'Amazon AppStream 2.0', 0, 2),
(9, 'AWS Config', 0, 3),
(10, 'AWS OpsWorks', 0, 3),
(11, 'AWS SDK', 0, 3),
(12, 'AWS Marketplace', 1, 3),
(13, 'AWS Config', 0, 4),
(14, 'Amazon Route 53', 0, 4),
(15, 'AWS Direct Connect', 0, 4),
(16, 'Amazon Virtual Private Cloud (Amazon VPC)', 1, 4),
(17, 'Configuring third-party applications', 0, 5),
(18, 'Maintaining physical hardware ', 1, 5),
(19, 'Securing application access and data', 0, 5),
(20, 'Managing guest operating systems', 0, 5),
(21, 'AWS Regions', 0, 6),
(22, 'Edge locations', 1, 6),
(23, 'Availability Zones', 0, 6),
(24, 'Virtual Private Cloud (VPC)', 0, 6),
(25, 'Use Amazon Cloud Directory', 0, 7),
(26, 'Audit AWS Identity and Access Management (IAM) roles', 0, 7),
(27, 'Enable multi-factor authentication', 1, 7),
(28, 'Enable AWS CloudTrail', 0, 7),
(29, 'AWS Trusted Advisor', 0, 8),
(30, 'AWS CloudTrail', 1, 8),
(31, 'AWS X-Ray', 0, 8),
(32, 'AWS Identity and Access Management (AWS IAM)', 0, 8),
(33, 'Amazon Simple Notification Service (Amazon SNS)', 0, 9),
(34, 'AWS CloudTrail', 0, 9),
(35, 'AWS Trusted Advisor', 0, 9),
(36, 'Amazon Route 53', 1, 9),
(37, 'AWS Trusted Advisor', 0, 10),
(38, 'AWS Identity and Access Management (IAM)', 0, 10),
(39, 'AWS Billing Console', 0, 10),
(40, 'AWS Acceptable Use Policy', 1, 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `responses`
--
ALTER TABLE `responses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;