// objetos/pessoas/Aluno.js

import PF from './PF.js';          
import Disciplina from './Disciplina.js'; 

export default class Aluno extends PF { 
  #matricula;
  #curso;
  #disciplina;

 
  setMatricula(matricula) {
    if (matricula) {
      if (matricula.length === 8 && matricula.startsWith('20')) {
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  getMatricula() { 
    return this.#matricula;
  }

  
  setCurso(curso) {
    if (curso) {
      if (curso === 'SI' || curso === 'ADS') {
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  getCurso() { 
    return this.#curso;
  }

  
  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }
  getDisciplina() {
    return this.#disciplina;
  }
}

// O código de teste abaixo deve ser movido para um script de uso separado (usaAluno.mjs),
// ou removido se for apenas para o DAO.
/*
const aluno = new Aluno();
aluno.setNome('dantas');

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
*/
