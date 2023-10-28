const { Conta } = require("./Conta");

class Cliente{
    //
    nome;
    #cpf;
    #renda;
    #conta;

    registrar(nome, cpf, renda, conta){
        if(conta instanceof Conta){
            this.nome = nome;
            this.#cpf = cpf;
            this.#renda = renda; 
            this.#conta = conta;
            return "Cliente cadastrado.";
        }
        else throw Error('Erro no cadastro. Dados inválidos.');
         
    }
}

module.exports = {Cliente}