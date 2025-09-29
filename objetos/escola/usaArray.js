const Aluno = require('./Aluno');

const obj1 = new Aluno();
obj1.setNome('Dantas');
obj1.setMatricula('20250001');
console.log(obj1);

const obj2 = new Aluno();
obj2.setNome('Maria');
obj2.setMatricula('20250002');
console.log(obj2);

var objetos = [];
objetos.push(obj1);
objetos.push(obj2);

console.log(objetos);
console.log(objetos[0].getNome());
