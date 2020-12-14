function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

// let contador = 1;
function recebeEventoForm(evento){
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura  = form.querySelector('.altura');
    console.log(nome.value, sobrenome.value, peso.value, altura.value)

    pessoas.push({
        nome: nome.value, 
        sobrenome: sobrenome.value, 
        peso: peso.value, 
        altura: altura.value
    })
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
    `${peso.value} ${altura.value}</p>`;
    
    // evento.preventDefault(); // only show what is happen 
    // console.log(`Form não foram enviados ${contador}`);
    // contador++;
    
}


    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();