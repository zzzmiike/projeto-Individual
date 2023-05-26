var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(acertos, idUsuario, idPersonagem) {
    console.log("ACESSEI O usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idPersonagem, idUsuario, acertos);

    // Insira exatamente a query do banco aqui, lembrando da usernamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO respostas (fkPersoResp, fkUsuario, acertos, dtResposta) VALUES (${idPersonagem}, ${idUsuario}, ${acertos}, NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};