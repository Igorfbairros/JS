//EX 1
try{
    console.log(nãoExisto);
}catch(erro){
    console.log('Não existo .... não é uma boa paratica mostrar parao cliente'); /// Não 
    console.log(erro)
}

// EX 2
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw ('X e Y precisam ser números.');
    }
    return x + y;
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))

}catch(error){
    console.log(error);
    
}