/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint,symbol) - Valor 
*/
// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra Coisa';
// console.log(a, b);

/*
 Referência (mutavel) - array, object, function
*/

// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log( a, b)

// b.pop();
// console.log(a, b);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio',

};

const b = {...a};

a.nome = "João"
// b.nome = "João" // culd be too
console.log(a);
console.log(b);
