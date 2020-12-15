 const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let numero of num){
    
//     if(numero === 2){
//         console.log('Pulei o numero 2')
//         continue;
//     }

//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado, saindo....')
//         break;
//     }

   
// }

// (continue) to next interection
// (brack)  and out function


let i = 0;
while(i < num.length){
    let numero = num[i];
    if(numero === 2){
        console.log('Pulei o numero 2')
        i++;
        continue;
    }

    console.log(numero);
    if(numero === 7){
        console.log('7 encontrado, saindo....')
        i++;
        break;
    }

    i++;

}

