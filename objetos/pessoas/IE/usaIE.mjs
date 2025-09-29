// 01. usaIE.mjs (ou .js com "type":"module" no package.json)
import { IEfunc, IEclss, IEjson } from './IE.mjs'; 
import PJ from '../PJ.js';



const agora = new Date();
const pj = new PJ(); 
pj.setCNPJ('12.345.678/0001-99'); 


const ieC = new IEclss(); 
ieC.setNumero('111'); 
ieC.setEstado('SP'); 
ieC.setDataRegistro(agora); 
ieC.setPJ(pj); 


console.log(`(Classe) Número: ${ieC.getNumero()}`); 
console.log(`(Classe) Estado: ${ieC.getEstado()}`); 
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`); 
console.log(''); 


const ieF = IEfunc(); 
ieF.setNumero('222'); 
ieF.setEstado('RJ'); 
ieF.setDataRegistro(agora); 
ieF.setPJ(pj); 


console.log(`(Factory) Número: ${ieF.getNumero()}`); 
console.log(`(Factory) Estado: ${ieF.getEstado()}`); 
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`); 
console.log(''); 


IEjson.setNumero('333'); 
IEjson.setEstado('MG'); 
IEjson.setDataRegistro(agora); 
IEjson.setPJ(pj); 


console.log(`(JSON) Número: ${IEjson.getNumero()}`); 
console.log(`(JSON) Estado: ${IEjson.getEstado()}`); 
console.log(`(JSON) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`); 
console.log(''); 


console.log( 
`Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` + 
`Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` + 
`JSON: ${IEjson.getNumero()}-${IEjson.getEstado()}` 
); 

// node ./objetos/pessoas/IE/usaIE.mjs