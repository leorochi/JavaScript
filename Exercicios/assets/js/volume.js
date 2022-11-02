const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
e.preventDefault();

const inputComprimento = e.target.querySelector('.comprimento');
const inputAltura = e.target.querySelector('.altura');
const inputLargura = e.target.querySelector('.largura');

const comprimento = inputComprimento.valueOf(Number);
const altura = inputAltura.valueOf(Number);
const largura = inputLargura.valueOf(Number);

const volume = comprimento.value * largura.value * altura.value;

const msg = `Volume da caixa: ${volume}`;

setResultado(msg);
console.log(msg);


function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

})