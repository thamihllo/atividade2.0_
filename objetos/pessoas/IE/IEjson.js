const PJ = ('../PJ')

//Objeto literal para IE 

const IE = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,

  setNumero: function (numero) {
    if (numero) {
      this.numero = numero;
      return true;
    }
    return false;
  }

}