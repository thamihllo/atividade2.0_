
const Endereco = require ('./Endereco');
const Telefone = require('./Telefone');

class PS {

  #nome;
  #email;
 
//relacionamento N-1 Endereco
#endereco;

setEndereco (endereco) {
if (endereco instanceof Endereco) {
     this.#endereco = endereco; 
     endereco.setPessoa(this); //referencia cruzada 
     return true;
} else {
  return false; 
}


}
  getEndereco (){
    return this.#endereco;
  }

  
//relacionamento de N - N com telefone 

#telefones = [];

addTelefone (telefone){
if (telefone instanceof Telefone) {
  this.#telefones.push(telefone);
  telefone.setPessoa(this); //referencia cruzada 
  return true;
} else {
  return false;
 }
}
getTelefones() {
  return this.#telefones;
}

///============================================================

  setNome(nome) {
    if (nome) {
    this.#nome = nome;
    return true
    } else {
      return false 
    }
  }

  getNome() {
    return this.#nome;
  }

  
  setEmail(email) {
    if (email) {
      this.#email = email;
      return true 
    } else {
      return false 
    }
  }

  getEmail() {
    return this.#email;
  }

} 


  

module.exports = PS

/*const end = new Endereco()
end.setLogradouro ('QNM 40')
const obj = new PS();
obj.setNome ('dantas')
obj.setEndereco(end) 
console.log (obj.getNome());
console.log(obj.getEndereco().getLogradouro());

const fone1 = new Telefone();
const fone2 = new Telefone();

fone1.setNumero ('1234-5555')
fone2.setNumero ('1236-8888')

obj.addTelefone(fone1);
obj.addTelefone(fone2);

console.log(obj.getTelefones());
console.log(end.getPessoas()); 

console.log(fone1.getPessoas()); 


*/
 