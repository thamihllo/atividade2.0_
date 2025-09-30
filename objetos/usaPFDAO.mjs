// usaPFDAO.mjs

import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs'; 
import Endereco from './pessoas/Endereco.js'; 
import Telefone from './pessoas/Telefone.js'; 

const pf = new PF();
pf.setNome('Gustavo');
pf.setEmail('Gustavo@ifb.edu.br');
pf.setCPF('234.567.888-99');

const endPF = new Endereco();
endPF.setLogradouro('QNM 30');
endPF.setCep('98395-6280');
pf.setEndereco(endPF);

const fonePF = new Telefone();
fonePF.setDdd('61');
fonePF.setNumero('99923-3427');
pf.addTelefone(fonePF);

const pfdao = new PFDAO(pf);

console.log("--- PFDAO ---");
var jsonPF = pfdao.toJSON();
pfdao.saveJSON();

console.log('JSON gerado (toJSON):', jsonPF);
console.log('JSON em string (saveJSON):', JSON.stringify(jsonPF));
console.log('JSON recuperado (recoveryJSON):', pfdao.recoveryJSON());
console.log("-------------");


