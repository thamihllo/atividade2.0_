
const Aluno = require('./pessoas/escola/Aluno');

dantas = new Aluno();
dantas.setMatricula(12345);
console.log(dantas.getMatricula());

const aluno = new Aluno();
aluno.setNome('Gustavo Dantas');

const disciplina = new Disciplina();
disciplina.setNome('FrontEnd');

aluno.setDisciplina(disciplina);
console.log(aluno.getDisciplina().getNome());

aluno.setCPF('123.456.789-19');

var resposta = aluno.setMatricula('20251234');
console.log('Set matricula:', resposta);

resposta = aluno.setCurso('ADS');
console.log('Set curso:', resposta);

console.log('Matrícula:', aluno.getMatricula());
console.log('Curso:', aluno.getCurso());






