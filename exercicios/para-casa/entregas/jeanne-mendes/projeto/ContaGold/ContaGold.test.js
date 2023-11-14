const ContaGold = require("./ContaGold");
const Cliente = require("../Cliente/Cliente");

describe("Testes da Classe ContaStandard", () => {
  test("verificar se instancia foi criada corretamente", () => {
    const conta = new ContaGold();
    expect(conta instanceof ContaGold).toBe(true);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("criar conta de com dados válidos e renda compatível", () => {
    //setup
    const cliente = new Cliente();
    const conta = new ContaGold();
    //ação

    cliente.registrar("Ana", "12345678900", 2000, conta);

    //verificação
    expect(conta.criarConta("1234", "12345", 500, 5000)).toBe(
      "Conta Gold criada com sucesso"
    );

    // remover conta da lista de contas

    conta.destruirListaDeContas();
  });

  test("retorna erro ao criar conta de com dados válidos e renda incompatível", () => {
    //setup
    const cliente = new Cliente();
    const conta = new ContaGold();
    //ação

    cliente.registrar("Ana", "12345678900", 5000, conta);

    //verificação
    expect(() => conta.criarConta("1234", "12345", 500, 4000)).toThrow(
      "Renda não compatível."
    );

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna erro ao criar ContaStandard com dados inválidos", () => {
    //setup
    const cliente = new Cliente();
    const conta = new ContaGold();
    //ação

    cliente.registrar("Ana", "12345678900", 5000, conta);

    //verificação
    expect(() => conta.criarConta("12345", "12345", 500, 5000)).toThrow(
      "Dados inválidos para cadastro"
    );

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna sucesso ao sacar 100 da conta", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 1000, 5000);

    conta.sacar(100);
    expect(conta.getSaldo()).toBe(900);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao sacar -100 reais da conta", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 1000, 5000);

    expect(() => conta.sacar(-100)).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao sacar valor maior que o saldo da conta", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 100, 7000);

    expect(() => conta.sacar(110)).toThrow("Saldo insuficiente");
    expect(conta.getSaldo()).toBe(100);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna sucesso ao depositar 100 reais da conta", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 1000, 7999.99);

    conta.depositar(100);
    expect(conta.getSaldo()).toBe(1100);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao depositar -100 reais da conta", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 1000, 6000);

    expect(() => conta.depositar(-100)).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao depositar valor não numerico", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 1000, 7000);

    expect(() => conta.depositar(" ")).toThrow("Valor inválido");
    expect(conta.getSaldo()).toBe(1000);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao sacar valor maior que o limite transacional", () => {
    const conta = new ContaGold();
    conta.criarConta("1234", "12345", 5100, 5000);

    expect(() => conta.sacar(5010)).toThrow(
      "O valor ultrapassou o limite transacional."
    );
    expect(conta.getSaldo()).toBe(5100);

    // remover conta da lista de contas
    conta.destruirListaDeContas();
  });

  test("retorna mensagem de erro ao transferir por numero de conta, valor maior que o limite transacional", () => {
    const contaEmissora = new ContaGold();
    const contaReceptora = new ContaGold();
    contaEmissora.criarConta("1234", "12345", 5100, 5000);
    contaReceptora.criarConta("1234", "12300", 100, 5000);

    expect(() => contaEmissora.transferir(5010, "1234", "12300")).toThrow(
      "O valor ultrapassou o limite transacional."
    );
    expect(contaEmissora.getSaldo()).toBe(5100);
    expect(contaReceptora.getSaldo()).toBe(100);

    // remover conta da lista de contas
    contaEmissora.destruirListaDeContas();
    contaReceptora.destruirListaDeContas();
  });
});
