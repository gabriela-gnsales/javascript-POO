// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
//     apresentar () {
//         return `o MEU NOME É ${this.nome} e tenhos ${this.idade} anos.`
//     }
// }

// instanciar a classe pessoa
// const p1 = new Pessoa("Gabi", 27);
// console.log(p1);
// console.log(p1.apresentar());
// console.log(p1.nome);
// console.log(JSON.stringify(p1));
// console.log(Object.keys(p1));
// console.log(Object.values(p1));

// // Transformar alguns atributos em privado
// class PessoaPrivada {
//     #nome;
//     #idade;
//     constructor(nome, idade, email) {
//         this.#nome = nome;
//         this.#idade = idade;
//         this.email;
//     }
//     apresentar () {
//         return `o MEU NOME É ${this.#nome} e tenhos ${this.#idade} anos.`
//     }
// }

// // para resolver o caso do Json
// toJSON() {
//     return {
//         nome: this.nome, // acessando através do getter
//         idade: this.idade, // acessando a propriedade privada
//         email.this.email
//     }
// };

// JSON é um tipo de arquivo, essas são as formas de converter nosso conteúdo para este formato
// JSON é uma estrutura de dados

// const p2 = new PessoaPrivada("João", 27, 'joao@gmail.com.br');
// console.log(p2);
// console.log(p2.apresentar());
// console.log(p2.nome);
// console.log(JSON.stringify(p2));
// console.log(Object.keys(p2));
// console.log(Object.values(p2));

// Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor. 

// class Sorteio {
//     constructor(num_inscritos) {
//         this.num_inscritos = num_inscritos;
//     }
//     sorteiaPremio () {
//         return this.num_sorteado = Math.random(1,num_inscritos);
//     }
//     vencedor () {
//         return `O vencedor é ${this.num_sorteado}!`
//     }
// };

// const sorteio1 = new Sorteio(12);
// console.log(sorteio1);
// console.log(sorteio1.apresentar());

// class Sorteio {
//     constructor(num_inscritos) {
//         this.num_inscritos = num_inscritos;
//     }
//     sorteiaPremio () {
//         for (let i = 1; i <= this.num_inscritos; i ++ 1) {
//             console.log(`O ganhador do sorteio é o participante Nº${Math.floor(Math.random() * this.participantes + 1)}`)
//         }
//     }
// };

// const sorteio = new Sorteio(12);
// sorteio.sorteiaPremio();

/*
Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega.
*/

// class Restaurante {
//     constructor(cidade, delivery = false, pedidosPendentes = 0, tempoEntrega) {
//         this.cidade = cidade;
//         this.delivery = delivery;
//         this.pedidosPendentes = pedidosPendentes;
//         this.tempoEntrega = 10 + 2 * this.pedidosPendentes;
//     }
//     entregaPedido(cidadeCliente) {
//         // let cidadeCliente = '';
//         if(this.delivery == true) {
//             if (cidadeCliente == this.cidade) {
//                 return `O tempo estimado da sua entrega é ${this.tempoEntrega} minutos.`
//             } else {
//                 return `Não é possível realizar entrega na sua cidade.`
//             }
//         } else {
//             return 'Esse restaurante não faz delivery.'
//         }
        
//     }
// };

// // const restaurante.cidadeCliente = 'Curitiba';
// const restaurante = new Restaurante('Curitiba', true, 5);
// restaurante.entregaPedido();
// console.log(restaurante.entregaPedido());


// entregaPedido(cidade) {
//     if (cidade === this.cidade && this.delivery === true) {
//         return `O tempo de entrega é de ${this.tempoDeEntrega} minutos.`
//     } else if(cidade === this.cidade && this.delivery === false) {
//         return 'O estabelecimento está fechado'
//     } else {
//         return 'Não é possível realizar a entrega para essa cidade.'
//     }

//     return this.#cidade === cidadeCliente && this.#delivery ? `O tempos estimado para sua entrega é de ${this.#tempoEntrega} minutos.` : `Não é possível realizar sua entrega.`

// CÓDIGO PROFESSORA

class Restaurante {
    constructor(nome, cidade, delivery = false, pedidosPendentes = 0) {
        this.nome = nome,
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes
    }
    entregaPedido(cidadeCliente) {
        if(cidadeCliente != this.cidade) {
            return `A entrega não pode ser realizada.`
        }

        // acrescentando um pedido sempre que invocar o método entrega pedido
        this.pedidosPendentes += 1; // ++this.pedidosPendentes
        this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

        // retorno a mensagem do tempo estimado
        return `Tempo de entrega estimado é de: ${this.tempoEntregaEstimado} minutos.`
    }
}

const churrascaria = new Restaurante('João e Maria','SP', true, 2);
// console.log(churrascaria.entregaPedido("SP"));
// console.log(churrascaria.entregaPedido("SP"));
// console.log(churrascaria.entregaPedido("SP"));
// console.log(churrascaria.entregaPedido("RJ"));

// ---- //

// transformar tempoEntregaEstimado como privado

class RestaurantePrivado {
    #tempoEntregaEstimado;
    constructor(nome, cidade, delivery = false, pedidosPendentes = 0) {
        this.nome = nome,
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.#tempoEntregaEstimado = this.#formulaTempoEntrega()
    }
    entregaPedido(cidadeCliente) {
        if(cidadeCliente != this.cidade) {
            return `A entrega não pode ser realizada.`
        }

        // acrescentando um pedido sempre que invocar o método entrega pedido
        this.pedidosPendentes += 1; // ++this.pedidosPendentes
        this.#tempoEntregaEstimado = this.#formulaTempoEntrega()

        // retorno a mensagem do tempo estimado
        return `Tempo de entrega estimado é de: ${this.#tempoEntregaEstimado} minutos.`
    }
    #formulaTempoEntrega = () => {
        return 10 + 2 * this.pedidosPendentes;
    }
}

const churrascariaPrivado = new RestaurantePrivado('João e Maria','SP', true, 2);
console.log(churrascariaPrivado.entregaPedido("SP"));
// console.log(churrascariaPrivado.#tempoEntregaEstimado);


// Number.isInteger()
// tem que fazer validação
// javascript é uma linguagem fracamente tipada 

// coloca no set uma validação tipo 
// if (Number.isInteger(valor)) { this.#minhaVar = valor }
