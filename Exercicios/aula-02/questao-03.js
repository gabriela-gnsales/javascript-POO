/* 
3) Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

Refaça o exercício da TV utilizando uma função construtora

Refaça o exercício da TV utilizando a sintaxe de classe (class).
*/

// Função construtora

function TVconstrutor(canal, volume, ligada) {
    this.canal = canal,
    this.volume = volume,
    this.ligada = ligada,
    this.liga = () => {
        if(!this.ligada) {
            this.ligada = true;
        }
        return this.ligada;
    },
    this.desliga = () => {
        if(this.ligada) {    
          this.ligada = false;
        }
        return this.ligada;
    },
    this.mudaDeCanal = () => {
        return this.canal;
    },
    this.aumentaVolume = (volumeInicial = 10, volumeFinal) => {
        if(this.volume > 0) {
           volumeFinal = volumeInicial + this.volume;
        }
        return volumeFinal;
    },
    this.diminuiVolume = (volumeInicial = 10, volumeFinal) => {
        if(this.volume < 0) {
            volumeFinal = volumeInicial + this.volume;
        }
        return volumeFinal;
    }
};

let TVconstrutor1 = new TVconstrutor(4, 5, true);

console.log(TVconstrutor1);
console.log('Liga:', TVconstrutor1.liga());
console.log('Desliga:', TVconstrutor1.desliga());
console.log('Canal:', TVconstrutor1.mudaDeCanal());
console.log('Volume:', TVconstrutor1.aumentaVolume());
console.log('Volume:', TVconstrutor1.diminuiVolume());

// Classe

class TVclass {
    constructor(_canal, _volume, _ligada) {
        this._canal = _canal,
        this._volume = _volume,
        this._ligada = _ligada
    }
    liga() {
        if(!this._ligada) {
            this._ligada = true;
        }
        return this._ligada;
    }
    desliga() {
        if(this._ligada) {    
          this._ligada = false;
        }
        return this._ligada;
    }
    mudaDeCanal () {
        return this._canal;
    }
    aumentaVolume(volumeInicial = 10, volumeFinal) {
        if(this._volume > 0) {
           volumeFinal = volumeInicial + this._volume;
        }
        return volumeFinal;
    }
    diminuiVolume(volumeInicial = 10, volumeFinal) {
        if(this._volume < 0) {
            volumeFinal = volumeInicial + this._volume;
        }
        return volumeFinal;
    }
};

let TVclass1 = new TVclass(4, 5, true);
    
console.log(TVclass1);
console.log('Liga:', TVclass1.liga());
console.log('Desliga:', TVclass1.desliga());
console.log('Canal:', TVclass1.mudaDeCanal());
console.log('Volume:', TVclass1.aumentaVolume());
console.log('Volume:', TVclass1.diminuiVolume());