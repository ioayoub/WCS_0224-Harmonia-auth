create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  firstname VARCHAR(150) NOT NULL,
  lastname VARCHAR(150) NOT NULL,
  password varchar(255) not null,
  role VARCHAR(255) NOT NULL DEFAULT "user"
);

