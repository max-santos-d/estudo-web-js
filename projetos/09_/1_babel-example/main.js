class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    };
};

const nome = 'Pedro'; 
const sobrenome = 'Pereira';
const obj = {nome}; 
const novoObj = {...obj}; 

const pessoa = new Pessoa(nome, sobrenome)

console.log(novoObj);
console.log(pessoa);
