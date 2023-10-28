const Conta = require("../Conta/Conta");

class Cliente {
  nome;
  #cpf;
  #renda;
  #conta;

// Nosso sistema não vai criar objetos sem antes verificar a conta
// por isso o construtor fica dentro do "registrar", após validar se a conta foi instanciada

//regra de negocio para criacao de  CLIENTE
/**
 * eu só vou criar cliente SE ele tiver uma conta existente
 */
registrar(nome, cpf, renda, conta){
    if(conta instanceof Conta){
        this.nome = nome;
        this.#cpf = cpf;
        this.#renda = renda;
        this.#conta = conta;

        return "Cliente Cadastrado";
    } else {
        throw new Error("Erro no cadastro, dados inválidos")
    }

  }
}

module.exports = Cliente;
