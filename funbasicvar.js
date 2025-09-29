// objetivo principal de uma função = definir um bloco de codigo reutilizável 

//function <nome> ( <parametros> )
function soma (x,y) // recebe dados como parametros 

{
let soma = x + y; // busquem desclarar apenas variaveis LET nas functions 
return soma; // retornar a informação 
}

//chamar a função 
var print;

var print1 = soma (soma(4,7),3); console.log(print1);
var print2 = soma (10,soma(print1,5)); console.log(print2);
console.log (soma(print1,print2));



const subtrair = function(x,y) { return x - y; }
console.log(subtrair(3,5)); 
//arrow function
const dividir = (y,x) => { return x / y; } 
console.log(dividir(3,5));

const multiplicar = (x,y) => { return x * y; }
console.log(multiplicar(3,5));
  
const subtrair 












