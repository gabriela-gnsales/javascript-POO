/* 
2) Crie um objeto de nome Ave e adicione um atributo de nome espécie.

Dentro do objeto Ave crie uma função, que retorno o atributo espécie.

Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, crie um objeto de nome Peixe e através do bind faça ele retornar a espécie do objeto peixe.
*/

document.write("<br><br> QUESTÃO 2 <br><br>");

const ave = {
    especie: "Arara",
    // falaEspecie(especie = "Arara") {
    //   return ("A espécie da ave é: " + especie);
    // }
    falaEspecie: function() {
        return ("A espécie é: " + this.especie);
    }
  };

console.log(ave);
console.log(ave.falaEspecie());
// console.log(ave.falaEspecie("Sabiá"));

document.write(ave.falaEspecie());
// document.write("<br>", ave.falaEspecie("Sabiá"));

const peixe = {
    especie: "Salmão"
}

let especie1 = ave.falaEspecie.bind(peixe);

console.log(especie1());

document.write("<br>", especie1());