// // const date = new Date(0);
// // console.log(date.toString());
// // const date = new Date();
// // console.log(date.toString());

// const data = new Date('2019-04-20 20:20:59');
// const data2 = new Date(1607630718372);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0- Domingo, 6 - Sabado
// console.log(data.toString());
// console.log(data2.toString());
// console.log(Date.now());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}
const data = new Date();
