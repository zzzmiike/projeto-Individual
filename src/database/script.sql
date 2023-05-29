CREATE DATABASE heroes;

use heroes;

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY,
    nome VARCHAR(150),
    descricao VARCHAR(5000),
    hp INT not null,
    resistência INT not null,
    forca INT not null,
    inteligencia INT not null,
    agilidade INT not null,
    defesa INT not null,
    armadura INT not null
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    fkPersonagem INT NOT NULL,
    FOREIGN KEY (fkPersonagem)
        REFERENCES personagem (idPersonagem)
);

CREATE TABLE respostas (
    idResposta INT AUTO_INCREMENT,
    fkPersoResp INT,
    FOREIGN KEY (fkPersoResp)
        REFERENCES personagem (idPersonagem),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario),
    PRIMARY KEY (idResposta , fkPersoResp , fkUsuario),
    acertos INT,
    dtResposta DATETIME DEFAULT CURRENT_TIMESTAMP
);

insert into personagem values
('1009220', 'Capitão America', 'Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics. Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics #1 (março de 1941) da Timely Comics, antecessora da Marvel Comics. Capitão América foi concebido como um super-herói patriótico que lutou contra as potências do Eixo na Segunda Guerra Mundial e foi personagem mais popular da Timely Comics durante o período da guerra. A popularidade dos super-heróis diminuiu após a guerra e os quadrinhos Capitão América foram interrompidos em 1950, com uma volta de curta duração em 1953. Em 1964, o personagem foi reintroduzido como participante do Universo Marvel', 100, 90, 86, 70, 78, 83, 58),
('1009368', 'Homem de Ferro', 'Homem de Ferro (Iron Man) é um personagem dos quadrinhos publicados pela Marvel Comics. Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usa armaduras de alta tecnologia no combate ao crime. Foi criado em 1963 pelo escritor Stan Lee, o roteirista Larry Lieber e os desenhistas Jack Kirby e Don Heck. Stan Lee aceitou o desafio de fazer um personagem ser odiado e depois amado pelo público, criando um dos super-heróis mais marcantes de todos os tempos.
A primeira publicação foi em Tales of Suspense #39 (história publicada pela primeira vez no Brasil em Heróis da TV 2ª Série n° 100). Desde então, se tornou um dos personagens mais conhecidos da Marvel, como membro dos Vingadores nas adaptações para desenhos animados e cinema (no qual foi interpretado por Robert Downey, Jr.).', 96, 94, 78, 100, 56, 90, 98 ),
('1011025', 'Thor', 'O super-herói Thor estreou na antologia de ficção científica fantasia Journey into Mystery #83 (agosto de 1962), criada por Stan Lee, Larry Lieber e Jack Kirby. Usar Thor em uma história em quadrinhos de super-heróis não foi uma novidade, a Fox Feature Syndicate publicou uma versão em 1940, a própria Marvel (quando ainda se chamava Atlas) teve a sua versão publicada em Venus #12-13 (fevereiro-abril de 1951). Ainda na década de 50, Jack Kirby havia criado uma versão de Thor para a DC Comics.
Quando O Poderoso Thor surgiu nos quadrinhos Marvel, os artistas se inspiraram nas lendas nórdicas, com seus deuses e ameaças tão fantásticas. Mas ele só foi retratado como o verdadeiro deus nórdico e não um humano com poderes, quando Lee assumiu os roteiros do personagem, que no início ficaram a cargo de seu irmão, Larry Lieber. Assim foi criado o mais poderoso membro dos Vingadores.
Em várias histórias Thor Odinson enfrenta divindades de outras mitologias. Um dos confrontos mais memoráveis foi quando combateu Hércules, numa série de histórias de Lee/Kirby e que introduziram os deuses gregos no Universo Marvel. Também já enfrentou o deus egípcio Seth.', 100, 100, 95, 43, 57, 98, 25),
('1009351', 'Hulk', 'Hulk, por vezes referido como O Incrível Hulk, é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicadas desde sua criação, na década de 1960. Concebido pelo roteirista Stan Lee (1922–2018) e pelo desenhista Jack Kirby (1917–1994), o Hulk teve sua primeira aparição junto ao público original dos Estados Unidos na revista The Incredible Hulk n°1, lançada no mercado americano pela Marvel Comics em maio de 1962, um título solo do queijo, garantindo-lhe o acesso ao que mais tarde seria popularmente conhecido como Universo Marvel dos quadrinhos/banda desenhada. A partir de então, o Hulk tem aparecido, protagonizando ou não, diversas histórias da editora, se tornando um dos mais visualmente reconhecíveis da mesma, tendo o universo entorno do personagem se expandido continuadamente ao longo das últimas décadas.
Apesar de fugir de diversos padrões pré-estabelecidos para super-heróis enquanto personagem da cultura pop mundial, o Hulk é considerado um super-herói, mais pelas características sobre-humanas por ele apresentadas do que por conceitos bases de inserção no gênero.', 100, 80, 100, 0, 35, 79, 25),
('1009189', 'Viuva Negra', 'A Viúva Negra, alter-ego de Natasha Romanoff, é uma personagem das histórias em quadrinhos do Universo Marvel publicado pela Marvel Comics.
Nascida na União Soviética, Natalia Alianovna Romanova foi criada por Stan Lee (edição), Don Rico (roteiro) e Don Heck (desenhos). A personagem apareceu pela primeira vez em Tales of Suspense #52 (abril de 1964) e foi introduzida pela primeira vez como uma espiã russa, antagonista do super-herói Homem de Ferro. Mais tarde ela fugiu para os Estados Unidos, tornando-se uma agente da S.H.I.E.L.D. e membra da equipe de super-heróis Vingadores.', 90, 100, 83, 97, 99, 90, 25),
('1009187', 'Pantera Negra', 'Pantera Negra é um super-herói das histórias em quadrinhos publicadas pela Marvel Comics, cuja identidade secreta é a de TChalla, rei de Wakanda, um reino fictício na África. O personagem foi criado pelo escritor e editor Stan Lee e pelo escritor e ilustrador Jack Kirby, aparecendo pela primeira vez em Fantastic Four nº 52 (julho de 1966) na Era de Prata das histórias em quadrinhos. Além de possuir habilidades aprimoradas alcançadas através de um antigo ritual de Wakanda, TChalla também conta com seu intelecto genial, treinamento físico rigoroso, habilidade em artes marciais, acesso a tecnologias avançadas e riqueza para combater seus inimigos. Pantera Negra também é conhecido por seu relacionamento com a super-heroína Tempestade dos X-Men. Embora os dois fossem casados e se envolvessem em inúmeras batalhas, suas lealdades colocariam uma pressão sobre o relacionamento, o que levaria a um eventual divórcio.
O Pantera Negra é o primeiro super-herói de ascendência africana criado por uma editora mainstream de quadrinhos norte-americanos que estreou anos antes dos super-heróis afro-americanos, como o Falcão (1969), Luke Cage (1972) e Blade (1973) da Marvel Comics ou o Lanterna Verde John Stewart, da DC Comics(1971).', 97, 100, 96, 98, 99, 94, 85),
('1001003', 'Homem Aranha', 'O Homem-Aranha (Spider-Man), o alter ego de Peter Parker, é um super-herói que aparece nas revistas em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor/editor Stan Lee e pelo escritor/artista Steve Ditko, o Homem-Aranha apareceu pela primeira vez na Amazing Fantasy #15 (01 de Agosto de 1962), durante a Era de Prata dos Quadrinhos. Lee e Ditko conceberam o personagem como um órfão que foi educado e criado pela sua tia (May Parker) e o seu tio (Ben Parker) em Nova Iorque e que, enquanto adolescente, tem de lidar com as lutas diárias normais da sua idade, em adição às lutas que tem como combatente do crime. Para combater seus inimigos, os criadores deram-lhe superforça e superagilidade, a capacidade de aderir na maioria das superfícies, a habilidade de disparar teias de aranha através de mecanismos montados nos pulsos (inventados por ele próprio e batizados de "lança-teia" — web-shooters) e a reação precognitiva ao perigo chamada "sentido-aranha" (spider-sense). Peter Parker adquiriu seus poderes após ter sido picado por uma aranha radioativa.
No início dos anos 1960, quando o Homem-Aranha fez sua primeira aparição, os adolescentes nos quadrinhos de super-heróis eram habitualmente relegados para papéis secundários, como coadjuvantes. ', 98, 86, 90, 96, 99, 87, 90);

select usuario.nome as nomeUsuario,
        usuario.username as username,
        usuario.senha as senha,
        usuario.email as email,
        personagem.idPersonagem as fkPersonagem,
        personagem.nome as personagem
 from personagem join usuario on idPersonagem = fkPersonagem;
 
 SELECT usuario.nome as nomeUsuario,
        usuario.username as username,
        usuario.senha as senha,
        usuario.email as email,
        personagem.idPersonagem as fkPersonagem,
        personagem.descricao as descricao,
        personagem.nome as personagem,
        personagem.hp as HP,
        personagem.resistência as Resistência,
        personagem.forca as Forca,
        personagem.inteligencia as Inteligencia,
        personagem.agilidade as Agilidade,
        personagem.defesa as Defesa,
        personagem.armadura as Armadura
        FROM usuario JOIN personagem ON fkPersonagem = idPersonagem;

SELECT * FROM respostas join usuario on fkUsuario = idUsuario
	join personagem on fkPersonagem = idPersonagem;