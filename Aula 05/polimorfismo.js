/**
 * polimorfismo é o princípio pelo qual 
 * duas ou mais classes derivadas da 
 * mesma superclasse podem invocar 
 * métodos que têm a mesma assinatura, 
 * mas comportamentos distintos.
 */

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

console.log(pessoaNormal.cumprimentaPessoa());

const pessoaFisica = new PessoaFisica(
    'Gabi',
    27,
    'CWB',
    111111
);

console.log(pessoaFisica);