DROP DATABASE IF EXISTS burgDB;
CREATE DATABASE burgDB;
USE burgDB;

CREATE TABLE BURG (
id int primary key auto_increment,
burg_name VARCHAR(30) NOT NULL,
burg_eaten BOOLEAN,
burg_time timestamp
)

