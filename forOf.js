const nomes = ['Luiz', 'Otavio', 'herique'];

for(let i = 0; i<nomes.length; i++ ){
    console.log(nomes[i]);
}
console.log('########');

for(let i in nomes){
    console.log(nomes[i]);
}
console.log('########');

for(let valor of nomes){
    console.log(valor);
}
console.log('########');

nomes.forEach(function(valor, indice, array){
    console.log (`${indice}) ${valor}: ${array}`)
})

const pessoa = {
    nome:'Luiz',
    sobrenome:'Otavio'

}
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}
