CREATE DATABASE heroes;

use heroes;

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY,
    nome VARCHAR(150),
    descricao VARCHAR(5000),
    descricao1 varchar(5000),
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
(1009220, 'Capitão America', 'Nascido em 4 de Julho de 1922, filho de um casal pobre de imigrantes irlandeses, Sarah e Joseph Rogers (falecidos em sua adolescência), Steve Rogers era um rapaz com problemas de saúde que desejava, de qualquer forma, participar dos esforços estadunidenses para vencer a Segunda Guerra Mundial. Ao ter seu alistamento recusado por sua saúde debilitada, ele deixa claro estar disposto a fazer qualquer coisa para ajudar na guerra. Esse "qualquer coisa" é tão literal que ele se torna parte de um experimento para a criação de soldados superficiais a alguém: o "projeto supersoldado", que consistia em um soro especial e criado pelo Dr. Joseph Reinstein, anos depois, um retcon diria que esse foi um codinome usado pelo cientista Abraham Erskine. O nome "Erskine" foi usado pela primeira vez em um romance The Great Gold Steal por Ted Branco publicado pela Bantam Books em 1968.
Contudo, na equipe do projeto havia Heinz Kruger, um agente duplo a serviço dos nazistas, que mata Erskine. Como não havia registro escrito da fórmula, essa se perdeu com a morte do cientista, e Steve Rogers acaba se tornando o único daquilo que deveria ser um exército de supersoldados.', 'Em 1946, ao lado de Bucky, Tocha Humana, Centelha, Namor, o Príncipe Submarino, Ciclone e Miss América integrou o "Esquadrão Vitorioso" (All-Winners Squad no original). A revista Captain America Comics foi cancelada no número 75 (fevereiro de 1950).
A Atlas Comics (segundo nome adotado pela Timely) tentou reviver seus títulos de super-heróis quando reintroduziu o Capitão América, junto com o Tocha Humana original e Namor em Young Men #24 (Dezembro de 1953). Anunciado como "Captain America, Commie Smasher!", Capitão América apareceu durante o próximo ano, em Young Men #24-28 e Men`s Adventures #27-28, bem como nas edições #76-78 de Captain America. As tentativas de renascimento do super-herói foram um fracasso comercial, e o título do personagem foi cancelado com Captain America #78 (Setembro de 1954) Em 1964, a Marvel (terceiro e último nome adotado pela Timely) reviveu o Capitão América ao revelar que ele tinha caído de um avião experimental no Atlântico Norte nos últimos dias da guerra e que passara as últimas décadas congelado, num estado de morte aparente (animação suspensa). O herói ressurgiu com uma nova geração de leitores como o líder de um grupo de super-heróis conhecido como os Vingadores (The Avengers #4, publicado em 1964).', 100, 90, 86, 70, 78, 83, 58),
(1009368, 'Homem de Ferro', 'Tony Stark teve uma relação difícil com seu pai, sendo enviado aos seis anos de idade para um internato, onde ele iria em breve começar a experimentar a convivência com mais pessoas. Mesmo sendo uma criança no ensino médio, ele era considerado por muitos como um prodígio e gênio. Mais tarde, é revelado que Howard Stark, mesmo sendo uma boa pessoa, quando é vítima da fraqueza dos Starks (o álcool), se tornava um alcoólatra desprezível tanto verbalmente quanto abusivo com sua esposa e filho. Foi Howard quem forçou Tony a beber sua primeira bebida alcoólica. Howard tentou ensinar à Tony muitas lições, tais como os custos de fazer a guerra e que ele deve sempre limpar suas próprias mãos.
Quando ele tinha 21 anos, os pais de Tony foram mortos em um acidente de carro e ele herdou os negócios de seu pai, As Indústrias Stark (Stark Industries). Dentro de alguns anos, ele transformou a empresa em um complexo de indústria multi-bilionária cujos contratos chefe eram para armamento avançado e munições para o governo dos EUA. Tony também comprou a empresa que construiu o carro que seus pais estavam dirigindo quando perderam suas vidas e a de falhas corrigidas em projetos de veículos da empresa, incluindo aqueles que envolviam sistemas de "freios".
Durante a guerra do Vietnã, o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida. Ele foi capturado e levado até o líder Wong Chu. Restavam apenas alguns dias de vida para o americano, e Wong Chu o forçou a criar uma poderosa arma.Tony não criou uma arma e sim algo que o mantivesse vivo e permitisse derrotar os captores.', 'Preso com ele estava outro gênio, o professor Ho Yinsen. Stark revelou seu plano ao professor e Yinsen o ajudou.
Quando os homens de Wong Chu se aproximaram, o velho professor pegou uma metralhadora, mas acabou sendo fuzilado, mas garantiu tempo suficiente para que Stark se recuperasse e se acostumasse a usar a armadura criada.
O Homem de Ferro enfrentou os soldados e os derrotou. Sua armadura resistia aos disparos contra ele. Wong Chu tentou fugir e o Homem de Ferro incendiou o galpão de munições fazendo com que a explosão o matasse. Os prisioneiros foram libertados.
Desde então Stark desenvolveu novas versões de sua armadura e adotou as cores vermelho e dourado como as padrões da armadura, com algumas pequenas alterações esporádicas como preto, prateado e, mais recentemente, branco.
No começo de suas atuações, e para que ninguém desconfiasse, Stark espalhou o boato de que o Homem de Ferro era seu guarda-costas. Nas aventuras dos anos 70 e 80, era comum heróis, vilões e coadjuvantes do Universo Marvel se referirem ao Homem de Ferro como "o lacaio de armadura". Apenas seu motorista, Harold "Happy" Hogan, e sua secretária, Virginia "Pepper" Potts, sabiam da identidade secreta de Stark.
Ainda na versão original, Tony Stark colaborava com as forças armadas americanas, desenvolvendo armas e máquinas com o objetivo de usá-las na Guerra Fria. Seus inimigos frequentes eram os comunistas (russos, asiáticos ou latino americanos: pessoas que defendiam o comunismo/socialismo). Enfrentavam o Homem de Ferro rivais tecnológicos como o Dínamo Vermelho (ou Escarlate) e o primeiro Homem de Titânio. Ou espiões especiais como a Viúva Negra e o Espião Mestre.', 96, 94, 78, 100, 56, 90, 98 ),
(1011025, 'Thor', 'Filho de Odin, o deus supremo de Asgard (lar dos deuses nórdicos) e de Jord, a deusa da Terra (também chamada de Midgard ou Gaia), Thor Odinson é o príncipe de um outro mundo existente numa dimensão acima de Midgard, a Terra. Nesse mundo existem outros diversos reinos, como por exemplo, a terra dos gigantes de gelo (Jotunheim e Valhala, o lugar para onde vão os espíritos dos guerreiros que morrem em combate). Trata-se justamente de uma adaptação da mitologia nórdica, traduzida no Universo Marvel como apenas mais uma dimensão paralela.
Os nove mundos de Asgard são ligados pela Ponte do Arco-Íris (Bifrost), que é guardada por Heimdall, o eterno guardião da ponte. Thor possui um irmão adotivo chamado Loki, o traiçoeiro deus das trapaças e mentiras. Devido à sua má índole e à inveja que sente por Thor, por ser este o filho mais querido de Odin, Loki está sempre a tramar a morte do irmão e a posse de Asgard.
Em sua juventude, Thor Odinson tinha comportamento arrogante e impulsivo e, em uma de suas aventuras, cometeu uma grave falta. Perseguindo um pássaro de pedra que causava muita destruição, acabou invadindo o reino dos Gigantes de Gelo e violou o tratado estabelecido por Odin. Para punir o filho e lhe ensinar a virtude que lhe faltava, este disse:
', '"Tu és o filho favorito de Odin! Além de valente e nobre, tua alma é imaculada! Mas ainda assim és incompleto! Não tens humildade! Para consegui-la deverás conhecer a fraqueza… sentir dor! E para isso necessitas deixar o Reino Dourado e despir-te de tua aparência divina! A Terra, lá aprenderás que ninguém pode ser verdadeiramente forte se, em realidade, não for humilde! Por um tempo não mais serás o Deus do Trovão! A tua memória também tirarei! Agora, vai! Uma nova vida te espera!".
Assim nasceu o Doutor Donald Blake, com as memórias de uma vida humana, sem saber quem era na verdade. Sendo um talentoso médico, porém manco de uma perna, Thor foi, pouco a pouco, aprendendo a lição da humildade até que seu destino se cumpriu.
Na primeira aventura de Thor Odinson como Donald Blake publicada pela Marvel, ele avistou uma nave espacial que trazia a bordo os seres conhecidos como Homens de Saturno. Ao fugir deles, entra na caverna e encontra o martelo mágico. Como curiosidade, os fãs observaram que os alienígenas tinham a mesma aparência de personagens de uma história anterior de Jack Kirby, na fase pré-Marvel. A trama tinha a ver com as misteriosas estátuas da Ilha de Páscoa, e os perfis dos alienígenas são bem semelhantes aos das cabeças dos monumentos (moais) erigidos pelos lendários nativos. Ao bater o cajado contra o chão, ele transformou-se no Poderoso Thor e em sua mão estava o fiel martelo mágico Mjolnir, que só podia ser levantado por Thor ou alguém de igual nobreza de alma. Aos poucos, suas memórias retornaram, e quando encontrou Odin toda a verdade lhe foi revelada.
Assim, Midgard (a Terra) ganhou mais um poderoso defensor, pois a compaixão de Thor com os mortais e a ligação mística com sua mãe fez com que ele preferisse, por várias vezes, continuar em Midgard à retornar definitivamente à Asgard, mesmo recebendo punições de Odin (tais como a vez em que foi privado de metade de seus poderes).', 100, 100, 95, 43, 57, 98, 25),
(1009351, 'Hulk', 'Robert Bruce Banner era o filho do Dr. Brian Banner, um cientista atômico, e sua esposa Rebecca. Embora Rebecca amasse profundamente Bruce, que retribuiu o carinho, Brian odiava o filho. Alcoólatra, Brian Banner foi levado por um ciúme insano por Bruce, por ele ser objeto do amor de Rebecca. Além disso, Brian acreditava que seu trabalho com radiação tinha alterado o seu DNA e lhe deu um filho mutante. Ele finalmente assassinou Rebecca e foi colocado em um hospital psiquiátrico. Bruce, um grande e jovem intelectual, foi criado por sua tia, a senhora Drake, e internalizou sua grande dor e raiva sobre os sofrimentos de sua infância. Bruce mais tarde frequentou a faculdade onde conheceu Tony Stark, com quem iniciou uma grande amizade e também uma rivalidade.
Finalmente, como um adulto e um gênio em física nuclear, Bruce passou a trabalhar em um departamento de Defesa dos Estados Unidos, em um centro de pesquisa nuclear na Base do Deserto, no Novo México. Lá ele conhece o General Ross, o oficial da Força Aérea no comando da base, e sua filha Betty. Bruce e Betty Ross se apaixonaram um pelo outro.', 'Bruce desenhou e supervisionou a construção da "Bomba Gama" ou "Bomba-G", uma arma nuclear, possuindo alto rendimento de radiação gama.
Antes de testar a Bomba Gama, Bruce estava em uma reunião com os militares explicando o que poderia ser tirado de proveito da Bomba Gama, destacando que ela poderia iniciar uma era de paz e harmonia. Porém, o general Ross estava ignorando o que Bruce estava dizendo e queria apenas saber se bomba teria serventia como arma. Enquanto questionava-o, Tony Stark chegou e garantiu que o invento de Bruce estava perfeito, porém que não tinha a potência para ser uma arma. Ross e os outros militares presentes se enfureceram e questionaram Bruce acerca disso. Bruce disse que o seu objetivo não é usar a radiação gama para destruir, mas sim usá-la para curar doenças. Tony caçoou do que Bruce disse, e isso fez os dois iniciarem uma discussão. Mais tarde, em um quarto de um hotel onde Tony está hospedado, ele pediu a Bruce permissão para fazer melhorias na Bomba Gama, o que Bruce não quis. Após terem discutido, Bruce deixa o quarto e Tony, sem Bruce saber, faz algumas alterações na Bomba Gama, que a fariam atingir o potencial para ser uma arma.', 100, 80, 100, 0, 35, 79, 25),
(1009189, 'Viuva Negra', 'Existem vários relatos do início da vida de Romanoff. Um relato diz que o Partido Nazista colocou fogo no edifício onde Natasha vivia em Stalingrad (Volgogrado atualmente) e sua mãe a atirou pela janela para um soldado russo antes de morrer no fogo. O nome do soldado era Ivan Petrovitch e ele cuidou de Natasha por toda a sua vida, permanecendo ao seu lado como seu pai adotivo. e a apresentou para o Tentáculo em Madripoor. Lá ela viria a se tornar a Mestre Assassina, até que o Capitão América, Logan e Ivan a salvaram. Enquanto Natasha crescia e amadurecia, ela provou ser uma incrível atleta e estudiosa, além de ganhar distinção na URSS como bailarina.
Outro relato a estabelece como tendo sido criada desde sua infância pelo Programa Operação Viúva Negra da União Soviética, em vez de apenas por Ivan Petrovitch.', 'Petrovitch a levou para o Departamento X, junto com outras 28 jovens órfãs, onde foram treinadas em combate e espionagem na instalação secreta "Sala Vermelha". Lá ela foi bio-tecnologicamente e psico-tecnologicamente melhorada; o que proveria uma justificativa para seu tempo de vida excepcionalmente longo e sua juventude. Ela nunca foi realmente treinada em balé no Teatro Bolshoi, tendo em vez disso memórias artificiais. Durante seu treinamento, Romanova foi contatada pela Encantor, a qual a manipulou apenas por diversão, sugerindo que Romanova poderia ser livre, mas no final Encantor acabou impedindo que ela escapasse. No entanto, os esforços de Romanova para fugir atraíram a atenção dos organizadores do programa, os quais caso contrário a teriam "descartado".
Independente de qualquer relato está correto que, ela eventualmente se casou com Alexi Shostakov, um piloto de teste Soviético.', 90, 100, 83, 97, 99, 90, 25),
(1009187, 'Pantera Negra', 'O Pantera Negra é o título cerimonial atribuído ao chefe da Tribo Pantera da avançada nação africana de Wakanda. Além de governar o país, ele também é chefe de suas várias tribos (coletivamente conhecido como Wakandas). O uniforme do Pantera é um símbolo oficial (chefe de estado) e é usado mesmo durante missões diplomáticas. O Pantera é um título hereditário, mas ainda é preciso ganhar um desafio.
No passado distante, um enorme meteorito maciço composto de vibranium - elemento que absorve o som, entre outras propriedades especiais - caiu em Wakanda e foi desenterrado a uma geração anterior a dos eventos do presente. Temendo que os estrangeiros explorassem Wakanda por este valioso recurso, o governante, rei T`Chaka, como seu pai e outros panteras antes dele, escondeu seu país do mundo exterior. A primeira esposa de T`Chaka, N`Yami, morreu no parto. Logo em seguida, T`Chaka se casou com Ramonda, que criou T`Challa amorosamente e o preparou como uma criança para herdar o manto da Pantera Negra e ser levado ao trono.', 'No entanto, seu irmão adotivo Hunter o desprezava por considerá-lo responsável pela morte de sua mãe, enquanto seu meio-irmão Jakarra tinha um forte ressentimento por desejar o trono. T`Challa compartilhava um sincero afeto apenas com a meia-irmã Shuri. Algum tempo depois, quando o príncipe tinha apenas oito anos, Ramonda, visitando sua terra natal, a África do Sul, foi sequestrada por Anton Pretoriuse e não retornou, fazendo a família pensar que ela os tinha abandonado. Assim, T`Chaka criou os filhos sozinho. T`Chaka é assassinado pelo aventureiro Ulysses Klaw em uma tentativa de explorar o monte de vibranium. Com seu povo ainda em perigo, o jovem T`Challa usou a arma de som de Klaw, em Klaw e seus homens, quebrando a mão direita de Klaw e forçando-o a fugir.', 97, 100, 96, 98, 99, 94, 85),
(1001003, 'Homem Aranha', 'Miles Morales apareceu pela primeira vez em Ultimate Comics: Fallout # 4, que foi publicado em agosto de 2011, no qual ele frustra um assassinato por Kangaroo, pouco tempo depois da morte de Peter Parker. Ele usa um traje do Homem-Aranha parecido com o de Parker, mas considera mudar quando os espectadores dizem que ele é de "mau gosto".
O arco da história de abertura de Ultimate Comics: Spider-Man, que estreou em setembro de 2011, é definido antes do Ultimate Fallout # 4, e estabelece o caráter de Miles Morales, um aluno de segundo grau que vive com sua mãe Rio Morales, uma enfermeira, e seu pai, Jefferson Davis , e detalha como ele recebeu suas habilidades sobre-humanas. Depois Oscorp cientista Dr. Conrad Markus um usa o sangue de Parker para recriar a fórmula que criou o Homem-Aranha, o Prowler (Aaron Davis rouba a fórmula, e no processo, uma das aranhas criadas por Markus rasteja na mochila do Prowler. Dias depois, o sobrinho do Prowler, Miles Morales, é picado pela aranha durante uma visita ao apartamento de Aaron.', 'Morales desenvolve habilidades sobre-humanas semelhantes às de Peter Parker, mas não diz a seus pais, devido à desconfiança de seus super-heróis, confiando apenas em seu melhor amigo, Ganke Lee.
Miles, que só quer uma vida normal, está infeliz em ter essas habilidades e, inicialmente, ficou nauseado com a ideia de arriscar sua vida para se envolver em super-heróicos, uma reação que Bendis escreveu para contrastar Miles com Parker. No entanto, depois de testemunhar a morte do Homem-Aranha nas mãos do Duende Verde, Miles, culpado, percebe que poderia ter ajudado. Depois de Ganke sugerir que ele assuma o manto do Homem-Aranha, e descobre por Gwen Stacy o por que Parker fez o que ele fez, Miles se inspira a tentar sua sorte em brigas criminosas fantasiadas. Durante sua primeira investida em super-heróis fantasiados, ele é confrontado não apenas por aqueles que acham que seu uso do traje do Homem-Aranha é de mau gosto, mas também por Mulher-Aranha, um membro da equipe sobre-humana do governo, os Ultimates, sobre o uso da identidade do Homem-Aranha.' , 98, 86, 90, 96, 99, 87, 90);

INSERT INTO usuario values
(null, 'zzz.mike', 'Michael Henrique', 'michaelhenrique0022@gmail.com', 'stelaegaby2', 1009187),
(null, 'zuluzao', 'Marcos Trajano', 'marcos.trajano@sptech.school', 'marcostrajano', 1009368),
(null, 'sorriso', 'Matheus Trindade', 'matheus.trindade@sptech.school', 'sorrisoronaldo', 1001003),
(null, 'vinimalvadeza', 'Vinicius Inacio', 'vinicius.inacio@sptech.school', 'viniznho', 1009189),
(null, 'yuriOlivs', 'Yuri Oliveira', 'yuri.oliveira@sptech.school', 'yuriyuri', 1009351),
(null, 'lira', 'Victor Lira', 'victor.lira@sptech.school', 'liralira', 1011025),
(null, 'kevin', 'Kevin Rodrigues', 'kevin.rodrigues@sptech.school', 'kevin123', 1009220),
(null, 'tiAlves', 'Tiago Alves', 'tiago.alves@sptech.school', 'alves123', 1009220);

INSERT INTO respostas values
(null, 1009187, 1, 2, '2023-06-13 16:19:35'),
(null, 1009187, 1, 5, '2023-06-12 16:19:35'),
(null, 1009187, 1, 6, '2023-06-11 16:19:35'),
(null, 1009187, 1, 2, '2023-06-10 16:19:35'),
(null, 1009187, 1, 1, '2023-06-09 16:19:35'),
(null, 1009187, 1, 3, '2023-06-08 16:19:35'),
(null, 1009187, 1, 8, '2023-06-07 16:19:35'),
(null, 1009187, 1, 7, '2023-06-06 16:19:35'),
(null, 1009187, 1, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1009368, 2, 2, '2023-06-13 16:19:35'),
(null, 1009368, 2, 5, '2023-06-12 16:19:35'),
(null, 1009368, 2, 6, '2023-06-11 16:19:35'),
(null, 1009368, 2, 2, '2023-06-10 16:19:35'),
(null, 1009368, 2, 1, '2023-06-09 16:19:35'),
(null, 1009368, 2, 3, '2023-06-08 16:19:35'),
(null, 1009368, 2, 8, '2023-06-07 16:19:35'),
(null, 1009368, 2, 7, '2023-06-06 16:19:35'),
(null, 1009368, 2, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1001003, 3, 2, '2023-06-13 16:19:35'),
(null, 1001003, 3, 5, '2023-06-12 16:19:35'),
(null, 1001003, 3, 6, '2023-06-11 16:19:35'),
(null, 1001003, 3, 2, '2023-06-10 16:19:35'),
(null, 1001003, 3, 1, '2023-06-09 16:19:35'),
(null, 1001003, 3, 3, '2023-06-08 16:19:35'),
(null, 1001003, 3, 8, '2023-06-07 16:19:35'),
(null, 1001003, 3, 7, '2023-06-06 16:19:35'),
(null, 1001003, 3, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1009189, 4, 2, '2023-06-13 16:19:35'),
(null, 1009189, 4, 5, '2023-06-12 16:19:35'),
(null, 1009189, 4, 6, '2023-06-11 16:19:35'),
(null, 1009189, 4, 2, '2023-06-10 16:19:35'),
(null, 1009189, 4, 1, '2023-06-09 16:19:35'),
(null, 1009189, 4, 3, '2023-06-08 16:19:35'),
(null, 1009189, 4, 8, '2023-06-07 16:19:35'),
(null, 1009189, 4, 7, '2023-06-06 16:19:35'),
(null, 1009189, 4, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1009351, 5, 2, '2023-06-13 16:19:35'),
(null, 1009351, 5, 5, '2023-06-12 16:19:35'),
(null, 1009351, 5, 6, '2023-06-11 16:19:35'),
(null, 1009351, 5, 2, '2023-06-10 16:19:35'),
(null, 1009351, 5, 1, '2023-06-09 16:19:35'),
(null, 1009351, 5, 3, '2023-06-08 16:19:35'),
(null, 1009351, 5, 8, '2023-06-07 16:19:35'),
(null, 1009351, 5, 7, '2023-06-06 16:19:35'),
(null, 1009351, 5, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1011025, 6, 2, '2023-06-13 16:19:35'),
(null, 1011025, 6, 5, '2023-06-12 16:19:35'),
(null, 1011025, 6, 6, '2023-06-11 16:19:35'),
(null, 1011025, 6, 2, '2023-06-10 16:19:35'),
(null, 1011025, 6, 1, '2023-06-09 16:19:35'),
(null, 1011025, 6, 3, '2023-06-08 16:19:35'),
(null, 1011025, 6, 8, '2023-06-07 16:19:35'),
(null, 1011025, 6, 7, '2023-06-06 16:19:35'),
(null, 1011025, 6, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1009220, 7, 2, '2023-06-13 16:19:35'),
(null, 1009220, 7, 5, '2023-06-12 16:19:35'),
(null, 1009220, 7, 6, '2023-06-11 16:19:35'),
(null, 1009220, 7, 2, '2023-06-10 16:19:35'),
(null, 1009220, 7, 1, '2023-06-09 16:19:35'),
(null, 1009220, 7, 3, '2023-06-08 16:19:35'),
(null, 1009220, 7, 8, '2023-06-07 16:19:35'),
(null, 1009220, 7, 7, '2023-06-06 16:19:35'),
(null, 1009220, 7, 10, '2023-06-05 16:19:35');

INSERT INTO respostas VALUES
(null, 1009220, 8, 2, '2023-06-13 16:19:35'),
(null, 1009220, 8, 5, '2023-06-12 16:19:35'),
(null, 1009220, 8, 6, '2023-06-11 16:19:35'),
(null, 1009220, 8, 2, '2023-06-10 16:19:35'),
(null, 1009220, 8, 1, '2023-06-09 16:19:35'),
(null, 1009220, 8, 3, '2023-06-08 16:19:35'),
(null, 1009220, 8, 8, '2023-06-07 16:19:35'),
(null, 1009220, 8, 7, '2023-06-06 16:19:35'),
(null, 1009220, 8, 10, '2023-06-05 16:19:35');

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