#Projeto

desenvolva aplicando tdd

### Sistema Bancário

Você foi contratado para fazer uma versão inicial de um sistema bancário. Nessa versão o sistema conta com as seguintes funcionalidades:
- cadastro de clientes de acordo com a categorização do tipo de conta
- cadastro de chave pix (email, telefone e cpf)
- transações permitidas:
  - saque
  - transferência
  - pix
  - depósito

### Clientes
Os clientes do nosso banco são divididos de acordo com a sua renda mensal em 3 categorias de conta:
#### Standard
Clientes com conta standard são os clientes base do banco, são pessoas com até R$4999,99 de renda mensal. 
Eles também tem limite de transação de 1000 reais por dia.

#### Gold
Clientes com conta Gold são so clientes intermediários do banco com renda mensal de R$5000,00 até R$17.999,99. 
Eles também tem limite de transação de 5000 reais por dia.

#### Premium
Clientes com conta premium são aqueles que possuem renda mensal a partir de R$18.000,00.
Eles não tem limite de transação por dia.

### Operações
As transações permitidas por nosso banco no momento são:
Lembrar que para todas as transações é necessário verificar se o cliente possui saldo disponível para realizá-la.

#### PIX
Podemos cadastrar chaves pix para nossos clientes, no momento apenas chaves de e-mail, telefone e cpf para simplificar nosso exercício. Com as chaves pix é possível transferir dinheiro para outra conta de nosso banco. Para realizar a transação é necessário ter a chave pix de quem irá receber e o valor a ser transferido via pix.

#### Saque
O cliente pode optar por sacar dinheiro em uma dos nossos caixas eletrônicos e para isso basta solicitar o saque e o valor a ser retirado.

#### Transferência
Temos também a opção por transferência, para realizar esta operação é necessário ter a conta do banco do destinatário, CPF e valor a ser transferido.

#### Depósito
O cliente também pode depositar dinheiro em sua conta, passando apenas o valor a ser depositado.

### Diagrama feito em aula
  <img src="../../assets/diagrama_bancao.png" alt="diagrama banco" >

### to-do
- [ ] Cliente
  - Atributos
    - [ ] nome
    - [ ] cpf
    - [ ] renda
    - [ ] conta
  - Métodos
    - [ ] registrar cliente
  - [ ] Testes
    - [ ] verificar se instancia é criada
    - [ ] verificar se dados estão validos
    - [ ] verificar dados invalidos

- [ ] Conta
  - Atributos
    - [ ] agencia
    - [ ] conta
    - [ ] saldo
    - [ ] chavesPix
  - Métodos
    - [ ] depositar
    - [ ] sacar
    - [ ] transferir
    - [ ] getSaldo
    - [ ] setSaldo
    - [ ] pix
      - [ ] criar pix
        - [ ] email
        - [ ] telefone
        - [ ] cpf

