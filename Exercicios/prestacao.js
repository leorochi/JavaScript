const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function(e) {
e.preventDefault();

const inputValor = e.target.querySelector('.valor');
const inputTaxa = e.target.querySelector('.taxa');
const inputTempo = e.target.querySelector('.tempo');

const valor = inputValor.valueOf(Number);
const taxa = inputTaxa.valueOf(Number);
const tempo = inputTempo.valueOf(Number);

const prestacao = (+valor.value + (+valor.value * (taxa.value / 100) * tempo.value));

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


const msg = `<p> Valor: ${valor.value} </p> <p> Taxa: ${taxa.value} </p> <p> Tempo de atraso: ${tempo.value} </p> <p> Valor da prestação atrasada: ${prestacao} </p>`

console.log(setResultado(msg));
setResultado(msg);
console.log(Number.isNaN(valor));


});