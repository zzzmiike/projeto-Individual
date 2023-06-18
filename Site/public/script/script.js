var selecao = "";
var idPersonagem = 0;
var personagem = ""
var fkPersonagem
var idUsuario

function createHash(timestamp) {
    const stringToHash = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();
    return hash;
}

function alterar() {
    selecao = document.getElementById('selectPersonagem');
    var nome = selecao.value;
    console.log(nome);
    if (nome == "SelecioneUmPersonagem") {
        idPersonagem = 0;
        mesagemCadastro.innerHTML = `Selecione um Personagem!!`
        selectPersonagem.style.borderColor = "#F78F3F";
    } else if (nome == "capitain-america") {
        idPersonagem = 1009220
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "iron-man") {
        idPersonagem = 1009368
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "thor") {
        idPersonagem = 1011025
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "hulk") {
        idPersonagem = 1009351
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "black-widow") {
        idPersonagem = 1009189
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "black-panther") {
        idPersonagem = 1009187
        mesagemCadastro.innerHTML = ``
        selectPersonagem.style.borderColor = "#b03838";
    } else if (nome == "spider") {
        idPersonagem = 1001003
    }

    console.log(idPersonagem);

}

function cadastrar() {
    var emailVar = inp_email.value;
    var nomeVar = inp_nome.value;
    var userVar = inp_user.value;
    var senhaVar = inp_senha.value;
    var confiSenhaVar = inp_confiSenha.value;

    if (emailVar == "" && nomeVar == "" && userVar == "" && senhaVar == "" && confiSenhaVar == "" && idPersonagem == "") {
        mensagem_erro.innerHTML = "Preencha todos os Campos";
        inp_email.style.borderColor = "#b03838";
        inp_nome.style.borderColor = "#b03838";
        inp_user.style.borderColor = "#b03838";
        inp_senha.style.borderColor = "#b03838";
        inp_confiSenha.style.borderColor = "#b03838";
        inp_email.classList.add("treme");
        inp_nome.classList.add("treme");
        inp_user.classList.add("treme");
        inp_senha.classList.add("treme");
        inp_confiSenha.classList.add("treme");

        setTimeout(() => {
            inp_email.classList.remove("treme");
            inp_nome.classList.remove("treme");
            inp_user.classList.remove("treme");
            inp_senha.classList.remove("treme");
            inp_confiSenha.classList.remove("treme");
            mensagem_erro.innerHTML = "";
        }, 5000);
        return false;
    } else if (emailVar == "") {
        mensagem_erro.innerHTML = "Insira um email válido";
        //var input_email = document.getElementById("inp_email");
        inp_email.classList.add("treme");
        inp_email.style.borderColor = "#b03838";
        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_email.classList.remove("treme");

        }, 5000);
    } else if (nomeVar == "") {
        mensagem_erro.innerHTML = "Insira um nome válido";
        inp_nome.style.borderColor = "#b03838";
        inp_nome.classList.add("treme");

        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_nome.classList.remove("treme");

        }, 5000);
    } else if (userVar == "") {
        mensagem_erro.innerHTML = "Insira um user válido";
        inp_user.style.borderColor = "#b03838";
        inp_user.classList.add("treme");

        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_user.classList.remove("treme");
        }, 5000);

    }
    if (senhaVar == "") {
        mensagem_erro.innerHTML = "Insira uma senha válida";
        inp_senha.style.borderColor = "#b03838";
        inp_senha.classList.add("treme")

        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_senha.classList.remove("treme");

        }, 5000);
    } else if (confiSenhaVar == "") {
        mensagem_erro.innerHTML += "O campo de Confimar senha ão pode ficar vazio";
        inp_confiSenha.style.borderColor = "#b03838";
        inp_confiSenha.classList.add("treme")

        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_confiSenha.classList.remove("treme");

        }, 5000);
    }
    if (senhaVar == confiSenhaVar) {
        if (senhaVar.length >= 8) {
            fetch("/usuario/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: nomeVar,
                    userServer: userVar,
                    emailServer: emailVar,
                    senhaServer: senhaVar,
                    idPersoServer: idPersonagem
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "1500")

                    limparFormulario();
                    finalizarAguardar();
                } else {
                    mensagem_erro.innerHTML = "";
                    throw ("Nome de usuario ja está sendo utilizado");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            return false;
        } else {
            mensagem_erro.innerHTML = "A Senha precisa conter 8 ou mais caracteres";
            inp_senha.classList.add("treme")
            inp_confiSenha.classList.add("treme")

            setTimeout(() => {
                mensagem_erro.innerHTML = ""
                inp_confiSenha.classList.remove("treme")
                inp_senha.classList.remove("treme");
            }, 5000);

        }
    } else {
        mensagem_erro.innerHTML = "A Senhas não correspondem";
        inp_senha.classList.add("treme")
        inp_confiSenha.classList.add("treme")
        setTimeout(() => {
            mensagem_erro.innerHTML = ""
            inp_confiSenha.classList.remove("treme")
            inp_senha.classList.remove("treme");
        }, 5000);
    }

}

