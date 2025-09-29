//const Pessoa = require('./Aluno.js');

class Disciplina {
  #nome;
  #disciplina;

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
    }
  }

  getNome() {
    return this.#nome;
  }

  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }

  getDisciplina() {
    return this.#disciplina;
  }
}

module.exports = Disciplina;
