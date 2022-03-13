/* 
Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).

Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.
*/

// Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).

// class Perfil {
//     constructor(_nome, _avatar, _tema) {
//         this._nome = _nome,
//         this._avatar = _avatar,
//         this._tema = _tema
//     }
//     get Tema() {
//         if(this._tema != 'light' && this._tema != 'dark') {
//             return 'Não é possível adicionar esse tema. Os temas válidos são: light ou dark.'
//         } else {
//             return `Você adicionou o tema ${this._tema}.`
//         }
//     }
//     set Tema(idTema) {
//         this._tema = idTema;
//     }
//     get Avatar() {
//         var url = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
//         if (url.test(this._avatar)) {
//             return 'Url válida';
//         } else {
//             return 'Url inválida';
//         }
//     }
//     set Avatar(idAvatar) {
//         this._avatar = idAvatar;
//     }
// };

// const perfil1 = new Perfil('Gabi', 'https://instagram.fbfh17-1.fna.fbcdn.net/v/t51.2885-19/253606813_948923812648226_4913477833695681951_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbfh17-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=GKxSEI76A9YAX90v2od&tn=sWaVeSbDN7SwKdCb&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_6lMzljZYksyBSjgwzKH4WV-G-eDBkrD0a5UffE9nTWA&oe=623510A1&_nc_sid=7bff83', 'dark');
// console.log(perfil1);
// console.log(perfil1.Tema);
// console.log(perfil1.Avatar);

// const perfil2 = new Perfil('Jhony', 'teste', 'light');
// console.log(perfil2);
// console.log(perfil2.Tema);
// console.log(perfil2.Avatar);

// const perfil3 = new Perfil('Paulo', 'teste', 'teste');
// console.log(perfil3);
// console.log(perfil3.Tema);
// console.log(perfil3.Avatar);

// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

class SmartWatch {
    constructor(_passos) {
        this._passos = _passos
    }
    get Pedometro() {
        return this._passos = this._passos =+ 1;
    }
    set Pedometro(idPassos) {
        this._passos = idPassos;
    }
    resetOnMidnight(hora) {
        // let today = getDate();
        // console.log('today:', today);
        // let hora = today.getHours();
        // console.log('hora:', hora);
        if(hora == '00:00') {
            return this._passos = 0;
        }
    }
    mensagem() {
        `O número de passos é ${this._passos}.`
    }
};

const smartwatch1 = new SmartWatch(250);
console.log(smartwatch1);
console.log(smartwatch1.resetOnMidnight('00:00'));
console.log(smartwatch1.mensagem());

// TERMINAR

// Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.

class Veiculo {
    constructor(_rodas, _usaCombustivel = false) {
        this._rodas = _rodas,
        this._usaCombustivel = _usaCombustivel
    }
};

class Carro extends Veiculo {
    constructor(_rodas, _usaCombustivel = false, tipoDecombustivel) {
        super(_rodas, _usaCombustivel),
        this.tipoDecombustivel = tipoDecombustivel
    }
};

class Bicicleta extends Veiculo {
    constructor(_rodas, _usaCombustivel = false, infantil = false) {
        super(_rodas, _usaCombustivel),
        this. infantil =  infantil
    }
};