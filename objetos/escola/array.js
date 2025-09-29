 // Forma 1 node ./objetos/escola/array.js
var dadosAluno = ['Dantas', 12345 , true];
console.log(dadosAluno);
console.log(dadosAluno[0]);

// Forma 2 
var curso = [];
curso [0] = 'ADS';
curso [1] = 2025;
curso [3] = 'Computação'
console.log(curso);

// Forma 3 
var notas = new Array (7.5,5,8.9);
console.log(notas); 

// Forma 4 
var arrays =[true,false, true]; //mesmo tipo 
console.log(arrays);

//Forma 5 
var frutas = []; //objeto Array - possui atributos e metodos 
frutas .push ("maçã"); //adicionar ao final 
frutas .push ("banana");
frutas.unshift('uva'); // adicionar no inicio 
frutas.pop(); //remove do final 
frutas.shift();  // remove do inicio 
frutas.splice(0,1); // posição e quantia >> retira elemento da posição , ex: 0 

frutas.splice (0,0,'morango'); // adiciona elemento na posição, ex: 0


console.log(frutas);
console.log (frutas.length);

module.exports = array 
