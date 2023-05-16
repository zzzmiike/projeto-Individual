CREATE DATABASE heroes;

use heroes;

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY,
    nome VARCHAR(150),
    descricao VARCHAR(500),
    thumbnail VARCHAR(500)
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE,
    nome VARCHAR(250),
    email VARCHAR(250) UNIQUE,
    senha VARCHAR(50),
    fkPersonagem INT,
    CONSTRAINT fkpersonagem FOREIGN KEY (fkPersonagem)
        REFERENCES personagem (idPersonagem)
);

insert into personagem values
('1009220', 'Capitão America', 'Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics.', './assets/img/pesons/capitao.png'),
('1009368', 'Homem de Ferro', 'O Homem de Ferro foi um personagem dos quadrinhos publicados pela Marvel Comics.', './assets/img/pesons/iron-man.svg'),
('1011025', 'Thor', 'Thor é um personagem fictício que aparece nas histórias em quadrinhos, publicadas pela Marvel Comics.', './assets/img/pesons/capitao.png'),
('1009351', 'Hulk', '.', './assets/img/pesons/capitao.png'),
('1009189', 'Viuva Negra', '.', './assets/img/pesons/capitao.png'),
('1009187', 'Pantera Negra', '.', './assets/img/pesons/capitao.png');

select usuario.nome as NomeDoUsuario,
			usuario.username as Username,
            usuario.email as Email,
            personagem.nome as PersonagemFavorito
 from personagem join usuario on idPersonagem = fkPersonagem;
 
 select * from usuario;