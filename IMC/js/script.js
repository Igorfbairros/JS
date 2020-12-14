// Capturar evento de submit do formulario 

const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const saida = document.getElementById('output')


function imc(peso, altura){
    let imc = peso / (altura * altura)
}
function calculoImc(imc){
    if(imc < 18.5){
        return `Abaixo do peso`
        
    }else if(imc < 24.9){
        return `Peso Normal`
    }else if(imc > 25 && imc < 29.9){
        return `Sobrepeso`
    }else if(imc > 30  && imc < 34.9){
        return `Obsidade grau 1`

    }else if(imc > 35 && imc < 39.9){
        return `Obsidade grau 2`
    }else if(imc > 40){
        return `Obsidade grau 3`
    }else{
        return `Este numero não e valido.`
    }

    
}

saida.innerHTML += 