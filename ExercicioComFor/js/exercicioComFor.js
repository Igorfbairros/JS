const elementos = [
    {tag:'p', texto: 'Qualquer coisa que voccê quiser !!'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'section', texto: 'Frase 4'},
    {tag:'footer', texto: 'Frase 3'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    // console.log(elementos[i].tag);
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    // let textoCriado = document.createTextNode(texto)
    div.appendChild(tagCriada); //textoCriado

    
}

container.appendChild(div)

