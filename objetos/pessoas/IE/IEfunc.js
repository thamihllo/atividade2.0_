
const PJ = require('../PJ');

// Factory para IE usando funções e closure (sem classe)
function IE() {
  let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

 
    setNumero(numero) {
      if (numero) { dados.numero = numero; return true }
      return false;
    },
    getNumero() {
      return dados.numero;
    },

    setEstado(estado) {
      if (estado) {dados.estado = estado; return true;}
      return false;
    },
    getEstado() {
      return dados.estado;
    },

    setDataRegistro(data) {
      if (data instanceof Date) {dados.dataRegistro = data; return true;}
      return false;
    },
    getDataRegistro() {
      return dados.dataRegistro;
    },

    setPJ(pjInstance) {
      if (pjInstance instanceof PJ) {
        dados.pj = pjInstance;
        return true;
      }
      return false;
    },
    getPJ() {
      return dados.pj;
    }
  };
}

module.exports
