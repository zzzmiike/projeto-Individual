var database = require("../database/config")

function listar() {
    console.log("ACESSEI O usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(username, senha) {
    console.log("ACESSEI O usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)
    var instrucao = `
        SELECT usuario.idUsuario as idUsuario,
        usuario.nome as nomeUsuario,
        usuario.username as username,
        usuario.senha as senha,
        usuario.email as email,
        personagem.idPersonagem as fkPersonagem,
        personagem.descricao as descricao,
        personagem.nome as personagem,
        personagem.hp as hp,
        personagem.resistência as resistencia,
        personagem.forca as forca,
        personagem.inteligencia as inteligencia,
        personagem.agilidade as agilidade,
        personagem.defesa as defesa,
        personagem.armadura as armadura
        FROM usuario JOIN personagem ON fkPersonagem = idPersonagem WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(username, nome, email, senha, idPersonagem) {
    console.log("ACESSEI O usuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, nome, email, senha, idPersonagem);

    // Insira exatamente a query do banco aqui, lembrando da usernamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (username, nome, email, senha, fkPersonagem) VALUES ('${username}', '${nome}', '${email}', '${senha}', '${idPersonagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};