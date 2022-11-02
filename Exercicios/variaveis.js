const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
e.preventDefault();

const inputNumero1 = e.target.querySelector('.numero1');
const inputNumero2 = e.target.querySelector('.numero2');
const inputNumero3 = e.target.querySelector('.numero3');
const inputNumero4 = e.target.querySelector('.numero4');

const numero1 = inputNumero1.valueOf(Number);
const numero2 = inputNumero2.valueOf(Number);
const numero3 = inputNumero3.valueOf(Number);
const numero4 = inputNumero4.valueOf(Number);


const soma1 = (+numero1.value + +numero2.value);
const soma2 = (+numero1.value + +numero3.value);
const soma3 = (+numero1.value + +numero4.value);

const multi1 = (numero1.value * numero2.value);
const multi2 = (numero1.value * numero3.value);
const multi3 = (numero1.value * numero4.value);

const soma4 = (+numero2.value + +numero3.value);
const soma5 = (+numero2.value + +numero4.value);

const multi4 = (numero2.value * numero3.value);
const multi5 = (numero2.value * numero4.value);

const soma6 = (+numero3.value + +numero4.value);
const multi6 = (numero3.value * numero4.value);

   



const msg = `<p> Resultados da adições do número 1 com os demais números: <strong> ${soma1}, ${soma2}, ${soma3} </strong> </p> <p> Resultado das multiplicaçoes do número 1 com os demais números: <strong> ${multi1}, ${multi2}, ${multi3} </strong> </p> <p> Resultados da adições do número 2 com os demais números: <strong> ${soma4}, ${soma5} </strong> </p> 
<p> Resultado das multiplicaçoes do número 2 com os demais números: <strong> ${multi4}, ${multi5} </strong> </p>
<p> Resultado da adição do numero 3 com o número 4: <strong> ${soma6} </strong> </p>
<p> Resultado da multiplicaçao do numero 3 com o número 4: <strong> ${multi6} </strong> </p>`;

setResultado(msg);




function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}





})