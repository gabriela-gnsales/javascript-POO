/* 
3) Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype da função.

Invoque a função e printe o resultado.
*/

document.write("<br><br> QUESTÃO 3 <br><br>");

// criar função construtora
function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
  };

// instanciar o Aluno
const alunoNew = new Aluno(
    "Gabriela",
    27,
    "gabriela.gnsales@gmail.com",
    123456,
    "Engenharia Ambiental"
);

// printar o resultado
console.log(alunoNew);

// prototype (um protótipo da função)
Aluno.prototype.getCurso = function() {
    return this.curso;
}

console.log(alunoNew.getCurso());

document.write(
    `Nome: ${alunoNew.nome} <br>
    Matrícula: ${alunoNew.matricula} <br>
    Idade: ${alunoNew.idade} <br>
    Curso: ${alunoNew.getCurso()}`
    );

