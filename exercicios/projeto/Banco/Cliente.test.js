const { Cliente } = require('./Cliente');
const { Conta } = require('./Conta');

require('./Cliente')

describe('Teste da classe Cliente', () => {
    test('verificar se instancia Cliente está sendo criada', () =>{
        const cliente = new Cliente();
        expect(cliente instanceof Cliente).toBe(true);
        //expect(cliente).toBeInstanceOf(Cliente)
        //expect(cliente instanceof Cliente).toBeTruthy()
    });

    test('cadastrar cliente com dados válidos', () =>{
        const cliente = new Cliente();
        const conta = new Conta();
        expect(cliente.registrar('Analu', '12387676545', 500, conta)).toBe('Cliente cadastrado.');
    });

    test('retorna mensagem de erro quando tenta cadastrar cliente sem conta', () =>{
        const cliente = new Cliente();
        expect(() => cliente.registrar('Analu', '12387676545', 500, 'conta inexistente')).toThrow('Erro no cadastro. Dados inválidos.');
    })
})