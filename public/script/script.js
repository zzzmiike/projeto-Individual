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

function getPerson(dados) {

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

}

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
            }, "200")

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
                }, 1000); // apenas para exibir o loading

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

function validarSessao() {
    // aguardar();

    var user = sessionStorage.USERNAME_USUARIO;
    var fkPersonagem = sessionStorage.FK_USUARIO;
    personagem = sessionStorage.PERSONAGEM_PERSONAGEM;

    var b_usuario = document.getElementById("b_usuario");
    var nomePersonagem = document.getElementById("nomePersonagem");

    if (fkPersonagem == "1009220" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/capitain-america.svg">
        
        `
    } else if (fkPersonagem == "1009368" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="../assets/img/icons/iron-man.svg">
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

/*function resposta() {

    respostaEscolhida = document.getElementById('escolha');
    var resposta = respostaEscolhida.value;

    console.log(resposta)

    iniciar();
}

function iniciar() {
    var capitao = ['', '', '', '', ''];
    var ferro = [`<h3>Pergunta 1:</h3>
    <p>Qual o nome do super-herói conhecido como "Homem de Ferro"?</p>
    <input type="radio" name="pergunta1" id="escolha" value="a" onclick="resposta()"> a) Tony Stark<br>
    <input type="radio" name="pergunta1" id="escolha value="b" onclick  ="resposta()"> b) Steve Rogers<br>
    <input type="radio" name="pergunta1" id="escolha value="c" onclick  ="resposta()"> c) Bruce Banner<br>`, 'opa', '3', '4', '5'];
    var thor = ['', '', '', '', ''];
    var hulk = ['', '', '', '', ''];
    var viuva = ['', '', '', '', ''];
    var pantera = ['', '', '', '', ''];
    var aranha = ['', '', '', '', ''];
    if (personagem = "1009220") {
        for (var i = 0; i <= questao; i++) {
            quiz.innerHTML = `                        
            <details class="questao" id="det${i}">
            <summary id="sum${i}">${i + 1}° Pergunta</summary>
            <div class="detQuestao">
                <p>
                    ${ferro[i]}
                </p>
                <div>
                    <input type="text" id="" class="inputQuestao" onkeyup="verificar()" placeholder="Insira aqui a sua resposta">
                </div>
            </div>
        </details>
        `
        }
        questao++

    }
}*/

var perguntas = [
    {
        pergunta: "Qual o nome do ator que interpreta o Homem de Ferro nos filmes da Marvel?",
        opcoes: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        resposta: 0
    },
    {
        pergunta: "Qual é a identidade civil do Homem de Ferro?",
        opcoes: ["Tony Stark", "Steve Rogers", "Bruce Banner"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da empresa de tecnologia fundada por Tony Stark?",
        opcoes: ["Stark Industries", "Oscorp", "Wayne Enterprises"],
        resposta: 0
    },
    {
        pergunta: "Qual é a cor predominante na armadura do Homem de Ferro?",
        opcoes: ["Vermelho e Dourado", "Verde", "Azul e Vermelho"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da assistente virtual desenvolvida por Tony Stark?",
        opcoes: ["JARVIS", "FRIDAY", "EDITH"],
        resposta: 0
    }
];

var quizContainer = document.getElementById("quiz");

function exibirPerguntas() {
    quiz.innerHTML = "";
    for (var i = 0; i < perguntas.length; i++) {
        quiz.innerHTML += "<h3>Pergunta " + (i + 1) + ":</h3>";
        quiz.innerHTML += "<p>" + perguntas[i].pergunta + "</p>";
        for (var j = 0; j < perguntas[i].opcoes.length; j++) {
            quiz.innerHTML += '<input type="radio" name="pergunta' + i + '" value="' + j + '"> ' + perguntas[i].opcoes[j] + "<br>";
        }
        quiz.innerHTML += "<br>";
    }
}

function verificarRespostas() {
    var respostasCorretas = 0;
    var respostasSelecionadas = [];

    for (var i = 0; i < perguntas.length; i++) {
        var opcoes = document.getElementsByName("pergunta" + i);
        for (var j = 0; j < opcoes.length; j++) {
            if (opcoes[j].checked) {
                respostasSelecionadas.push(opcoes[j].value);
                if (opcoes[j].value == perguntas[i].resposta) {
                    respostasCorretas++;
                }
                break;
            }
        }
    }

    var resultado = "Você acertou " + respostasCorretas + " de " + perguntas.length + " perguntas.";
    alert(resultado);
}

exibirPerguntas();