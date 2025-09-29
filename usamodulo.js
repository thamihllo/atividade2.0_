
// comando que importa as funções somar () e subtrair () para serem reutilizadas 

const calculadora = require ('./bib/criamodulo.js');
var x = 10, y = 30;
console.log(calculadora.somar(x,y));
console.log(calculadora.subtrair(y,x));


let a = 50, b = 2;
console.log(calculadora.dividir(y,x));
console.log(calculadora.multiplicar(y,x));



//bib2 novo modulo '../bib/criamodulo.js ' 


