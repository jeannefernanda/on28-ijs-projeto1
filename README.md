<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 28 - Imersão JavaScript | Semana 07 | 2023 | Professora Analu

### Professora Analu
<h1>
  <img src="assets/analu.jpeg" alt="foto analu" width="150">
</h1>

Eu sou desenvolvedora back-end, professora de programação e JUG Community Manager no `Devs JavaGirl`

Fui da primeira turma de Back-End da Reprograma
Hoje trabalho como Engenheira de Software no Banco Itaú.

- 💌 Email: sampaioaanaluiza@gmail.com
- 📸 Instagram: [@analu.io](https://www.instagram.com/analu.io/)
- 🐤 Twitter: [@analupontoio](https://twitter.com/analupontoio/)
- 💼 LinkedIn: [in/sampaioaanaluiza](https://www.linkedin.com/in/sampaioaanaluiza/)
- 👩‍💻 Github:[/analuizasampaio](https://github.com/analuizasampaio)


### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* Crie uma branch com seu nome e não suba nada na main (para isso é só digitar no seu terminal `git checkout -b nome-da-sua-branch
`)
* Para tirar duvidas sobre como configurar o Remote, é só clicar [aqui](/material/configRemote.md)

### Objetivo
Projeto com foco em design de classes. Iniciar as funcionalidades do zero, pensando em como modelar os objetos e como separar os métodos de forma a aplicar os quatro pilares da POO e testes.

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)

- [Conteúdo](#conteúdo)
  - [TDD: Test Driven Development](#tdd-test-driven-development)
    - [O que é e para que serve](#o-que-é-tdd-e-para-que-servem)
    - [Beneficios](#benefícios-do-tdd)
    - [Implementação](#implementação-do-tdd)
    - [Jest](#jest)
  - [Prototype](#prototype)
  - [Programação Orientada a Objetos](#programação-orientada-a-objetos)
    - [Estrutura da POO](#estrutura-da-poo)
    - [Os 4 pilares da POO](#os-4-pilares-da-poo)
      - [Abstração](#abstração)
      - [Encapsulamento](#encapsulamento)
      - [Herança](#herança)
      - [Polimorfismo](#polimorfismo)
  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo

## TDD: Test Driven Development
   #### O que é TDD e para que serve
   TDD é a sigla para *Test Driven Development*, que significa Desenvolvimento Orientado por Testes. Nessa metodologia de desenvolvimento de software a codificação dos testes unitários acontece antes da codificação das funcionalidades. Na prática, utilizar TDD, ajuda a ter mais segurança ao desenvolver do zero e fazer alterações, pois o feedback de erro (ou acerto) é mais rápido.

   #### Benefícios do TDD
  - Aumenta segurança ao realizar alterações no código por conta do feedbeck rápido;
  - Menos bugs - o código é feito para funcionar - isso promove menor tempo na depuração e correção;
  - Promove código mais simples e bem estruturado;
  - Reforça a cultura de qualidade de software.

   #### Implementação do TDD
  O TDD é dividido em três fases: Vermelho (Red), Verde (Green) e Refatoração (Refactor). Passo a passo:

  1. Escrevemos um teste para a funcionalidade que ainda será implementada. Como ela não existe, caso o teste seja executado ele deve resultar em erro, ou seja, vermelho!
  2. Escrevemos a funcionalidade, e executamos o teste, agora ele deve funcionar, isso é o verde.
  3. Se a funcionalidade e o teste funcionam, devemos buscar (se possível) melhorar o que foi codificado. As modificações podem fazer com que o teste falhe, a refatoração deve durar até o teste voltar a funcionar.

  <h6 align="center">
  <img src="assets/tdd-cycle.png" alt="logo jest" width="500">
</h6>

#### Jest
Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. 

```bash
npm init -y
# Gera o arquivo com configurações básicas
```

```bash
npm i --save-dev jest
# Instala o jest no projeto
```

no arquivo `package.json` alterar a linha 7 para `"test": "jest"`

`Alias: --coverage`. Indica que as informações de cobertura de teste devem ser coletadas e relatadas na saída.

`describe` divide seu conjunto de testes em componentes. Dependendo da sua estratégia de teste, você pode ter uma descrição para cada função da sua classe, cada módulo do seu plugin ou cada funcionalidade voltada para o usuário.

`it` ou `test` é onde você realiza testes individuais. Você deve ser capaz de descrever cada teste como uma pequena frase, como "ele calcula a área quando o raio é definido". Você não deve ser capaz de subdividir ainda mais os testes - se achar necessário, use descrever.

docs:
 - https://jestjs.io/pt-BR/docs/api
 - https://jestjs.io/pt-BR/docs/expect


## Prototype
Prototype é uma característica dos Objetos na linguagem JavaScript. Apesar de apresentar comportamentos de herança e em seu uso aparecerem palavras reservadas como `class`, o Prototype não faz parte do paradigma de programação orientada à objetos por si só, ele é parte da arquitetura core do JavaScript, sendo assim uma característica dos Objetos na linguagem.

Ele fica exatamente entre o que é Objeto para o JavaScript e a OOP em si, por isso é uma boa forma de introduzir os conceitos mesmo antes que você saiba a parte teórica de Orientação à Objetos.

  > Todo  `prototype` herda do `Object.prototype`

  > O Objeto de `Object.getPrototypeOf()` dever ser somente um único `prototype`

  #####  [Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
  `Object.prototype`
  #####  [String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
  `String.prototype`
  ##### [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
  `Number.prototype`
  ##### [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
  `Array.prototype`

## Programação Orientada a Objetos
A programação orientada a objetos é um paradigma de programação que fornece um modelo no qual um programa é uma coleção de objetos que interagem entre si, passando mensagens que transformam seu estado.

Neste caso, todos os objetos possuem determinados estados e comportamentos. Enquanto os estados são descritos pelas classes como **atributos**, a forma como eles se comportam é definida por meio de **métodos**. 

### Estrutura da POO
A Programação Orientada a Objetos possui dois pilares de sustentação: a utilização de classes e objetos.
Além de possuírem, dentro dessas, atributos e métodos.

As **classes** são modelos/formas que definem os objetos que serão reutilizados e instanciados durante o código.

Os **objetos** são instâncias de classes criadas com dados específicos.

Enquanto classes são como definições do conceito de uma entidade do mundo real, objetos são a representação de um exemplar da entidade.

**Atributos** são as *características* que as classes (e, por consequência, seus objetos) possuem.

**Métodos** são as *funções* que a classe (e, por consequência, seus objetos) possuem.

**Métodos e atributos privados** são aqueles que ficam acessíveis apenas dentro da classe. Para isso, utilizamos `#` antes do nome. Além disso, temos os métodos `get` e `set` que nos auxiliam a acessar ou alterar atributos privados de uma maneira controlada e segura.

**Métodos e atributos estáticos** são aquelas que pertencem à classe, não aos objetos instanciados a partir dela. Para isso, utilizamos a palavra-chave `static`.

Exemplo:
```javascript
class Funcionario {
  nome;
  #salario;

  static funcionarios = [];

  constructor(nome, salario) {
    this.nome = nome;
    this.#salario = salario;
    this.constructor.funcionarios.push(this.nome);
  }

  get salario() {
    return this.#salario;
  }

  set salario(novoSalario) {
    this.#salario = novoSalario;
  }

  receberBonusMensal(bonus) {
    //..
  }

  #receberAumento(aumento) {
    //...
  }

  static removerFuncionario(funcionario) {
    //...
  }
}
```

### Os 4 pilares da POO
Na prática, para a POO funcionar, ela precisa utilizar de 4 pilares básicos. São eles:
- Abstração
- Encapsulamento
- Herança
- Polimorfismo

#### Abstração
Abstrair algo significa esconder os detalhes da implementação dentro de algo.

Na Orientação a Objetos, a abstração consiste em extrair entidades do mundo real para dentro do código seguindo a fio suas responsabilidades.

Na POO, podemos utilizar diagrama de classe em UML para representar as nossas classes de uma maneira simples, abstraindo as implementações:

<div style="text-align:center;">
  <img src="https://github.com/reprograma/on25-IJS-orientacao-objetos-I/assets/26902816/af4931f0-f032-43fa-acf8-4efc2cdf61dd" width="300px" />
</div>

#### Encapsulamento
Quando definimos os atributos de um objeto, devemos garantir que alterar os valores desses atributos sejam responsabilidade exclusiva do próprio objeto. O encapsulamento, portanto, é o conceito de proteger os atributos de um objeto.

Para que isso seja possível, podemos utilizar o conceito de métodos e atributos privados, dando acesso de leitura e edição apenas quando fizer sentido e para quem tiver permissão. Nesse caso, utilizamos os métodos `get` e `set`.

```javascript
class Funcionario {
  nome;
  #salario;
  #temPermissao;

  constructor(nome, salario, temPermissao) {
    this.nome = nome;
    this.#salario = salario;
    this.#temPermissao = temPermissao;
  }

  get salario() {
    if(this.temPermissao) {
      return this.#salario;
    }
  }

  set salario(novoSalario) {
    if(this.temPermissao) {
      this.#salario = novoSalario;
    }
  }
}
```
#### Herança
A Herança é o conceito de passar características e comportamentos de uma classe para outras classes, suas herdeiras. Permite a criação de hierarquias de classes, onde classes e objetos herdam propriedades e comportamentos de sua _classe mãe/pai_ (ou _superclasse_). Uma classe que herda de uma classe mãe/pai (ou superclasse) é chamada de _subclasse_ ou _classe filha_, e objetos que recebem propriedades e comportamentos de um pai por meio de herança são chamados de _objetos filhos_.

Para usar a herança de classe, você usa a palavra-chave `extends`.
Se quisermos modificar um construtor de uma classe que herda outra, precisamos sobrescrever o construtor da classe de origem utilizando a palavra-chave `super`.
```javascript
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`A pessoa de nome ${this.name} está falando`);
  }
}

class User extends Person {
  email;
  password;

  constructor(name, age, email, password) {
    super(name, age);
    this.email = email;
    this.password = password;
  }
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
console.log(user1);
user1.speak();
```
> Em JavaScript, uma classe só pode ter uma classe mãe. Ou seja, não é possível combinar atributos e métodos de diferentes "famílias" numa única classe.


#### Polimorfismo
A palavra polimorfismo significa "de muitas formas", e no contexto de POO, tem dois aspectos distintos: (1) os objetos de uma classe filha podem ser tratados como objetos de uma classe pai, em locais como parâmetros de métodos, coleções e matrizes; (2) classes filhas de uma mesma classe, respondem a mesma mensagem, cada uma de uma forma diferente.


***
## Projeto 
* [Projeto da semana](/exercicios/projeto/)

## Links que apareceram na aula
* [sobre gitignore](https://www.atlassian.com/br/git/tutorials/saving-changes/gitignore)
* [sobre stash](https://www.atlassian.com/br/git/tutorials/saving-changes/git-stash)

<p align="center">
Desenvolvido com :purple_heart:  
</p>

