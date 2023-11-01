const Conta = require("./Conta");

describe("Testes da Classe Conta", ()=>{
    test("verificar se instancia foi criada corretamente", ()=>{
        const conta = new Conta()
        expect(conta instanceof Conta).toBe(true)
    });

    test("instanciar conta com valores validos", ()=>{
        /**
         * Agencia (4 digitos string) -> privado
         * Conta (5 digitos string)-> privado
         * Saldo (numero positivo) -> privado
         */
        const conta = new Conta("1234", "12345", 1000)
        expect(conta.getAgencia()).toBe("1234")
        expect(conta.getConta()).toBe("12345")
        expect(conta.getSaldo()).toBe(1000)
    })

    test("retorna mensagem de sucesso ao criar conta", ()=>{
        const conta = new Conta();
        expect(conta.criarConta("1234", "12345", 1000)).toBe("Conta criada com sucesso")
        expect(conta.getAgencia()).toBe("1234")
        expect(conta.getConta()).toBe("12345")
        expect(conta.getSaldo()).toBe(1000)
    })

    test("retorna mensagem de erro ao tentar criar conta com dados invalido", ()=>{
        const conta = new Conta();
        expect(() => conta.criarConta("123454", "123", 1000)).toThrow("Dados inválidos para cadastro")
    })

    test("retorna sucesso ao sacar 100 da conta", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000)

        conta.sacar(100)
        expect(conta.getSaldo()).toBe(900)

    })

    test("retorna mensagem de erro ao sacar -100 reais da conta", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000)

        expect(()=> conta.sacar(-100)).toThrow("Valor inválido para saque")
        expect(conta.getSaldo()).toBe(1000)

    })

    test("retorna mensagem de erro ao sacar valor maior que o saldo da conta", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 100)

        expect(()=> conta.sacar(110)).toThrow("Saldo insuficiente")
        expect(conta.getSaldo()).toBe(100)

    })

    test("retorna sucesso ao depositar 100 reais da conta", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000)

        conta.depositar(100)
        expect(conta.getSaldo()).toBe(1100)

    })

    
    test("retorna mensagem de erro ao depositar -100 reais da conta", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000)

        expect(()=> conta.depositar(-100)).toThrow("Valor inválido para depósito")
        expect(conta.getSaldo()).toBe(1000)

    })

        
    test("retorna mensagem de erro ao depositar valor não numerico", ()=>{
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000)

        expect(()=> conta.depositar(" ")).toThrow("Valor inválido para depósito")
        expect(conta.getSaldo()).toBe(1000)

    });

    test('Criar uma chave pix por cpf com sucesso', () => {
        //setup
        const conta = new Conta();
        
        //ação
        const operacao = conta.criarChavePix('817.012.092-68', 'CPF');

        //verificação
        expect(operacao).toBe('Chave pix por cpf criada com sucesso');
        expect(conta.chavesPix.cpf).toBe('817.012.092-68')
    });

    
    test('retornar mensagem de erro ao tentar cadastrar chave pix com cpf invalido', () => {
        //setup
        const conta = new Conta();
        
        //ação
        //const operacao = conta.criarChavePix('345', 'CPF');
        //verificação
        expect(() => conta.criarChavePix('345', 'CPF')).toThrow("CPF inválido")
    })

    test('criar pix por telefone com sucesso', () => {
        //setup
        const conta = new Conta();
        
        //ação
        const operacao = conta.criarChavePix('69992838455', 'TELEFONE');

        //verificação
        expect(operacao).toBe('Chave pix por telefone criada com sucesso');
        expect(conta.chavesPix.telefone).toBe('69992838455');
    })

    test('criar pix por email com sucesso', () => {
        //setup
        const conta = new Conta();
        
        //ação
        const operacao = conta.criarChavePix('aluna@email.com.br', 'EMAIL');

        //verificação
        expect(operacao).toBe('Chave pix por e-mail criada com sucesso');
        expect(conta.chavesPix.email).toBe('aluna@email.com.br');
    })

    test('', () =>{
        
    })


})
