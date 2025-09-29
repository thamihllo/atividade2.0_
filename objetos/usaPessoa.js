const Pessoa = require ('./Pessoa.js'); // importei a classe 

const joao = new Pessoa (80 ,1.80);

console.log (joao.imc()); 
console.log (joao.peso);


const maria = new Pessoa (90, 1.60);

console.log (maria.imc());
console.log (maria.peso);


const bruno = new Pessoa (100, 1.95);

console.log (bruno.imc());
console.log (bruno.peso);

const lucas = new Pessoa (50, 1.53);

console.log (lucas.imc());
console.log (lucas.peso);


//uma outra possibilidade de introduzir orientação e objetos 

const dantas = new Pessoa () 

dantas.peso = 70;
dantas.altura = 1.81;
console.log (dantas.imc());