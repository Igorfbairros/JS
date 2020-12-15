// Write a function that receive a number and return options to follow :
// The number is divisible by 3 = Fizz
// The number is divisible by 5 = Buzz
// The number is divisible by 3 and 5 = FizzBuzz 
// If number is no divisible by 3 and 5 = return itself
// Function shold be between 0 and 100 

// function numbers(num)  {
//     if(typeof num !== 'number'){
//         return num;

//     }if(num < 0 || num > 100){
//         return 'Numero invalido';
//     }if(num % 5 === 0 && num % 3 === 0){
//         return ' FizzBuzz'
//     }if(num % 3 === 0) {
//         return `Fizz`;
//     }if(num % 5 === 0){
//         return `Buzz`
//    }
//    return num;
// }

// for(let i = 0; i <= 150; i++){
//     console.log(i, numbers(i))
// }


//Answers professor
function fizzBuzz(num){
    if(typeof num !== 'number') return num;
    if(num % 5  === 0 && num % 3 === 0) return 'fizzBuzz';
    if( num % 3 === 0) return 'Fizz';
    if(num % 5  === 0 ) return 'Buzz';
    return num;
}
for(let i = 0; i <= 150; i++){
     console.log(i, fizzBuzz(i))
}
