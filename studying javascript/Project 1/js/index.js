const pessoa = [{
    nome: 'Leonardo',
    sobrenome: 'Martins',
    idade: '22',
    endereco: {
        rua: 'Wolfram Metzler',
        bairro: 'Rubem Berta',
        cidade: 'Porto Alegre',
    },
    hobbies: ['Jogar', 'Ler', 'Assistir'],
}, 
    {
        nome: 'Andreia',
        sobrenome: 'Martins',
        idade: '22',
        endereco: {
            rua: 'Wolfram Metzler',
            bairro: 'Rubem Berta',
            cidade: 'Porto Alegre',
        },
        hobbies: ['Jogar', 'Ler', 'Assistir'],  
    }];


//Busca elementos de um array usando for Of

for(endereco of pessoa) {
    console.log(pessoa[0].endereco.bairro);
}

//Busca elementos de um array usando forEach

pessoa.forEach(endereco => {
    console.log(pessoa[0].endereco.rua)
});

//Transforma elementos de um array em outro array usando map

const pessoaEndereco = pessoa.map(function(pessoa) {
    return pessoa.endereco;
});

console.log(pessoaEndereco);

//Filtra elementos de um array criando outro array usando filter;

const pessoaNome = pessoa.filter(function(pessoa) {
    return pessoa.nome === 'Leonardo';
}).map(function(pessoa) {
    return pessoa.nome;
});

console.log(pessoaNome);

//Constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiane object
const person1 = new Person('Leonardo', 'Martins', '23');

const person2 = new Person('Andreia', 'Ramona', '53');

console.log(person2, person1);

//Class
class classPerson {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person1.getFullName());
console.log(person2.getFullName());

//Manipulação de DOM - Selecionando coisas do DOM

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.my-form'));


//Multiple elements
console.log(document.querySelectorAll('h1'));

//Manipulando elementos

const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> Hello </h1>';

const btn = document.querySelector('.btn');

btn.style.backgroundColor = 'red';