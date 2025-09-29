
  class Pessoa
   {
    constructor(peso, altura)
     {
      this.peso = peso;
      this.altura = altura;
    }
  
    imc() 
    {
      return this.peso / (this.altura * this.altura);
    }
  }
  
  module.exports = Pessoa;
  
  /* const PS = require('./PS.js')

PS.setNome('dantas');

const telefone = new Telefone();
telefone.setTelefone('');

aluno.setDisciplina(disciplina);
console.log(aluno.getDisciplina().getNome());

aluno.setCPF('123.456.789-19');

var resposta = aluno.setMatricula('20251234');
console.log('Set matricula:', resposta);

resposta = aluno.setCurso('ADS');
console.log('Set curso:', resposta);

console.log('Matrícula:', aluno.getMatricula());
console.log('Curso:', aluno.getCurso());



/*const x = new Pessoa();

resposta = x.setNome('dantas');
if (resposta) {
  console.log(x.getNome());
} else {
  console.log('nome vazio!!!!!');
}

resposta = x.setEmail('dantas@gmail.com');
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("email vazio!!!");
}
console.log(resposta);

resposta = x.setIdade('26');
if (resposta) {
  console.log(x.getIdade());
} else {
  console.log("idade vazia!!!");
}
console.log(resposta);

const pessoa = new Pessoa();

const PF = require ('./PF')

const PF = new PF();

if (PF.setCPF("12345678900")) {
  console.log("CPF salvo:", PF.getCPF());
} else {
  console.log("CPF inválido!");
}

