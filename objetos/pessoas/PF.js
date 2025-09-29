const Pessoa = require ('./PS.js')

class PF extends Pessoa {
 
    #cpf;
  
    setCPF(cpf) {
      if (cpf) {
        this.#cpf = cpf;
        return true;
      } else {
        return false;
      }
    }
  
    getCPF() {
      return this.#cpf;
    }
  }
  
  module.exports = PF;

   
   const x = new PF();
   
   var resposta = x.setNome('dantas');
   if (resposta) {
     console.log(x.getNome());
   } else {
     console.log('nome inválido!!!');
   }
   
   resposta = x.setCPF('123.456.789-19');
   if (resposta) {
     console.log(x.getCPF());
   } else {
     console.log('CPF inválido!!!');
   }
    
   //node ./ objetos/pessoas/PF.js


   