// usaPFDAO.mjs

import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs'; 
import Endereco from './pessoas/Endereco.js'; 
import Telefone from './pessoas/Telefone.js'; 

const pf = new PF();
pf.setNome('Maria');
pf.setEmail('maria@ifb.edu.br');
pf.setCPF('111.222.333-44');

const endPF = new Endereco();
endPF.setLogradouro('SQN 300');
endPF.setCep('98765-432');
pf.setEndereco(endPF);

const fonePF = new Telefone();
fonePF.setDdd('61');
fonePF.setNumero('98765-4321');
pf.addTelefone(fonePF);

const pfdao = new PFDAO(pf);

console.log("--- PFDAO ---");
var jsonPF = pfdao.toJSON();
pfdao.saveJSON();

console.log('JSON gerado (toJSON):', jsonPF);
console.log('JSON em string (saveJSON):', JSON.stringify(jsonPF));
console.log('JSON recuperado (recoveryJSON):', pfdao.recoveryJSON());
console.log("-------------");