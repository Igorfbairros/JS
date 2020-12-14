const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda', 
    idade: '29',

    fala(){
        console.log(`${this.nome} ${this.sobrenome} idade ${this.idade} está falando oi...`)
    },

    incrementaIdade(){
        ++this.idade;
    }

};

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()

pessoa.incrementaIdade()
pessoa.fala()
