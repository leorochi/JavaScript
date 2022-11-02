const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
e.preventDefault();

const inputValorDolar = e.target.querySelector('.valor_dolar');
const inputQuantidade = e.target.querySelector('.quantidade');
const inputValorCotacao = e.target.querySelector('.valor_cotacao');

const valorDolar = inputValorDolar.valueOf(Number);
const quantidade = inputQuantidade.valueOf(Number);
const valorCotacao = inputValorCotacao.valueOf(Number);

const totalDolar = valorDolar.value * quantidade.value;
const conversao = totalDolar * valorCotacao.value;

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

const msg = `Conversão: ${conversao}`;

setResultado(msg);
console.log(msg);

})