// try{
//     console.log(); // (a) non-existent variable
//     console.log('Abri o arquivo');
//     console.log('Manipulei o Arquivo');
//     console.log('Fechei o arquivo');
// }catch(e){
//     console.log('Tratamento de Erro')
// }finally{
//     console.log('FINALLY: Eu sempre sou executado');
// }

function returnHouer(date){
    if (date && !(date instanceof Date)){
        throw new TypeError(`Esperando instacia de Date.`);

    }if(!date){
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });

}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = returnHouer();
    console.log(hora);

}catch(e){
    //tratar erro
    //console.log(e);
}finally{
    console.log('Tenha um bom dia')
}
