const form = document.querySelector('#form');

const produtos = [];

form.addEventListener('submit', function(e) {
e.preventDefault();

const inputCodigo = e.target.querySelector('#codigo');
const inputNomeCliente = e.target.querySelector('#cliente');
const inputNomeVendedor = e.target.querySelector('#vendedor');
const inputProduto = e.target.querySelector('#produto');
const inputValorProduto = e.target.querySelector('#valor-produto');
const inputQuantidade = e.target.querySelector('#quantidade');

const codigo = inputCodigo.value;
const nomeCliente = inputNomeCliente.value;
const nomeVendedor = inputNomeVendedor.value;
const produto = inputProduto.value;
const valorProduto = inputValorProduto.value;
const quantidade = inputQuantidade.value;



if (codigo === '') {
    return setResultado('Digite o código', false);
}

if (nomeCliente === '' || nomeCliente == Number) {
    return setResultado('Digite um nome válido', false);
}

if (nomeVendedor === '' || nomeVendedor == Number) {
    return setResultado('Digite um nome para vendedor válido', false);
}

if (produto === '' || produto == Number) {
    return setResultado('Digite um nome para produto válido', false);
}

if (valorProduto === '') {
    return setResultado('Digite o valor', false);
}

if (quantidade === '') {
    return setResultado('Digite a quantidade', false);
}

const valorTotal = calcularValorTotal(valorProduto, quantidade);
const verificaTotal = verificaValorTotal(valorTotal);



const msg = `Código: <strong> ${codigo} </strong> <p> Nome do cliente: <strong> ${nomeCliente} </strong> </p> <p> Nome do vendedor: <strong> ${nomeVendedor} </strong> </p>
<p>  Produto: <strong> ${produto} </strong> </p> <p> Valor do produto: <strong> ${valorProduto} </strong> </p> <p> Quantidade: <strong> ${quantidade} </strong> </p> <p> Valor total: <strong> ${valorTotal} </strong> </p> <p> A Comissão do vendedor é de: <strong> ${verificaTotal} </strong> </p>`;

setResultado(msg, true);

produtos.push({
    codigo: codigo,
    nomeCliente: nomeCliente,
    nomeVendedor: nomeVendedor,
    produto: produto,
    valorProduto: valorProduto,
    quantidade: quantidade,
    valorTotal: valorTotal,
    verificaTotal: verificaTotal,
    
});
    
console.log(produtos);


function calcularValorTotal(valorProduto, quantidade) {
    const valorTotal = valorProduto * quantidade;
    return valorTotal.toFixed(2);
}

function verificaValorTotal(valorTotal) {
    const verifica = ['1.5%', '3%', '6%', '8%', '10%'];

    if(valorTotal >= 4999.99) {
        return verifica[4];
    }

    if(valorTotal >= 3499.99) {
        return verifica[3];
    }

    if(valorTotal >= 1999.99) {
        return verifica[2];
    }

    if(valorTotal >= 800) {
        return verifica[1];
    }

    if(valorTotal < 800) {
        return verifica[0];
    }

}

function criaP() {
    const p = document.createElement('p');
    return p;
}









function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-erro');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}




});