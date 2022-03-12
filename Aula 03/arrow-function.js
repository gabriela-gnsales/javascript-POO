// Estrutura (argumentos) => { corpo da função}

const soma = (n1,n2) => {
    return n1+n2;
};
console.log(soma(1,2));

// Se tiver uma única instrução
const multiplicacao = (n1,n2) => n1 + n2;
console.log(multiplicacao(2,2));

// Retorno implícito
const x1 = () => 'retorno implícito';
console.log(x1());

// Funcionamento do THIS

const carro = {
    modelo: 'hb20',
    marca: 'hyundai',
    nomeCompleto: function() {
        return `${this.modelo} ${this.marca}`;
    }
};

const carro1 = {
    modelo: 'hb20',
    marca: 'hyundai',
    nomeCompleto = () => `${this.modelo} ${this.marca}`;
};

