var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo dashboardModel.js
        dashboardModel.cadastrar(acertos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o o registro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
