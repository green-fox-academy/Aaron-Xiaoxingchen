CREATE TABLE IF NOT EXISTS `users`(
`user_id` int  NOT NULL AUTO_INCREMENT,
`prefix` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT'',
`first_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
`last_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
`address` varchar(50) COLLATE latin1_general_ci  NOT NULL DEFAULT  '',
`height` decimal(12,1) NOT NULL DEFAULT '0.0' '',
`bitcoin_address`  varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
`color_preference` varchar(30) COLLATE latin1_general_ci NOT NULL DEFAULT '',
PRIMARY KEY(`user_id`)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


TRUNCATE TABLE users;


INSERT INTO `users` (`prefix`, `first_name`, `last_name`, `address`, `height`, `bitcoin_address`, `color_preference`) VALUES
('Rek', 'Godiva', 'Beeck', '324 Delladonna Terrace', 15.0, '1B6gZsv2ZSUQSK4t9v47BpHp8y9rwUB3Ab', '#289776');
 