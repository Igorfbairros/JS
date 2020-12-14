// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A
// [a, b, c] = [b, c, a]

// console.log(a, b, c);

// const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // const [one, two, three, ...rest] = num; 
// const [one, ,three, ,five, ,seven, ...rest] = num; 
// console.log(one, three, five, seven);
// console.log(rest);





// console.log(num[0]);
// const firstnum = num[0];
// console.log(firstnum);

// LIsta type 2
//                     0          1         2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(numeros[1][2]);
//Desestruturação
const [,[,,obj]] = numeros   // não recomendado
console.log(obj);

const [list0, list1, list3] = numeros
console.log(list3[2]);

