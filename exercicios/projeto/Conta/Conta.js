class Conta{
    #agencia;
    #conta;
    #saldo;
    chavesPix;
    static listaContas = [];

    constructor(agencia, conta, saldo){
        this.#agencia = agencia;
        this.#conta = conta;
        this.#saldo = saldo;
        this.chavesPix = {
            cpf: undefined,
            email: undefined,
            telefone: undefined
        };
        Conta.listaContas.push(this)
    }

    criarConta(agencia, conta, saldo){
        if(agencia.length === 4 && conta.length === 5 && saldo > 0){
            this.#agencia = agencia;
            this.#conta = conta;
            this.#saldo = saldo;
        
            return "Conta criada com sucesso";
        } else {
             throw new Error("Dados inválidos para cadastro");
        }

    }
    sacar(valor){
        if(valor > 0 && typeof valor === "number"){
            if(this.#saldo - valor > 0){
                const saldoAtualizado = this.#saldo - valor;
                this.setSaldo(saldoAtualizado);
            } else {
                throw new Error("Saldo insuficiente");
            }
        } else{
            throw new Error("Valor inválido para saque");
        }
    }

    depositar(valor){
        if(valor > 0 && typeof valor === "number"){
            const saldoAtualizado = this.#saldo + valor;
            this.setSaldo(saldoAtualizado);
        }else{
            throw new Error("Valor inválido para depósito");
        }
    }

    transferir(valor, agencia, conta){
        //LISTA.find(apelido para item selecionado => comparação)
        /*
        * antes de fazer transferencia preciso verificar se a conta receptora
        */
        let contaValida = conta.listaContas.find(contaSelecionada => {
            return contaSelecionada.getConta === conta && contaSelecionada.getAgencia === agencia;
        })
        
        if(!(contaValida)){
            throw new Error('Conta não encontrada');
        }

        if(valor < 0){
            throw new Error("Valor inválido para saque");
        }

        if(this.#saldo - valor > 0){
            const saldoAtualizado = this.#saldo - valor;
            this.setSaldo(saldoAtualizado);
            const saldoContaReceptora = contaValida.getSaldo + valor;
            contaValida.setSaldo(saldoContaReceptora);
            return "Transferência realizada";
        }
    }

    criarChavePix(chavePix, tipo){
        switch(tipo){
            case "CPF":
                let regexCPF = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
                if(regexCPF.test(chavePix)){
                    this.chavesPix.cpf = chavePix;
                    return "Chave pix por cpf criada com sucesso";
                }else{
                    throw new Error("CPF inválido");
                }

            case "EMAIL":
                let regexEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(regexEMAIL.test(chavePix)){
                    this.chavesPix.email = chavePix;
                    return "Chave pix por e-mail criada com sucesso";

                }else{
                    throw new Error ("EMAIL inválido");
                }

            case "TELEFONE":
                let regexTELEFONE = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
                if(regexTELEFONE.test(chavePix)){
                    this.chavesPix.telefone = chavePix;
                    return "Chave pix por telefone criada com sucesso";

                }else{
                    throw new Error ("TELEFONE inválido");
                }
            default:
                return "Chave inexistente";
        }
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

    
}

module.exports = Conta