// function soma( x = 1, y = 1){
//     const resultado = x + y;
//     return resultado;

// }

// const resultado = soma(4, 2);
// console.log(resultado)

const raiz = function(n){  // Classica
    return n ** 0.5;
}
// Arrow Function 
const raiz = (n) => {  // Arrow function 
    return n ** 0.5;
}
const raiz = (n) => n ** 0.5; /// Arrow function one line 

const raiz = n => n ** 0.5; // if has only one parameter don't need ()

console.log(raiz(5))
console.log(raiz(10))
console.log(raiz(25))
console.log(raiz(5))