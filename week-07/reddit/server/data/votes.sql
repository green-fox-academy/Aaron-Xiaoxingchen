create table if not exists votes(
	vote_id BIGINT,
  post_id BIGINT,
  user_id BIGINT,
	score int NOT NULL DEFAULT 0,
  FOREIGN KEY(post_id) REFERENCES posts(post_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  PRIMARY KEY(post_id, user_id)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;