function entrar() {

    var userVar = inp_user.value;
    var senhaVar = inp_senha.value;

    if (userVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", userVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: userVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.USERNAME_USUARIO = json.username;
                sessionStorage.FK_USUARIO = json.fkPersonagem;
                sessionStorage.PERSONAGEM_PERSONAGEM = json.personagem;
                sessionStorage.DESCRICAO_PESONAGEM = json.descricao;
                sessionStorage.DESCRICAO1_PESONAGEM = json.descricao1;
                sessionStorage.HP_PERSONAGEM = json.hp;
                sessionStorage.RESISTENCIA_PERSONAGEM = json.resistencia;
                sessionStorage.FORCA_PERSONAGEM = json.forca;
                sessionStorage.INTELIGENCIA_PERSONAGEM = json.inteligencia;
                sessionStorage.AGILIDADE_PERSONAGEM = json.agilidade;
                sessionStorage.DEFESA_PERSONAGEM = json.defesa;
                sessionStorage.ARMADURA_PERSONAGEM = json.armadura;
                setTimeout(function () {

                    window.location = "./afterlogin/personagem.html";
                }, 2500); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}

function validarSessao1() {
    // aguardar();
    var user = sessionStorage.USERNAME_USUARIO;
    idUsuario = sessionStorage.ID_USUARIO;
    fkPersonagem = sessionStorage.FK_USUARIO;
    personagem = sessionStorage.PERSONAGEM_PERSONAGEM;
    var desc = sessionStorage.DESCRICAO_PESONAGEM;
    var desc1 = sessionStorage.DESCRICAO1_PESONAGEM;
    var hp = sessionStorage.HP_PERSONAGEM;
    var resis = sessionStorage.RESISTENCIA_PERSONAGEM;
    var forca = sessionStorage.FORCA_PERSONAGEM;
    var inte = sessionStorage.INTELIGENCIA_PERSONAGEM;
    var agil = sessionStorage.AGILIDADE_PERSONAGEM;
    var defe = sessionStorage.DEFESA_PERSONAGEM;
    var arma = sessionStorage.ARMADURA_PERSONAGEM;

    var b_usuario = document.getElementById("b_usuario");

    if (fkPersonagem == "1009220" && user != null) { // Capitão América
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/capitain-america.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/capitao.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `

    } else if (fkPersonagem == "1009368" && user != null) { // Homem de Ferro
        liperson.innerHTML = `
        <img id="iconeperso" style="background-color:white; border-radius:50%;" src="../assets/img/icons/iron-man.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/iron.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    } else if (fkPersonagem == "1009187" && user != null) { // Pantera Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-panther.svg">
        `


        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/black-panter cópia.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    } else if (fkPersonagem == "1009189" && user != null) { // Viúva Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-widow.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/viuva.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    } else if (fkPersonagem == "1011025" && user != null) { // Thor
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/thorr.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/thor.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    } else if (fkPersonagem == "1001003" && user != null) { // Homem Aranha
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/spiderman.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/black-spiderman.svg" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    } else if (fkPersonagem == "1009351" && user != null) { // Hulk
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/hulk.svg">
        `

        tituloPersonagem.innerHTML += `
        <span class="titulo-personagem">${personagem}</span><br>
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="textPersonagem">
            ${desc}
        </span>
        </div>
        <div id="imgPerso">
        <img src="../assets/img/persons/hulk.png" class="imagens">
        </div>
        `

        graphText.innerHTML += `
        <div class="textsPerso1">
        <canvas id="radar_chart">
        </canvas>
        </div>
        <span class="textPersonagem">
            ${desc1}
        </span>
        
        `
    }

    const radar = document.getElementById('radar_chart')

    new Chart(radar, {
        type: 'radar',
        data: {
            labels: [
                'HP',
                'Resistência',
                'Força',
                'Inteligencia',
                'Agilidade',
                'Defesa',
                'Armadura'
            ],
            datasets: [{
                label: `${sessionStorage.PERSONAGEM_PERSONAGEM}`,
                data: [hp, resis, forca, inte, agil, defe, arma],
                fill: true,
                backgroundColor: 'rgba(226, 54, 54, 0.5)',
                borderColor: 'rgb(247, 143, 63)',
                borderWidth: 4,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderColor: '#fff',

            }]
        },
        options: {
            scales: {
                r: {
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 1)',
                    },
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                },
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    if (user != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = user;


        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function validarSessao() {
    var user = sessionStorage.USERNAME_USUARIO;
    fkPersonagem = sessionStorage.FK_USUARIO;
    personagem = sessionStorage.PERSONAGEM_PERSONAGEM;
    idUsuario = sessionStorage.ID_USUARIO;
    var b_usuario = document.getElementById("b_usuario");
    var nomePersonagem = document.getElementById("nome_perso");

    if (fkPersonagem == "1009220" && user != null) { // Capitão America
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/capitain-america.svg">
        `;
        nomePersonagem.innerHTML = personagem;
    } else if (fkPersonagem == "1009368" && user != null) { // Homem de Ferro
        liperson.innerHTML = `
        <img id="iconeperso" style="background-color:white; border-radius:50%;" src="../assets/img/icons/iron-man.svg">
        `;
        nomePersonagem.innerHTML = personagem;
    } else if (fkPersonagem == "1009187" && user != null) { // Pantera Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-panther.svg">
        `
        nomePersonagem.innerHTML = personagem;
    } else if (fkPersonagem == "1009189" && user != null) { // Viúva Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-widow.svg">
        `;
        nomePersonagem.innerHTML = `a ${personagem}`;
    } else if (fkPersonagem == "1011025" && user != null) { // Thor
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/thorr.svg">
        `;
        nomePersonagem.innerHTML = personagem;
    } else if (fkPersonagem == "1001003" && user != null) { // Homem Aranha
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/spiderman.svg">
        `;
        nomePersonagem.innerHTML = personagem;
    } else if (fkPersonagem == "1009351" && user != null) { // Hulk
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/hulk.svg">
        `;
        nomePersonagem.innerHTML = personagem;
    }

    if (user != null) {
        b_usuario.innerHTML = user;
    } else {
        window.location = "../login.html";
    }
}

function dashboard() {
    var user = sessionStorage.USERNAME_USUARIO;
    fkPersonagem = sessionStorage.FK_USUARIO;
    personagem = sessionStorage.PERSONAGEM_PERSONAGEM;
    idUsuario = sessionStorage.ID_USUARIO;
    var b_usuario = document.getElementById("b_usuario");
    var nomePersonagem = document.getElementById("nome_perso");

    if (fkPersonagem == "1009220" && user != null) { // Capitão America
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/capitain-america.svg">
        `;
    } else if (fkPersonagem == "1009368" && user != null) { // Homem de Ferro
        liperson.innerHTML = `
        <img id="iconeperso" style="background-color:white; border-radius:50%;" src="../assets/img/icons/iron-man.svg">
        `;
    } else if (fkPersonagem == "1009187" && user != null) { // Pantera Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-panther.svg">
        `
    } else if (fkPersonagem == "1009189" && user != null) { // Viúva Negra
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-widow.svg">
        `;
        nomePersonagem.innerHTML = `a ${personagem}`;
    } else if (fkPersonagem == "1011025" && user != null) { // Thor
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/thorr.svg">
        `;
    } else if (fkPersonagem == "1001003" && user != null) { // Homem Aranha
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/spiderman.svg">
        `;
    } else if (fkPersonagem == "1009351" && user != null) { // Hulk
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/hulk.svg">
        `;
    }

    if (user != null) {
        b_usuario.innerHTML = user;
    } else {
        window.location = "../login.html";
    }
}

var questao = 0
var respostaEscolhida = "";

var capitao = [
    {
        pergunta: 'Qual é o nome verdadeiro do Capitão América?',
        opcoes: ['Tony Stark', 'Bruce Banner', 'Steve Rogers'],
        resposta: 2
    },
    {
        pergunta: 'Qual foi o experimento que transformou Steve Rogers no Capitão América?',
        opcoes: ['Radiação Gama', 'Bomba de Raios Stark', 'Soro do Super Soldado'],
        resposta: 2
    },
    {
        pergunta: 'Quem é o melhor amigo de Steve Rogers?',
        opcoes: ['Sam Wilson', 'Bucky Barnes', 'Tony Stark'],
        resposta: 1
    },
    {
        pergunta: 'Qual é o nome do escudo usado pelo Capitão América?',
        opcoes: ['Escudo do Vibranium', 'Escudo do Adamantium', 'Escudo do Aço'],
        resposta: 0
    },
    {
        pergunta: 'Qual é o lema do Capitão América?',
        opcoes: ['Herói da América', 'Verdade, Justiça e Liberdade', 'Avante, Vingadores'],
        resposta: 1
    }
];

var ferro = [
    {
        pergunta: 'Qual o nome do super-herói conhecido como "Homem de Ferro"?',
        opcoes: ['Steve Rogers', 'Tony Stark', 'Bruce Banner'],
        resposta: 1
    },
    {
        pergunta: 'Qual o nome do ator que interpreta o Homem de Ferro nos filmes da Marvel?',
        opcoes: ['Chris Hemsworth', 'Mark Ruffalo', 'Robert Downey Jr.'],
        resposta: 2
    },
    {
        pergunta: 'Qual é o nome da empresa de tecnologia fundada por Tony Stark?',
        opcoes: ['Stark Industries', 'Oscorp', 'Wayne Enterprises'],
        resposta: 0
    },
    {
        pergunta: 'Qual é a cor predominante na armadura do Homem de Ferro?',
        opcoes: ['Verde', 'Vermelho e Dourado', 'Azul e Vermelho'],
        resposta: 1
    },
    {
        pergunta: 'Qual é o nome da assistente virtual desenvolvida por Tony Stark?',
        opcoes: ['FRIDAY', 'EDITH', 'JARVIS'],
        resposta: 2
    }
];

var thor = [{
    pergunta: 'Qual é o nome completo do Thor?',
    opcoes: ['Thor Odinson', 'Thor Thunder', 'Thor Asgard'],
    resposta: 0
}, {
    pergunta: 'Qual objeto o Thor utiliza como arma no filme Avengers: Endgame?',
    opcoes: ['Mjolnir', 'Stormbreaker', 'Gungnir'],
    resposta: 1
}, {
    pergunta: 'Quem é o pai de Thor?',
    opcoes: ['Loki', 'Hela', 'Odin'],
    resposta: 2
}, {
    pergunta: 'Qual é a cidade de origem do Thor?',
    opcoes: ['Asgard', 'Midgard', 'Jotunheim'],
    resposta: 0
}, {
    pergunta: 'Quem interpreta o Thor nos filmes do Universo Cinematográfico da Marvel?',
    opcoes: ['Chris Hemsworth', 'Tom Hiddleston', 'Mark Ruffalo'],
    resposta: 0
}];

var hulk = [{
    pergunta: 'Qual é o nome verdadeiro do Hulk?',
    opcoes: ['Bruce Wayne', 'Bruce Banner', 'Peter Parker'],
    resposta: 1
}, {
    pergunta: 'O que faz Bruce Banner se transformar no Hulk?',
    opcoes: ['Raiva', 'Medo', 'Tristeza'],
    resposta: 0
}, {
    pergunta: 'Quem é o principal inimigo do Hulk?',
    opcoes: ['Thanos', 'Abomination', 'Loki'],
    resposta: 1
}, {
    pergunta: 'Quem interpreta o Hulk nos filmes do Universo Cinematográfico da Marvel?',
    opcoes: ['Edward Norton', 'Eric Bana', 'Mark Ruffalo'],
    resposta: 2
}, {
    pergunta: 'Qual é a cor do Hulk?',
    opcoes: ['Verde', 'Vermelho', 'Azul'],
    resposta: 0
}];

var viuva = [{
    pergunta: 'Qual é o nome verdadeiro da Viúva Negra?',
    opcoes: ['Wanda Maximoff', 'Natasha Romanoff', 'Carol Danvers'],
    resposta: 1
}, {
    pergunta: 'Qual organização recrutou a Viúva Negra e a transformou em uma espiã?',
    opcoes: ['S.H.I.E.L.D.', 'HYDRA', 'A.I.M.'],
    resposta: 0
}, {
    pergunta: 'Qual é a cor predominante no traje da Viúva Negra?',
    opcoes: ['Vermelho', 'Branco', 'Preto'],
    resposta: 2
}, {
    pergunta: 'Quem interpreta a Viúva Negra nos filmes do Universo Cinematográfico da Marvel?',
    opcoes: ['Scarlett Johansson', 'Emily Blunt', 'Jennifer Lawrence'],
    resposta: 0
}, {
    pergunta: 'Qual é a especialidade da Viúva Negra?',
    opcoes: ['Habilidades de hacker', 'Poderes telepáticos', 'Artes marciais'],
    resposta: 2
}];

var pantera = [{
    pergunta: 'Qual é o nome verdadeiro do Pantera Negra?',
    opcoes: [`T'Challa`, 'Erik Killmonger', 'NJadaka'],
    resposta: 0
}, {
    pergunta: 'Qual é o nome da nação governada pelo Pantera Negra?',
    opcoes: ['Zamunda', 'Genosha', 'Wakanda'],
    resposta: 2
}, {
    pergunta: 'Qual é o metal especial encontrado em Wakanda e usado para criar o traje do Pantera Negra?',
    opcoes: ['Vibranium', 'Adamantium', 'Promethium'],
    resposta: 0
}, {
    pergunta: 'Quem interpreta o Pantera Negra nos filmes do Universo Cinematográfico da Marvel?',
    opcoes: ['Michael B. Jordan', 'Chadwick Boseman', 'Daniel Kaluuya'],
    resposta: 1
}, {
    pergunta: 'Qual é a posição do Pantera Negra dentro da sociedade de Wakanda?',
    opcoes: ['General', 'Rei', 'Xamã'],
    resposta: 1
}, {
    pergunta: 'Quem é o principal inimigo do Pantera Negra?',
    opcoes: [`Ulysses Klaue`, `M'Baku`, `Erik Killmonger`],
    resposta: 2
}, {
    pergunta: `Qual é o nome da irmã de T'Challa?`,
    opcoes: [`Nakia`, `Shuri`, `Okoye`],
    resposta: 1
}, {
    pergunta: 'Qual é o nome do grupo de guerreiras de elite de Wakanda?',
    opcoes: ['Dora Milaje', 'Wakabi', 'Zuri'],
    resposta: 0
}, {
    pergunta: 'Qual é o nome do reino espiritual de Wakanda?',
    opcoes: ['Valhalla', 'Asgard', 'Bast'],
    resposta: 2
}, {
    pergunta: 'Quem é o líder das Tribos de Montanha de Wakanda?',
    opcoes: ['Shuri', 'M\'Baku', 'Nakia'],
    resposta: 1
}
];

var aranha = [{
    pergunta: 'Qual é o nome verdadeiro do Homem-Aranha?',
    opcoes: ['Peter Parker', 'Miles Morales', 'Harry Osborn'],
    resposta: 0
}, {
    pergunta: 'Quem foi o criador do Homem-Aranha?',
    opcoes: ['Steve Ditko', 'Stan Lee', 'Bob Kane'],
    resposta: 1
}, {
    pergunta: 'Qual é o nome da primeira namorada do Homem-Aranha?',
    opcoes: ['Mary Jane Watson', 'Gwen Stacy', 'Felicia Hardy'],
    resposta: 0
}, {
    pergunta: 'Qual é o superpoder principal do Homem-Aranha?',
    opcoes: ['Superforça', 'Invisibilidade', 'Sentido-Aranha'],
    resposta: 2
}, {
    pergunta: 'Qual é o nome do tio de Peter Parker que foi morto e inspirou seu senso de responsabilidade?',
    opcoes: ['Tony Stark', 'Harry Osborn', 'Ben Parker'],
    resposta: 2
}];

var corretas = 0;
var questaoAtual = 0;
var errado = 0;

function iniciar() {
    if (fkPersonagem == "1009368") {
        pergunta = ferro[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1009220") {
        pergunta = capitao[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1009187") {
        pergunta = pantera[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1011025") {
        pergunta = thor[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1009189") {
        pergunta = viuva[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1001003") {
        pergunta = aranha[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1009351") {
        pergunta = hulk[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;
        quiz.innerHTML += `<div id="inputs_quiz">`

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            inputs_quiz.innerHTML += `
            <span class="inputQuiz">
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}</input><br>
            </span>`;
        }
        quiz.innerHTML += `</div>`
    }
}

function verificarRespostas() {
    var opcoes = document.getElementsByName('resposta');
    var respostaSelecionada = -1;
    var person = fkPersonagem;

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostaSelecionada = parseInt(opcoes[i].value);
            break;
        }
    }
    if (fkPersonagem == "1009220") { // Capitão América
        if (respostaSelecionada === capitao[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < capitao.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    } else if (fkPersonagem == "1009368") { // Homem de Ferro
        if (respostaSelecionada === ferro[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < ferro.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    } else if (fkPersonagem == "1009187") { // Pantera Negra
        if (respostaSelecionada === pantera[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < pantera.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "9000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `
            Em Mémoria de Chadwick Boseman<br><br>
            o Quiz foi concluído com sucesso
            `
            return false;
        }
    } else if (fkPersonagem == "1009189") { // Viúva Negra
        if (respostaSelecionada === viuva[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < viuva.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    } else if (fkPersonagem == "1011025") { // Thor
        if (respostaSelecionada === thor[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < thor.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    } else if (fkPersonagem == "1001003") { // Homem-Aranha
        if (respostaSelecionada === aranha[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < aranha.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    } else if (fkPersonagem == "1009351") { // Hulk
        if (respostaSelecionada === hulk[questaoAtual].resposta) {
            quiz.innerHTML = `
            <h4>Resposta Correta</h4>
            `
            quiz.style.borderColor = "#008000";


            corretas++
            console.log(corretas)
        } else {
            quiz.innerHTML = `<h4>Resposta incorreta!</h4>`
            quiz.style.borderColor = "#ff0000";

        }

        questaoAtual++;

        if (questaoAtual < hulk.length) {
            setTimeout(() => {

                iniciar();
            }, "2000")
        } else {
            fetch("/dashboard/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    acertosServer: corretas,
                    idUsuarioServer: idUsuario,
                    idPersonagemServer: person
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(() => {
                        window.location = "./dashboard.html";
                    }, "4000")

                    limparFormulario();
                } else {
                    throw ("Houve um erro ao tentar guardar as respostas!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            quiz.innerHTML = `Quiz concluído!`
            return false;
        }
    }
}

function dadosDash() {
    var fkPersonagem = sessionStorage.FK_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/dashboard/listar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkPersonagemServer: fkPersonagem,
            idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                const labels = [];
                const data = [];

                json.forEach(element => {
                    labels.push(element.dtHora);
                    data.push(element.acertos);
                });

                const bar = document.getElementById('line_chart');
                new Chart(bar, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: sessionStorage.PERSONAGEM_PERSONAGEM,
                            data: data,
                            fill: true,
                            backgroundColor: 'rgba(226, 54, 54, 0.5)',
                            borderColor: 'rgb(247, 143, 63)',
                            borderWidth: 4,
                            pointBackgroundColor: 'rgb(255, 255, 255)',
                            pointBorderColor: '#fff',
                            tension: 0.5
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                suggestedMin: 0,
                                suggestedMax: 10,
                                grid: {
                                    display: true,
                                    color: 'rgba(255, 255, 255, 1)',
                                },
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            });
        } else {
            console.log("Houve um erro ao tentar puxar os acertos do banco!");
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
    return false;
}

function redirect() {
    var botoes = document.getElementsByClassName('bottao');

    // Iterar sobre todos os elementos com a classe 'bottao'
    for (var i = 0; i < botoes.length; i++) {
        var botao = botoes[i];

        // Adicionar o evento de clique a cada elemento
        botao.addEventListener('click', function () {
            var idDoBotao = this.id;

            if (idDoBotao == "portifolio") {
                window.location.href = 'https://github.com/zzzmiike';
            } else if (idDoBotao == "noticiasSaiba") {
                window.location.href = '../index.html#noticias';
            } else if (idDoBotao == "sobremim") {
                window.location.href = '../index.html#main-sobre';
            }
        });
    }
}