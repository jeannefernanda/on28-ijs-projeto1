class Conta {
  #agencia;
  #conta;
  #saldo;
  chavesPix;
  static listaContas = [];

  constructor(agencia, conta, saldo) {
    this.#agencia = agencia;
    this.#conta = conta;
    this.#saldo = saldo;
    this.chavesPix = {
      cpf: undefined,
      email: undefined,
      telefone: undefined,
    };

    Conta.listaContas.push(this);
  }

  destruirListaDeContas() {
    let i = Conta.listaContas.indexOf(this);
    Conta.listaContas.splice(i, 1);
  }

  criarConta(agencia, conta, saldo) {
    if (agencia.length === 4 && conta.length === 5 && saldo > 0) {
      this.#agencia = agencia;
      this.#conta = conta;
      this.#saldo = saldo;

      return "Conta criada com sucesso";
    } else {
      throw new Error("Dados inválidos para cadastro");
    }
  }

  verificaValor(valor){
    if (valor > 0 && typeof valor === "number") {
      return valor;
    } else {
      throw new Error("Valor inválido");
    }
  }

  verificaConta(agencia, conta){
    let contaValida = Conta.listaContas.find((contaReceptora) => {
      let numeroContaReceptora = contaReceptora.getConta();
      let numeroAgenciaReceptora = contaReceptora.getAgencia();
      return (
         numeroContaReceptora === conta && numeroAgenciaReceptora === agencia
      );
    });
    return contaValida;
  }

  sacar(valorDeSaque) {
    let valor = this.verificaValor(valorDeSaque);
    if (this.#saldo - valor > 0) {
      const saldoAtualizado = this.#saldo - valor;
      this.setSaldo(saldoAtualizado);
    } else {
      throw new Error("Saldo insuficiente");
    }
    
  }

  depositar(valorDeSaque) {
    let valor = this.verificaValor(valorDeSaque);
    const saldoAtualizado = this.#saldo + valor;
    this.setSaldo(saldoAtualizado);
    
  }

  verificaSaldoSuficiente(valor){
    if (valor < 0) {
      throw new Error("Valor inválido para transferencia");
    }
    if (valor > this.#saldo) {
      return "Saldo insuficiente.";
    }
    return true;
  }

  atualizarSaldo(conta, valor){
    if (this.#saldo - valor > 0) {
      const saldoAtualizado = this.#saldo - valor;
      this.setSaldo(saldoAtualizado);
      const saldoContaReceptora = conta.getSaldo() + valor;
      conta.setSaldo(saldoContaReceptora);
      return "Tranferencia realizada";
    }
  }

  transferir(valor, agencia, conta) {
    let contaValida = this.verificaConta(agencia, conta);
    if (!contaValida) {
      throw new Error("Conta não encontrada");
    }

    let result = this.verificaSaldoSuficiente(valor);
    if(result === true){
      return this.atualizarSaldo(contaValida, valor)
    }
    
    return result;

  }
  transferenciaPix(valor, chavePix, tipo) {
    let contaValida = Conta.listaContas.find(
      (conta) => conta.chavesPix[tipo] === chavePix
    );

    if (!contaValida) {
      throw new Error("Chave pix não encontrada");
    }

    let result = this.verificaSaldoSuficiente(valor);
    if(result === true){
      return this.atualizarSaldo(contaValida, valor)
    }    
    return result;

  }

  getAgencia() {
    return this.#agencia;
  }

  getConta() {
    return this.#conta;
  }

  getSaldo() {
    return this.#saldo;
  }

  setAgencia(agencia) {
    this.#agencia = agencia;
  }

  setConta(conta) {
    this.#conta = conta;
  }

  setSaldo(novoSaldo) {
    this.#saldo = novoSaldo;
  }

  criarChavePix(chavePix, tipo) {
    const regexMap = {
      CPF: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
      EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      TELEFONE: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
    };
  
    if (!regexMap[tipo]) {
      throw new Error("Tipo de chavePix inválido");
    }
  
    if (regexMap[tipo].test(chavePix)) {
      this.chavesPix[tipo.toLowerCase()] = chavePix;
      return `Chave Pix por ${tipo.toLowerCase()} criada com sucesso`;
    } else {
      throw new Error(`Erro: ${tipo.toLowerCase()} inválido`);
    }
  }
  
}

module.exports = Conta;
