create table if not exists comments(
	comment_id int NOT NULL AUTO_INCREMENT,
  post_id int NOT NULL,
  FOREIGN KEY(post_id) REFERENCES post(post_id),
  PRIMARY KEY(comment_id)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;