// qnd trabalhamos com ENTIDADE usamos CLASS
// qnd trabalhamos com AÇÃO/MÉTODO usamos FUNÇÃO

function ConstroiPessoaConstrutor(nome, email, idade) {
    this.nome = nome,
    this.email = email,
    this.idade = idade,

    // reescrevendo o método toString que seria encontrado no escopo global
    this.toString = () => {
        return ("Nome da pessoa: " + this.nome + ", idade da pessoa: " + this.idade)
    }
}

// Instaciando função construtora
let gabi = new ConstroiPessoaConstrutor("Gabi", "gabriela.gnsales@gmail.com", 27);

console.log(gabi.toString());
console.log(gabi.idade.toString());

// Transformar a função construtora em uma classe
class Pessoa {
    constructor(nome, email, idade) {
        this.nome = nome,
        this.email = email,
        this.idade = idade
    }
    get dobraIdade() {
        return this.idade * 2;
    }
    calculaIdade = function(anoAtual, anoNascimento) {
        // return anoAtual - anoNascimento;
        this.idade = anoAtual - anoNascimento;
    }
}

let Jaque = new Pessoa(
    "Jaqueline",
    "jaque@letscode.com.br",
    28
);

console.log(Jaque);