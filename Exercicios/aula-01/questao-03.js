/* 
3) Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype da função.

Invoque a função e printe o resultado.
*/

document.write("<br><br> QUESTÃO 3 <br><br>");

function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
  }

console.log(Aluno);

Aluno.prototype.getCurso = function () {
    return this.curso;
  }

console.log(Aluno.getCurso());

// var alunoNew = new Aluno("Engenharia Ambiental");

// console.log(alunoNew);
// console.log(alunoNew.getCurso("Química"));