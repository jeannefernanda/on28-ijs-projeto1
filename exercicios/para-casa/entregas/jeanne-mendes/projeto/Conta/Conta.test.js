/**
 * ESTRUTURA DOS TESTES
 * setup (o que a minha funcao/metodo/classe que vai ser testada precisa para funcionar?)
 * acao (execusao da funcao testada)
 * verificacao (o que eu espero que seja retornado comparado com o que de fato é retornado)
  
 */
const Conta = require("./Conta");

describe("Testes da Classe Conta", () => {
  test("verificar se instancia foi criada corretamente", () => {
    const conta = new Conta();
    expect(conta instanceof Conta).toBe(true);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("instanciar conta com valores validos", () => {
    /**
     * Agencia (4 digitos string) -> privado
     * Conta (5 digitos string)-> privado
     * Saldo (numero positivo) -> privado
     */
    const conta = new Conta("1234", "12345", 1000);
    expect(conta.getAgencia()).toBe("1234");
    expect(conta.getConta()).toBe("12345");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de sucesso ao criar conta", () => {
    const conta = new Conta();
    expect(conta.criarConta("1234", "12345", 1000)).toBe(
      "Conta criada com sucesso"
    );
    expect(conta.getAgencia()).toBe("1234");
    expect(conta.getConta()).toBe("12345");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao tentar criar conta com dados invalido", () => {
    const conta = new Conta();
    expect(() => conta.criarConta("123454", "123", 1000)).toThrow(
      "Dados inválidos para cadastro"
    );

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna sucesso ao sacar 100 da conta", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 1000);

    conta.sacar(100);
    expect(conta.getSaldo()).toBe(900);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao sacar -100 reais da conta", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 1000);

    expect(() => conta.sacar(-100)).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao sacar valor maior que o saldo da conta", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 100);

    expect(() => conta.sacar(110)).toThrow("Saldo insuficiente");
    expect(conta.getSaldo()).toBe(100);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna sucesso ao depositar 100 reais da conta", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 1000);

    conta.depositar(100);
    expect(conta.getSaldo()).toBe(1100);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao depositar -100 reais da conta", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 1000);

    expect(() => conta.depositar(-100)).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao depositar valor não numerico", () => {
    const conta = new Conta();
    conta.criarConta("1234", "12345", 1000);

    expect(() => conta.depositar(" ")).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("criar uma chave pix por cpf com sucesso", () => {
    //setup
    const conta = new Conta();

    //acao
    const operacao = conta.criarChavePix("40814360879", "CPF");

    //verificacao
    expect(operacao).toBe("Chave Pix por cpf criada com sucesso");
    expect(conta.chavesPix.cpf).toBe("40814360879");

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retornar mensagem de erro ao tentar cadastrar chave pix com cpf invalido", () => {
    //setup
    const conta = new Conta();

    //verificacao
    expect(() => conta.criarChavePix("124861", "CPF")).toThrow(
      "Erro: CPF inválido"
    );

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("criar uma chave pix por email com sucesso", () => {
    //setup
    const conta = new Conta();

    //acao
    const operacao = conta.criarChavePix("analu@email.com", "EMAIL");

    //verificacao
    expect(operacao).toBe("Chave Pix por email criada com sucesso");
    expect(conta.chavesPix.email).toBe("analu@email.com");

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("criar uma chave pix por telefone com sucesso", () => {
    //setup
    const conta = new Conta();

    //acao
    const operacao = conta.criarChavePix("11951639874", "TELEFONE");

    //verificacao
    expect(operacao).toBe("Chave Pix por telefone criada com sucesso");
    expect(conta.chavesPix.telefone).toBe("11951639874");

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  /**
   * TRANFERENCIA
   * emissor = conta q esta enviando o dinheiro
   * recepto = conta q está recebendo esse dinheiro
   * agencia e conta do receptor
   * metodo vai precisar de valor, agencia do Receptor e conta do Receptor
   * valor valido
   * saldo suficiente
   * dados validos do receptor
   */

  test("retorna sucesso ao fazer uma transferencia com valor válido, saldo suficiente, dados validos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("0001", "12345", 1000);
    contaReceptor.criarConta("0001", "78945", 500);

    //acao
    const operacao = contaEmissor.transferir(100, "0001", "78945");

    //verificacao
    expect(operacao).toBe("Tranferencia realizada");
    expect(contaEmissor.getSaldo()).toBe(900);
    expect(contaReceptor.getSaldo()).toBe(600);

    contaEmissor.destruirListaDeContas();
    contaReceptor.destruirListaDeContas();
  });

  test("retornar mensagem de erro ao tentar cadastrar chave pix com telefone invalido", () => {
    //setup
    const conta = new Conta();

    //verificação
    expect(() => conta.criarChavePix("699485", "TELEFONE")).toThrow(
      "Erro: Telefone inválido"
    );

    conta.destruirListaDeContas();
  });

  test("retornar mensagem de erro ao tentar cadastrar chave pix com e-mail invalido", () => {
    //setup
    const conta = new Conta();

    //verificação
    expect(() => conta.criarChavePix("2345678990", "EMAIL")).toThrow(
      "Erro: Email inválido"
    );

    conta.destruirListaDeContas();
  });

  test("retornar mensagem de erro ao tentar cadastrar chave pix com tipo de chave inexistente", () => {
    //setup
    const conta = new Conta();

    //acao
    operacao = conta.criarChavePix("2345678990", "CNH");
    //verificação
    expect(operacao).toBe("Chave inexistente");

    conta.destruirListaDeContas();
  });

  test("retorna sucesso ao fazer uma transferencia pix com valor válido, saldo suficiente, dados válidos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("1234", "12345", 200);
    contaReceptor.criarConta("1234", "13345", 500);

    contaReceptor.criarChavePix("email@email.com", "EMAIL");

    //ação
    const operacao = contaEmissor.transferenciaPix(100, "email@email.com", "email");

    //verificação
    expect(operacao).toBe("Tranferencia realizada");
  });

  test("retorna erro para valor válido, saldo suficiente e dados inválidos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("1234", "12345", 200);
    contaReceptor.criarConta("1234", "13345", 500);

    contaReceptor.criarChavePix("email@email.com", "EMAIL");

    //verificação
    expect(() => contaEmissor.transferenciaPix(100, "email2@email.com", "email")).toThrow(
      "Chave pix não encontrada"
    );
  });

  test("retorna erro para valor válido, saldo insuficiente e dados válidos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("1234", "12345", 200);
    contaReceptor.criarConta("1234", "13345", 500);

    contaReceptor.criarChavePix("email@email.com", "EMAIL");
    operacao = contaEmissor.transferenciaPix(1210, "email@email.com", "email");

    //verificação
    expect(operacao).toBe("Saldo insuficiente.");
  });

  test("retorna erro para valor inválido, saldo suficiente e dados válidos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("1234", "12345", 200);
    contaReceptor.criarConta("1234", "13345", 500);

    contaReceptor.criarChavePix("email@email.com", "EMAIL");

    //verificação
    expect(() => contaEmissor.transferenciaPix(-1210, "email@email.com", "email")).toThrow(
      "Valor inválido"
    );
  });

  test("retorna erro ao fazer uma transferencia com valor válido, saldo insuficiente, dados validos", () => {
    //setup
    const contaEmissor = new Conta();
    const contaReceptor = new Conta();

    contaEmissor.criarConta("0001", "12345", 1000);
    contaReceptor.criarConta("0001", "78945", 500);

    //acao
    const operacao = contaEmissor.transferir(1001, "0001", "78945");

    //verificacao
    expect(operacao).toBe("Saldo insuficiente.");
    expect(contaEmissor.getSaldo()).toBe(1000);
    expect(contaReceptor.getSaldo()).toBe(500);

    contaEmissor.destruirListaDeContas();
    contaReceptor.destruirListaDeContas();
  });
});
