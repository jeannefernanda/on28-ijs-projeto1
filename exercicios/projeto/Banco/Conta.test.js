const { Conta } = require('./Conta')

describe('Teste da classe Cliente', () =>{
    test('verificar se a conta foi criada', () =>{
        //
        const conta = new Conta();
        expect(conta instanceof Conta).toBe(true)
        
    });

    test('instanciar conta com valores válidos', () =>{
        /*
        * Agência (4 digitos) -> privado
        * Conta (5 digitos) -> privado
        * Saldo (número positivo) -> privado
        */
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000)
        expect(conta.getAgencia()).toBe('1234');
        expect(conta.getConta()).toBe('12345');
        expect(conta.getSaldo()).toBe(1000);
    });

    test('retorna mensagem de sucesso ao criar conta.', () =>{
        const conta = new Conta();
        expect(conta.criarConta('1234', '12345', 1000)).toBe('Conta criada com sucesso.');
        expect(conta.getAgencia()).toBe('1234');
        expect(conta.getConta()).toBe('12345');
        expect(conta.getSaldo()).toBe(1000);
    });

    test('Retorna mensagem de erro ao tentar criar conta com dados inválidos.', () =>{
        const conta = new Conta();
        expect(() => conta.criarConta('12345', '234', 1000)).toThrow('Dados inválidos para cadastro');
    });

    test('retorna sucesso ao sacar 100 reais da conta.', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000);
        conta.sacar(100);
        expect(conta.getSaldo()).toBe(900)
    });

    test('retorna mensagem de erro ao sacar -100 da conta.', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000);  
        expect(() => conta.sacar(-100)).toThrow('Valor inválido para saque.');
        expect(conta.getSaldo()).toBe(1000)
    });

    test('retorna mensagem de erro ao sacar valor maior que o saldo da conta.', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 100);  
        expect(() => conta.sacar(110)).toThrow('Saldo insuficiente.');
        expect(conta.getSaldo()).toBe(100)
    });

    test('retorna sucesso ao depositar 100 reais na conta', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000)
        conta.depositar(100)
        expect(conta.getSaldo()).toBe(1100)
    })

    test('retorna erro ao depositar -100 na conta', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000)
        expect(() => conta.depositar(-100)).toThrow('Valor inválido para depósito.');
        expect(conta.getSaldo()).toBe(1000)
    })

    test('retorna erro ao depositar valor não numérico na conta', () =>{
        const conta = new Conta();
        conta.criarConta('1234', '12345', 1000)
        expect(() => conta.depositar('100')).toThrow('Valor inválido para depósito.');
        expect(conta.getSaldo()).toBe(1000)
    })

})