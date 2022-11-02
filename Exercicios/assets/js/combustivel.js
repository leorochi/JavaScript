const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();



    const inputTempo = e.target.querySelector('.tempo');
    const inputVelocidade = e.target.querySelector('.velocidade');

    const tempo = inputTempo.value;
    const velocidade = inputVelocidade.value;

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

    function distanciaPercorrida(tempo, velocidade) {
        return tempo * velocidade;
    }

    /*function litrosUsados(distancia, quantidadeLitros = 12) {
        return distancia * quantidadeLitros;
    }*/

    const litrosUsados = distanciaPercorrida(tempo, velocidade) / 12

    const msg = `<p> Velocidade média: ${velocidade} </p> <p> Tempo gasto na viagem: ${tempo} </p> <p> Distância percorrida: ${distanciaPercorrida(tempo, velocidade)} </p> <p> Quantidade de litros usados na viagem: ${(litrosUsados.toFixed(2))} </p>`;

    
    setResultado(msg);
    console.log(setResultado(msg)); 


})