/* 
1) Crie um objeto de nome aluno e adicione as seguintes propriedades:

nome, matricula e idade

Crie neste mesmo objeto aluno, uma função que receba como parâmetro o curso do aluno, o parâmetro deverá ter um default,  adicione esse parâmetro recebido em uma propriedade do objeto aluno

Retorne o objeto aluno ANTES da chamada da função (NÃO ENTENDI ESSA PARTE)

Retorne o objeto aluno APÓS a chamada da função 
*/

document.write("QUESTÃO 1 <br><br>");

const aluno = {
    nome: "Gabi",
    matricula: 1,
    idade: 27,
    cursoAluno(curso = "Programação Orientada a Objetos I - JavaScript") {
      return (curso);
    }
  };

  console.log(aluno);

  console.log(
    "Nome:", aluno.nome, "Matrícula:", aluno.matricula, "Idade:", aluno.idade, "Curso:", aluno.cursoAluno()
    );

  document.write(
    `Nome: ${aluno.nome} <br>
    Matrícula: ${aluno.matricula} <br>
    Idade: ${aluno.idade} <br>
    Curso: ${aluno.cursoAluno()}`
    );