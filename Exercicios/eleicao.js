const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
e.preventDefault()

const inputVotosA = e.target.querySelector('.votos-a');
const inputVotosB = e.target.querySelector('.votos-b');
const inputVotosC = e.target.querySelector('.votos-c');
const inputVotoBranco = e.target.querySelector('.votos-brancos');
const inputVotoNulo = e.target.querySelector('.votos-nulos')

const votosA = inputVotosA.valueOf(Number);
const votosB = inputVotosB.valueOf(Number);
const votosC = inputVotosC.valueOf(Number);
const votosNulos = inputVotoNulo.valueOf(Number);
const votosBrancos = inputVotoBranco.valueOf(Number);


const totalVotosValidos = +votosA.value + +votosB.value + +votosC.value;
const totalBrancosNulos = +votosNulos.value + +votosBrancos.value;
const totalEleitores = +totalVotosValidos + +totalBrancosNulos;

const totalPercentual = (totalVotosValidos * 100) / totalEleitores;
const percentualVotosA = (votosA.value * 100) / totalEleitores;
const percentualVotosB = (votosB.value * 100) / totalEleitores;
const percentualVotosC = (votosC.value * 100) / totalEleitores;
const percentualVotosNulosBrancos = (totalBrancosNulos * 100) / totalEleitores;

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

const msg = `<p> Votos A: ${votosA.value} </p> 
             <p> Votos B: ${votosB.value} </p>
             <p> Votos C: ${votosC.value} </p>
             <p> Votos Nulos: ${votosNulos.value} </p>
             <p> Votos Brancos: ${votosBrancos.value} </p>
             <p> Total de votos válidos: ${totalVotosValidos} </p>
             <p> Total de votos nulos e brancos: ${totalBrancosNulos} </p>
             <p> Total de eleitores: ${totalEleitores} </p>
             <p> Percentual dos vótos válidos em relação aos eleitores: ${totalPercentual.toFixed(2)}% </p>
             <p> Percentual dos votos A: ${percentualVotosA.toFixed(2)}% </p>
             <p> Percentual dos votos B: ${percentualVotosB.toFixed(2)}% </p>
             <p> Percentual dos votos C: ${percentualVotosC.toFixed(2)}% </p>
             <p> Percentual dos votos nulos e brancos: ${percentualVotosNulosBrancos.toFixed(2)}% </p> `

setResultado(msg);
console.log(msg)

})