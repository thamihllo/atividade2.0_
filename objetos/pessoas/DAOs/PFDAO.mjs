// pessoas/DAOs/PFDAO.mjs

import { localStorage } from '../../localStorage.mjs'; 
import PF from '../PF.js';

export default class PFDAO {

  #PF;

  constructor(PF) {
    if (PF instanceof PF) {
      this.#PF = PF;
    }
  }

  toJSON() {
    let fones = [];

    
    for (let fone of this.#PF.getTelefones()) {
      fones.push({
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    
    return {
      nome: this.#PF.getNome(),
      email: this.#PF.getEmail(),
      cpf: this.#PF.getCPF(),
      endereco: {
        logradouro: this.#PF.getEndereco().getLogradouro(),
        cep: this.#PF.getEndereco().getCep(),
      },
      telefone: fones,
      
    };
  }

  saveJSON() {
    
    localStorage.setItem("PF", JSON.stringify(this.toJSON()));
  }

  recoveryJSON() {
    
    return JSON.parse(localStorage.getItem("PF"));
  }
}