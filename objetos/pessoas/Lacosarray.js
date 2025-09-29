// ./objetos/pessoas/Lacosarray.js

let frutas = ["pytaia", "manga", "laranja", "pessego", "uva"];
console.log('for');
for(let t = 0; t < frutas.length; t++) 
{
  console.log(frutas[t]);
}

console.log('while:')
let b = 0;
while (b < frutas.length){
  console.log(`${frutas[b]} na posição ${b}`);
   b++
}

console.log("do...While:");
let k = 0;

do {
  console.log(`na posição ${k}: ${frutas[k]}`);
  k++;
} while (k < frutas.length);

console.log("for...of:");
for (let fruta of frutas) {
  console.log(`${fruta}`);
}

/// semana que vem mostrar o for off do array