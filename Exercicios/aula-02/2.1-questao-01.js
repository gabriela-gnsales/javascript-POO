/* 
Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).
*/

class CNH {
    constructor(_pais, _idade) {
        this._pais = _pais,
        this._idade = 18
    }
    idade() {
        if(this._pais == 'US' || this._pais == 'CA') {
            this._idade = 16;
        } else if(this._pais == 'CH' || this._pais == 'RU') {
            this._idade = 21;
        } else {
            return 'Segundo a legislação de trânsito brasileira, os motoristas podem obter a Autorização para Conduzir Ciclomotor (ACC) e habilitar-se em cinco categorias distintas (A, B, C, D, E).'
        }
    }
    mensagem() {
        return `A idade permitida para dirigir no país ${this._pais} é acima de ${this._idade} anos.`        
    }
};

const cnh1 = new CNH('BR');
console.log(cnh1.idade());
console.log(cnh1.mensagem());

const cnh2 = new CNH('US');
console.log(cnh2.idade());
console.log(cnh2.mensagem());

const cnh3 = new CNH('RU');
console.log(cnh3.idade());
console.log(cnh3.mensagem());