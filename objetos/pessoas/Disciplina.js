class Disciplina {
  #nome;
  // ADICIONAR DISCIPLINA 

  setNome(nome) {
    if(nome) { 
      this.#nome = nome; 
        return true; 
  }       else { 
             return false;
    }
  }
  
  getNome() {
    return this.#nome;
  }

}

module.exports = Disciplina;

