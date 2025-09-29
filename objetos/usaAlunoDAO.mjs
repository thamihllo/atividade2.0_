// objetos/usaAlunoDAO.mjs

import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const aluno = new Aluno();
aluno.setNome('João da Mata');
aluno.setEmail('joao@aluno.ifb.edu.br');
aluno.setMatricula('20231TADS007');

const endAluno = new Endereco();
endAluno.setLogradouro('Estrada Parque Sul');
endAluno.setCep('54321-000');
aluno.setEndereco(endAluno);

const foneAluno = new Telefone();
foneAluno.setDdd('61');
foneAluno.setNumero('91234-5678');
aluno.addTelefone(foneAluno);

const alunoDAO = new AlunoDAO(aluno);

console.log("--- Execução: usaAlunoDAO.mjs ---");
var jsonAluno = alunoDAO.toJSON();
alunoDAO.saveJSON();

console.log('JSON gerado (toJSON):', jsonAluno);
console.log('\nJSON em string (saveJSON/store):', JSON.stringify(jsonAluno));
console.log('\nJSON recuperado (recoveryJSON):', alunoDAO.recoveryJSON());
console.log("---------------------------------");