const privateKey = "4a11e7353de06c247a0b1fc44057121851474704";
const publicKey = "eaf3fa204749e1b8d92f1585d6b58007";
var selecao = "";
var idPersonagem = 0;
var personagem = ""


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
        idPersonagem = 0
    }

    console.log(idPersonagem);

}

/*function acharPersonagem() {
    idPersonagem = 0;
    const timeStamp = new Date().getTime();
    const hash = createHash(timeStamp);
    var selectElement = document.getElementById('selectPersonagem');
    var selectedValue = selectElement.value;
    var elementoClicado = event.target;
    console.log(selectedValue);

    if (selectedValue == "SelecioneUmPersonagem") {
        console.log('O clique ocorreu em:', elementoClicado);
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            mesagemCadastro.innerHTML = `Selecione um Personagem!!`
            selectPersonagem.style.borderColor = "#b03838";
        } else if (elementoClicado == `<button onclick="acharPersonagem()">Selecionar Personagem</button>`) {
            person.innerHTML = `Selecione um Personagem!!`
            selectPersonagem.style.borderColor = "#b03838";
        }
    } else if (selectedValue == "capitain-america") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1009220;
        } else {
            idPersonagem = 1009220;
        }
    } else if (selectedValue == "iron-man") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1009368;
        } else {
            idPersonagem = 1009368;
        }
    } else if (selectedValue == "thor") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1011025;
        } else {
            idPersonagem = 1011025;
        }
    } else if (selectedValue == "hulk") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1009351;
        } else {
            idPersonagem = 1009351;
        }
    } else if (selectedValue == "black_widow") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1009189;
        } else {
            idPersonagem = 1009189;
        }
    } else if (selectedValue == "black_panther") {
        if (elementoClicado == `<button onclick="acharPersonagem()" class="btnl">Selecionar Personagem</button>`) {
            idPersonagem = 1009187;
        } else {
            idPersonagem = 1009187;
        }
    }

    const urlPerson = `https://gateway.marvel.com/v1/public/characters/${idPersonagem}?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
    // const urlStories = `https://gateway.marvel.com:443/v1/public/characters/${idPersonagem}/stories?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getPerson(data);
        }
    };
    xhttp.open("GET", urlPerson, true);
    xhttp.send();
}*/

/*function getPerson(dados) {

    console.log(dados["data"]["results"]);
    let coisasPersonagens = dados["data"]["results"];
    i = 0;
    person.innerHTML = "";
    while (i < coisasPersonagens.length) {
        if (idPersonagem == 1009220) {
            person.innerHTML += `
            <span class="tituloPersonagem">Capitão America</span><br>
            <img class="personagemImg" src="./assets/img/pesons/capitao.png"><br>
            <span class="infoPerso">
                <a> Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics.
                Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics
                # 1 da Timely Comics, antecessora da Marvel Comics.</a>
            </span>
            `
        }
        person.innerHTML += `
        <div class="card" style="width: 18rem;" id="c${i}">
            <div class="card-body">
                <h5 class="card-title" id="n${i}">Card title</h5>
                <h5 class="card-title" id="cod${i}">Card title</h5>
                <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModal">Stories</a>
            </div>
        </div>
        `;
        let primeiro = coisasPersonagens[i];
        quadrado = document.querySelector("#c" + i + "");
        quadrado.querySelector("#n" + i + "").textContent = "Nome: " + primeiro["name"];
        quadrado.querySelector("#cod" + i + "").textContent = "Id: " + primeiro["id"];
        i++;
    }

}*/

function cadastrar() {

    var emailVar = inp_email.value;
    var nomeVar = inp_nome.value;
    var userVar = inp_user.value;
    var senhaVar = inp_senha.value;
    var confiSenhaVar = inp_confiSenha.value;
    idPersonagem


    if (emailVar == "" || nomeVar == "" || userVar == "" || senhaVar == "" || confiSenhaVar == "" || idPersonagem == "") {

        return false;
    }

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
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
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

                sessionStorage.USERNAME_USUARIO = json.username;
                sessionStorage.FK_USUARIO = json.fkPersonagem;
                sessionStorage.PERSONAGEM_PERSONAGEM = json.personagem



                setTimeout(function () {
                    window.location = "./afterlogin/personagem.html";
                }, 1500); // apenas para exibir o loading

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
var fkPersonagem
function validarSessao() {
    // aguardar();
    var user = sessionStorage.USERNAME_USUARIO;
    fkPersonagem = sessionStorage.FK_USUARIO;
    personagem = sessionStorage.PERSONAGEM_PERSONAGEM;

    var b_usuario = document.getElementById("b_usuario");
    var nomePersonagem = document.getElementById("nomePersonagem");

    if (fkPersonagem == "1009220" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/capitain-america.svg">
        `
        
    } else if (fkPersonagem == "1009368" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" style="background-color:white; border-radius:50%;" src="../assets/img/icons/iron-man.svg">
        `
        containerPerso.innerHTML += `
        <div class="textsPerso">
        <span class="tituloPersonagem">${personagem}</span><br>
        <span>
        </span>
        <div id="imgPerso">
        <img src="../assets/img/persons/iron.png">
        </div>
        </div>
        `
    } else if (fkPersonagem == "1009187" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-panther.svg">
        `
    } else if (fkPersonagem == "1009189" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/black-widow.svg">
        `
    } else if (fkPersonagem == "1011025" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/thorr.svg">
        `
    }


    if (user != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = user;
        nomePersonagem.innerHTML = personagem;


        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

var questao = 0
var respostaEscolhida = "";

function resposta() {

    iniciar();
}



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
var thor = ['', '', '', '', ''];
var hulk = ['', '', '', '', ''];
var viuva = ['', '', '', '', ''];
var pantera = ['', '', '', '', ''];
var aranha = ['Qual e o nome do ', '', '', '', ''];
var corretas = 0;
var questaoAtual = 0;
var pergunta = "";
function iniciar() {
    if (fkPersonagem == "1009368") {
        pergunta = ferro[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>`;

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            quiz.innerHTML += `
            <div>
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}<br>
            </div>
                `;
        }
    } else if (fkPersonagem == "1009220") {
        pergunta = capitao[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>
        <div>`;

        for (var i = 0; i < pergunta.opcoes.length; i++) {
            quiz.innerHTML += `
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}<br>
                `;
        }
        quiz.innerHTML += `</div>`
    } else if (fkPersonagem == "1009187") {
        pergunta = pantera[questaoAtual];
        quiz.innerHTML = `<h3>Pergunta ${questaoAtual + 1}:</h3>`;
        quiz.innerHTML += `<p>${pergunta.pergunta}</p>
        <div>
        `;
        for (var i = 0; i < pergunta.opcoes.length; i++) {
            quiz.innerHTML += `
                <input type="radio" class="inputQuiz" name="resposta" value="${i}" onchange="verificarRespostas()">${pergunta.opcoes[i]}<br>
                `;
        }
        quiz.innerHTML += `</div>`
    }
}

function verificarRespostas() {
    var opcoes = document.getElementsByName('resposta');
    var respostaSelecionada = -1;

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostaSelecionada = parseInt(opcoes[i].value);
            break;
        }
    }

    if (respostaSelecionada === ferro[questaoAtual].resposta) {
        quiz.innerHTML += `
        <h4>Resposta Correta</h4>
        `
        corretas++
        console.log(corretas)

    } else {
        alert('Resposta incorreta!');
    }

    questaoAtual++;

    if (questaoAtual < ferro.length) {
        iniciar();
    } else {

        alert('Quiz concluído!');
        window.location = "./dashboard.html";
    }
}