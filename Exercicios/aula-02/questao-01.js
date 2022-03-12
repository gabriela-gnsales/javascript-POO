/* 
1) Crie um objeto do tipo curso que tenha os seguintes atributos:
    nome
    p1
    p2
    media
Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2.
Crie um get que retorne uma mensagem informando o nome do curso e sua média.
*/

let curso = {
    _nome: '',
    _p1: '',
    _p2: '',
    _media: '',
    get nome() { 
        return this._nome;
    },
    set nome(idNome) {
        this._nome = idNome;
    },
    get p1() {
        return this._p1;
    },
    set p1(idP1) {
        this._p1 = idP1;
        console.log(idP1);
    },
    get p2() {
        return this._p2;
    },
    set p2(idP2) {
        this._p2 = idP2;
    },
    get calculaMedia() {
        if(this._p1 <= 0) {
            return this._media = `A nota da p1 foi 0, não vai ser possível fazer uma média`;
        } else{
            return this._media = (this._p1 + this._p2) / 2;
        }
    },
    // set media(idMedia) {
    //     this._media = idMedia;
    // },
    get mensagem() {
        console.log(this._media);
        // return "Cor do carro: " + this._cor + " | Marca do carro: " + this._marca;
        return `O nome do curso é ${this._nome} e sua média é igual a ${this._media}.`
    }
    
};

curso.nome = "POO";
curso.p1 = 0;
curso.p2 = 5.0;

// set media(media) {
//     if(this.p1 <= 0) {
//         return  "A nota da p1 foi 0, não vai ser possível fazer uma média";
//         console.log('Pium');
//     }
//     else {
//         media = (this.p1 + this.p2)/2;
//         return this.nome + "\nMédia: " + media;
//     }
// }

// console.log(curso._p1);

// console.log(curso.calculaMedia());

console.log(curso.mensagem);

console.log(curso._media);