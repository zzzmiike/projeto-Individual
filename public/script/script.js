const privateKey = "4a11e7353de06c247a0b1fc44057121851474704";
const publicKey = "eaf3fa204749e1b8d92f1585d6b58007";

function createHash(timestamp) {
    const stringToHash = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();
    return hash;
}
var selecao = "";

function alterar() {
    selecao = document.getElementById('selectPersonagem');
    var nome = selecao.value;
    console.log(nome);

}
var idPersonagem = 0;

function acharPersonagem() {
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
}

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

        finalizarAguardar();
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
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.FK_USUARIO = json.fkPersonagem;


                setTimeout(function () {
                    window.location = "personagem.html";
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

    var b_usuario = document.getElementById("b_usuario");

    if (fkPersonagem == "1009220" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="./assets/img/icons/capitain-america.svg">
        `
    } else if (fkPersonagem == "1009368" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="./assets/img/icons/iron-man.svg">
        `
    } else if (fkPersonagem == "1009187" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="./assets/img/icons/black-panther.svg">
        `
    } else if (fkPersonagem == "1009189" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="./assets/img/icons/black-window.svg">
        `
    } else if (fkPersonagem == "1011025" && user != null) {
        liperson.innerHTML = `
        <img id="iconeperso" src="./assets/img/icons/thorr.svg">
        `
    }


    if (user != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = user;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}