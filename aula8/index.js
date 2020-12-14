const nome = `Luiz gustavo`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let imc = peso / (alturaEmCm * alturaEmCm);
let anoDeNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} com idade de ${idade} altura de ${alturaEmCm}  e pesa ${peso}kg com Imc${imc.toFixed(2)}. e nasceu no ano ${anoDeNascimento}`)
