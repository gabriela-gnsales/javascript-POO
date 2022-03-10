// OBRIGATORIAMENTE, deve ser passado 1 parâmetro para o SET
// já o GET não precisa de parâmetro

var variavel = {
    valor: 0,
    conversor: '',
    get moeda() {
        return "O valor é de R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get int() {
        return this.valor;
    },
    set int(i) {
        this.valor = i;
    },
    get conversao() {
        if(this.conversor === "peso") {
            return 0.046 * this.valor;
        }
    },
}

variavel.int = 150;
variavel.conversor = "peso";

console.log(variavel);

/*
EXERCÍCIO

Construa um objeto do tipo Carro que contenha os seguintes atributos: 
  - cor
  - marca

Insira a cor do carro utilizando getter e setter;
Insira a marca do carro utilizando getter e setter;

Crie um get que retorne uma mensagem informando a marca e a cor do carro.
*/

var carro = {
    _cor: '',
    _marca: '',
    get insereCor() { // get cor()
        return this._cor;
    },
    set insereCor(idCor) {
        this._cor = idCor;
    },
    get insereMarca() {
        return this._marca;
    },
    set insereMarca(idMarca) {
        this._marca = idMarca;
    },
    get mensagem() {
        // return "Cor do carro: " + this._cor + " | Marca do carro: " + this._marca;
        return `O carro é da cor ${this._cor} e da marca ${this._marca}.`
    }
};

// carro.int1 = "preta";
// carro.int2 = "Honda";

carro.insereCor = "preta";
carro.insereMarca = "Honda";

console.log(carro.mensagem);

// console.log(carro.insereCor);
// console.log(carro.insereMarca);