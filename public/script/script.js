
const privateKey = "4a11e7353de06c247a0b1fc44057121851474704";
const publicKey = "eaf3fa204749e1b8d92f1585d6b58007";

function createHash(timestamp) {
    const stringToHash = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();
    return hash;
}


function acharPersonagem() {
    var idPersonagem = 0;
    const timeStamp = new Date().getTime();
    const hash = createHash(timeStamp);
    var selectElement = document.getElementById('selectPersonagem');
    var selectedValue = selectElement.value;
    console.log(selectedValue);

    if (selectedValue == "SelecioneUmPersonagem"){
        person.innerHTML = `Selecione um Personagem!!`
        selectPersonagem.style.borderColor = "#b03838";
    } else if (selectedValue == "capitain_american") {
        idPersonagem = 1009220;
    } else if (selectedValue == "iron_man") {
        idPersonagem = 1009368;
    } else if (selectedValue == "thor") {
        idPersonagem = 1011025;
    } else if (selectedValue == "hulk") {
        idPersonagem = 1009351;
    } else if (selectedValue == "black_widow") {
        idPersonagem = 1009189;
    } else if (selectedValue == "black_panther") {
        idPersonagem = 1009187;
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

        person.innerHTML += `
        <div class="card" style="width: 18rem;" id="c${i}">
            <img id="i${i}" class="card-img-top img-thumbnail" src="" alt="Card image cap">
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
        quadrado.querySelector("#i" + i + "").src = primeiro["thumbnail"]["path"] + "." + primeiro["thumbnail"]["extension"];
        quadrado.querySelector("#n" + i + "").textContent = "Nome: " + primeiro["name"];
        quadrado.querySelector("#cod" + i + "").textContent = "Id: " + primeiro["id"];
        i++;
    }

}