class Conta{
    #agencia;
    #conta;
    #saldo;
    chavesPix;

    criarConta(agencia, conta, saldo){
        if(agencia.length === 4 && conta.length === 5 && saldo > 0){
            this.#agencia = agencia;
            this.#conta = conta;
            this.#saldo = saldo;
        }
            
        else throw Error('Dados inválidos para cadastro');
                    
        this.chavesPix = {
            cpf: undefined,
            email: undefined,
            telefone: undefined
        };
        return('Conta criada com sucesso.')
    }

    getAgencia(){
        return this.#agencia;
    }

    getConta(){
        return this.#conta;
    }

    getSaldo(){
        return this.#saldo;
    }

    setSaldo(novoSaldo){
        this.#saldo = novoSaldo;
    }

    sacar(valor){
        if(valor > 0 && typeof valor === 'number'){
            if(valor <= this.#saldo ){
                this.#saldo -= valor;
            }
            else throw Error('Saldo insuficiente.')
        }
        else throw Error('Valor inválido para saque.');
    }

    depositar(valor){
        if(valor > 0 && typeof valor === 'number'){
            this.#saldo += valor;
        }

        else throw Error('Valor inválido para depósito.')
    }

}

module.exports = {Conta}