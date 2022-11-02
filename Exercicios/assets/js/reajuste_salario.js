const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
e.preventDefault();

const inputSalario = e.target.querySelector('.salario');
const inputReajuste = e.target.querySelector('.reajuste');

const salario = inputSalario.valueOf(Number);
const reajuste = inputReajuste.valueOf(Number);


const percentual = (salario.value / 100) * reajuste.value;
const novoSalario = +salario.value + +percentual;

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

const msg = `<p> Salário: ${salario.value} </p> <p> Reajuste: ${reajuste.value} </p> <p> Percentual: ${percentual} </p> <p> Novo salário: ${novoSalario}`;


setResultado(msg);
console.log(msg);


})