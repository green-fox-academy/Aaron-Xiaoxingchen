
CREATE TABLE IF NOT EXISTS `users`(
`user_id` int  NOT NULL AUTO_INCREMENT,
`first_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
`last_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
`address` varchar(50) COLLATE latin1_general_ci  NOT NULL DEFAULT  '',
PRIMARY KEY(`user_id`)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE IF NOT EXISTS `list`(
`list_id` int NOT NULL AUTO_INCREMENT,
`user_id` int NOT NULL DEFAULT,
`todo_content` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT'',
`complete` boolean COLLATE latin1_general_ci DEFAULT FALSE'',
FOREIGN KEY(user_id) REFERENCES users(user_id);

)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `users` (`first_name`, `last_name`, `address`) VALUES
(`xiaoxing`, `chen`, `sdfjk`)'',
('KYYY', `wang`, `shjfk`);

INSERT INTO `list`(`user_id`, `todo_content`, `complete`) VALUES
(1, 'whantjkdfk', TRUE)'',
(2, 'fuckkkkkk', FALSE);


