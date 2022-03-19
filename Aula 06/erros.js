function qualquerCoisa() {
    let num = 1;
    return num.toUpperCase();
};

try {
    // invocando a função
    qualquerCoisa()
};

catch(error) {
    console.log("entrei no catch");
    console.log(error);
    console.log(error.message);
    console.log(error.name);
};

// Criando várias instruções de try catch

function funcaoFunciona() {
    console.log("Turma 837 #Let's Code");
};

try {
    qualquerCoisa();
    console.log('Dando sequência no código')
};

catch(err) {
    console.log(err);
};

finally {
    console.log('Final do Try ou do Catch');
};

// try {
//     console.log('Memso o Try acima dando erro, este funcionou');
//     funcaoFunciona();
// };

// catch(error) {
//     console.log(error);
// };

function validaErro(mensagemErro) {
    this.erro = mensagemErro;
    // return 'Qualquer coisa'
};

function validaString(nome) {
    try {
        if(typeof nome != 'string') {
            
            // throw new TypeError('O valor do nome do parâmetro deve ser uma string');
            
            throw new validaErro('Erro no formato');

            // TypeError: função nativa do JavaScript
            // throw: é uma declaração que lança 
        } else {
            console.log(`Olá ${nome}`);
        }
    }
    catch(e) {
        console.log(e.erro);
    }
};

validaString(11);

