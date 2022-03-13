/* 
2) Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
*/

const TV = {
    canal: '',
    volume: '',
    ligada: false,
    liga() {
        if(!this.ligada) {
            this.ligada = true;
        }
        return this.ligada;
    },
    desliga() {
        if(this.ligada) {    
          this.ligada = false;
        }
        return this.ligada;
    },
    mudaDeCanal () {
        return this.canal;
    },
    aumentaVolume(volumeInicial = 10, volumeFinal) {
        if(this.volume > 0) {
           volumeFinal = volumeInicial + this.volume;
        }
        return volumeFinal;
    },
    diminuiVolume(volumeInicial = 10, volumeFinal) {
        if(this.volume < 0) {
            volumeFinal = volumeInicial + this.volume;
        }
        return volumeFinal;
    }
};

TV.canal = 4;
TV.volume = 5;
TV.ligada = true;

console.log(TV);
console.log('Liga:', TV.liga());
console.log('Desliga:', TV.desliga());
console.log('Canal:', TV.mudaDeCanal());
console.log('Volume:', TV.aumentaVolume());
console.log('Volume:', TV.diminuiVolume());