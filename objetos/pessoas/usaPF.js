const PF = require ('./PF')

const PF = new PF();

if (PF.setCPF("12345678900")) {
  console.log("CPF salvo:", PF.getCPF());
} else {
  console.log("CPF inválido!");
}
