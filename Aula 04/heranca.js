class Animal {
    constructor(especie) {
        this.especie = especie
    }
};

// Extendendo a classe pessoa do animal

class Pessoa extends Animal {
    constructor(nome, idade, especie = 'homo sapiens sapiens') {
    super(especie)
    this.nome = nome,
    this.idade = idade
    }
    imprimiDados(saudacao) {
        return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade)
        // o método super executa o construtor da classse 
        // neste caso a classe Pai é Pessoa
        // internamente o método super está fazendo:
        // this.nome = nome
        // this.idade = idade
        // se deixarmos o super vazio, ele retorna indefined
        this.cpf = cpf,
        this.rg = rg
    }
};

const joao = new Pessoa('João', 22);
console.log(joao);

const jaque = new Cidadao('Carlos', 24, '0000', '11111');
console.log(jaque);