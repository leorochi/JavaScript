const nome = prompt("Digite o produto: ");
const quantidade = Number(prompt("Digite a quantidade do produto: "));
const valor = Number(prompt("Digite o valor do produto: "))

let total = quantidade * valor;

const produtos = [];

const nomeProduto = document.getElementById('nome-produto');
const quantidadeProduto = document.getElementById('quantidade');
const valorProduto = document.getElementById('valor-produto');
const valorTotal = document.getElementById('valor-total')
const texto = document.getElementById('texto');

nomeProduto.innerHTML = nome;
quantidadeProduto.innerHTML = quantidade;
valorProduto.innerHTML = valor;
valorTotal.innerHTML = total;

produtos.push({
    nome: nome,
    quantidade: quantidade,
    valor: valor,
    total: total,
})

console.log(produtos);





texto.innerHTML += `<p> Quantas letras tem o nome do produto? <strong> ${nome.length} </strong> letras`;
texto.innerHTML += `<p> Nome do produto com letras maiúsculas: <strong> ${nome.toUpperCase()} </strong> </p>`;
texto.innerHTML += `<p> Nome do produto com a primeira letra maiúscula em cada palavra: <strong> ${nome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase()})} </strong> </p>`;
texto.innerHTML += `<p> Nome do produto com a primeira letra minúscula em cada palavra e o resto maiúscula: <strong> ${nome.toUpperCase().replace(/(?:^|\s)\S/g, function(b) { return b.toLowerCase()})} </strong> </p>`;
texto.innerHTML += `<p> Trocando a letra A pelo número 4: <strong> ${nome.replace(/a/g, 4)} </strong> </p>`; // o método replace é o responsável pela substituição de STRING, o g(global) trasforma todas as letras indicada das palavras.
texto.innerHTML += `<p> Palavra invertida: <strong> ${nome.split("").reverse().join("")} </strong> </p>`; // método split() para retornar um novo array, método reverse() para inverter o array recém-criado, método join() para unir todos os elementos do array em uma string.



