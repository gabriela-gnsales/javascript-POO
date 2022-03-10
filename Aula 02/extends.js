class ave {
    constructor(cor, especie) {
        this.cor = cor,
        this.especie = especie
    }
};

// Instanciar a classe ave
let a = new ave("branca", "galinha");
console.log(a);

class passaro extends ave {
    constructor(cor, especie, voa) {
        super(cor, especie) // ou só passar 'super'
        this.voa = voa
    }
};

class pinguim extends ave {
    constructor(cor, especie, bica) {
        super();
        this.cor = cor,
        this.especie = especie,
        this.bica = bica
    }
}

let b = new passaro("azul", "arara", true);
console.log(b);

let g = new pinguin("preto", "seila", false);
console.log(g);

// Usando o extends para um objeto pré construido

class DataModificada extends Date {
    constructor() {
        super()
    }
    getFormatteDate() {
        var meses =  ['Jan','Feb','Marçoooo0000','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return this.getDate() + "-" + meses[this.getMonth()] + "-" + this.getFullYear();
      }
};

let d = new DataModificada();
let f = new Date();

console.log(d.getDay());
console.log(d.getFormatteDate());