const nome = prompt("Digite o nome do cliente: ");
const idade = Number(prompt("Digite a idade do cliente: "));
const salario = Number(prompt("Digite o salário do cliente: "));
const texto = document.getElementById('texto');

const nomeCliente = document.getElementById('nome-cliente');
const idadeCliente = document.getElementById('idade-cliente');
const salarioCliente = document.getElementById('salario-cliente'); 

nomeCliente.innerHTML = nome;
idadeCliente.innerHTML = idade;
salarioCliente.innerHTML = salario;

texto.innerHTML += `<p> Quantas letras tem o nome do cliente? <strong> ${nome.length} </strong> letras </p>`;
texto.innerHTML += `<p> Nome do cliente com letras maiúsculas: <strong> ${nome.toUpperCase(nome)} </strong> </p>`;
texto.innerHTML += `<p> Quantas palavras tem o nome do cliente: <strong> ${nome.split(' ')} </strong> </p>`;
texto.innerHTML += `<p> Ano que o cliente nasceu: <strong> ${2022 - idade} </strong> </p>`;
texto.innerHTML += `<p> Salário com casa decimal <strong> ${salario.toFixed(2)} </strong> </p>`;
texto.innerHTML += `<p> Salário arredondado para cima: <strong> ${Math.ceil(salario)} </strong> </p>`;
texto.innerHTML += `<p> Salário arredondado para baixo: <strong> ${Math.floor(salario)} </strong> </p>`;
