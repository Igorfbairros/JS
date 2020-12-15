// write a function that receives two numbers and returns the greater of them 

// function greaterNum(min, max){
//     if(min > max){
//         console.log( `${min} e maior que ${max}`)
//     }
//     if(max > min){
//         console.log( `${max} e maior que ${min}`)
//     }if(max === min){
//         console.log('Os Numeros são iguais ')
    

//     }
// }

// greaterNum(30, 20)
// greaterNum(30, 30)
// greaterNum(30, 20)

// function maior(x, y){
//     const num = x > y ? x : y ;
//     console.log(num)
// }
// maior(30, 50)
// maior( 50, 30)


// Solução Professor

const greater = (x, y) => {
    return x > y ? x : y;
}
console.log(greater(20, 40));