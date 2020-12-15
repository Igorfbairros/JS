// const name = 'Luiz';
// let i = 0;

// while(i < name.length){
//     console.log(name[i]);
//     i++
// }

// console.log('Segue a vida...');


function random(min, max){
 const r = Math.random() * (max - min) + min;
 return Math.floor(r);

}

const min = 1;
const max = 50;
const rand = 10;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

// Do while. Executed first and after is checked
do{
    
    console.log(rand);

}while(rand !== 10);