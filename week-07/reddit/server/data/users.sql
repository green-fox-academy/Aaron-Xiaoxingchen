create table if not exists users(
	user_id BIGINT NOT NULL AUTO_INCREMENT,
  user_name varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT ' ',
  user_password varchar(25) COLLATE latin1_general_ci NOT NULL ,
  PRIMARY KEY(user_id)
)ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;