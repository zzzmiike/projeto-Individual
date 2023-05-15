CREATE DATABASE heroes;

use heroes;

CREATE TABLE usuario (
	idUsuario INT primary key auto_increment,
	username VARCHAR(100),
	nome VARCHAR(250),
	email VARCHAR(250),
	senha VARCHAR(50)
);

create table personagem (
	idPersonagem INT,
	nome varchar(150),
	descricao varchar(500),
	thumbnail varchar(500)
);

create table persoFav (
	idPersoFav int,
	nomePersofav VARCHAR(150)
);