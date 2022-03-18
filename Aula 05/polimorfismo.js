class Pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco
    }
    cumprimentaPessoa = () => `Olá ${this.nome}!`
};

class PessoaFisica extends Pessoa {
    constructor(nome, idade. endereco, rg) {
        super(nome, idade, endereco)
        this.rg = rg
    }
    cumprimentaPessoa = () => `Olá ${this.nome} do RG ${this.rg}`
};

const pessoaNormal = new Pessoa(
    'Jaque',
    28,
    'SP'
);

console.log(pessoaNormal);

const pessoaFisica = new PessoaFisica(
    'Gabi',
    27,
    'CWB',
    111111
);

console.log(pessoaFisica);

// PEGAR FINAL CODIGO PROF GITHUB

classe pai RecebeDados

No cliente pessoa física, criar um método
onde retorna os dados de rg e cpf.
No cliente pessoa juridica, criar um método
onde retorna os dados do cnpj

Utilize o conceito de Polimorfismo para execução da solicitação acima

Crie um Objeto Lançamentos 
e para cada operação de saque ou depósito
Insira os seguintes registros nessa classe:
  - Nome do Cliente
  - Tipo da Operação (se foi saque ou se foi depósito)
  - Valor
  - Horario da Transação
  Considerando o conceito de encapsulamento
deixe o saldo bancário do cliente inacessível fora do escopo de conta.
Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

Crie um método que calcule o juros de atraso 
de um determinado pgto, onde tenha as seguintes regras: 
- Atraso de 1 dia juros de 1%
- Atraso de 2 dias juros 2.5 % 
- Atraso de 3 dias ou mais, juros composto 