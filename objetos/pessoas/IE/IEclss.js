// Inscrição Estadual - IE
// Classe que representa a Inscrição Estadual de uma Pessoa Jurídica

const PJ = require('../PJ'); 

class IE {
  #numero;
  #estado;
  #dataRegistro;
 

  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    }
    return false;
  }

  getNumero() {
    return this.#numero;
  }

  setEstado(estado) {
    if (estado) {
      this.#estado = estado;
      return true;
    }
    return false;
  }

  getEstado() {
    return this.#estado;
  }

  setDataRegistro(data) {
    if (data instanceof Date) {
      this.#dataRegistro = data;
      return true;
    }
    return false;
  }

  getDataRegistro() {
    return this.#dataRegistro;
  }

  #PJ;

  setPJ(pjInstance) {
    if (pjInstance) {
      this.#PJ = pjInstance;
      return true;
    }
    return false;
  }

  getPJ() {
    return this.#PJ;
  }
}

module.exports = IE;

/*const IE = require('./IE');

const ie = new IE();

ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date('2023-01-01'));

console.log(ie.getNumero());         
console.log(ie.getEstado());  
console.log(ie.getDataRegistro());   

*/

