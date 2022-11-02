const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
e.preventDefault();

const inputNumero1 = e.target.querySelector('.numero1');
const inputNumero2 = e.target.querySelector('.numero2');

const numero1 = inputNumero1.valueOf(Number);
const numero2 = inputNumero2.valueOf(Number);

const diferenca = numero1.value - numero2.value;
const quadrado = diferenca**4;

const msg = `<p> Diferença dos dois números: ${diferenca} </p>
             <p> Quadrado da diferença: ${quadrado} </p>`;

setResultado(msg);
console.log(msg);

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.style.backgroundColor = 'lightblue';
    p.style.padding = '10px';
    p.innerHTML = msg;
    resultado.appendChild(p);
}

})