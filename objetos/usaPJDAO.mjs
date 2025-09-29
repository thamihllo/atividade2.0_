import PJ from './pessoas/PJ.js'; // 02 // Importa a classe Pessoa Jurídica
import PJDAO from './pessoas/DAOs/PJDAO.mjs'; // 03 // Importa a DAO que manipula objetos PJ

import Endereco from './pessoas/Endereco.js'; // 04 // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js'; // 05 // Importa a classe Telefone
import IE from './pessoas/IE/IEclss.js'; // 06 // Importa a classe Inscrição Estadual (IE)

const pj = new PJ();
pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');

const end = new Endereco();
end.setLogradouro('QNM 40');
end.setCep('12345-678');
pj.setEndereco(end);

const fone = new Telefone();
fone.setDdd('61');
fone.setNumero('99999-8888');
pj.addTelefone(fone);

const fone2 = new Telefone();
fone2.setDdd('62');
fone2.setNumero('99999-7777');
pj.addTelefone(fone2);

const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());
pj.setIE(ie);

const pjdao = new PJDAO(pj);

var x = pjdao.toJSON();
pjdao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(pjdao.recoveryJSON());


//PF DAO CRIAR O MESMO ESQUEMA COM O PF. USA PF E PF  
//node ./objetos/usaPJDAO.mjs