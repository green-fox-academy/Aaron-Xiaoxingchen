create table if not exists posts(
	post_id BIGINT NOT NULL AUTO_INCREMENT,
	title varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT ' ',
  url varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT ' ',
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score int NOT NULL DEFAULT '0',
  PRIMARY KEY(post_id)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;