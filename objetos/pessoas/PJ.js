const Pessoa = require('./PS'); // Importa a classe base Pessoa (superclasse)

const IE = require('./IE/IEclss'); // Importa a classe IEclss para relacionamento posterior
/*
    // 09  Comentários explicando operadores de comparação
    <  : menor que
    >  : maior que
    <= : menor ou igual que
    >= : maior ou igual que
    */
// 10

class PJ extends Pessoa {
  #cnpj;

  setCNPJ(cnpj) {
    if (cnpj) {
      if (cnpj.length < 18) {
        return false;
      }

      this.#cnpj = cnpj;
      return true;
    } else {
      return false;
    }
  }

  getCNPJ() {
    return this.#cnpj;
  }

  #email;

  setEmail(email) {
    /*
    // 17  Comentários explicando operadores de igualdade
    ==   : igualdade frouxa
    ===  : igualdade estrita
    !=   : diferença frouxa
    !==  : diferença estrita
    */

    if (email !== '') {
      if (email.includes('@')) {
        super.setEmail(email);
        return true;
      }
    } else {
      return false;
    }
  }

  #ie;

  setIE(ie) {
    if (ie instanceof IE) {
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    } else {
      return false;
    }
  }

  getIE() {
    return this.#ie;
  }
}

module.exports = PJ;
