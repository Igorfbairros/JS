function showHouer(){
    let date = new Date();

    return date.toLocaleTimeString('pf-BR', {
        hour12: false
    });
}

const time = setInterval (function(){
    console.log(showHouer());

    
}, 1000);

setTimeout(function(){
    clearInterval(time);
}, 3000)

setTimeout(function(){
    console.log('Olá Mundo !');
}, 5000)