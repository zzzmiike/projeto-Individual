var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var idUsuario = req.body.idUsuarioServer;
    var idPersonagem = req.body.idPersonagemServer;
    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo dashboardModel.js
        dashboardModel.cadastrar(acertos, idUsuario, idPersonagem)
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

function listar(req, res) {
    var idPersonagem = req.body.fkPersonagemServer;
    var idUsuario = req.body.idUsuarioServer;

    dashboardModel.listar(idPersonagem, idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    listar
}