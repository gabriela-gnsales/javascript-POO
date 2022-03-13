/* 
2) Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
*/

const TV = {
    _canal: '',
    _volume: '',
    _ligada: false,
    liga() {
        if(!this._ligada) {
            this._ligada = true;
        }
        return this._ligada;
    },
    desliga() {
        if(this._ligada) {    
          this._ligada = false;
        }
        return this._ligada;
    },
    mudaDeCanal () {
        return this._canal;
    },
    aumentaVolume(volumeInicial = 10, volumeFinal) {
        if(this._volume > 0) {
           volumeFinal = volumeInicial + this._volume;
        }
        return volumeFinal;
    },
    diminuiVolume(volumeInicial = 10, volumeFinal) {
        if(this._volume < 0) {
            volumeFinal = volumeInicial + this._volume;
        }
        return volumeFinal;
    }
};

TV._canal = 4;
TV._volume = 5;
TV._ligada = true;

console.log(TV);
console.log('Liga:', TV.liga());
console.log('Desliga:',TV.desliga());
console.log('Canal:',TV.mudaDeCanal());
console.log('Volume:',TV.aumentaVolume());
console.log('Volume:',TV.diminuiVolume());