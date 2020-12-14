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



const pessoa = {
     nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação 

// const { nome = '', sobrenome, idade } = pessoa;
// console.log(nome, sobrenome)

//Reatribuição mudando o nome de key
// const { nome: n = '', sobrenome, idade } = pessoa;
// console.log(n, sobrenome)

// const { endereco: {rua, numero}, endereco} = pessoa;
// console.log(rua, numero, endereco)

const { nome, ...resto}= pessoa;
console.log(nome, resto)