const conversor = document.querySelector('.conversor');


conversor.addEventListener('input',  conversorDolarReal);
conversor.addEventListener('input', conversorRealDolar);
conversor.addEventListener('input', conversorCelciusFahrenheit);
conversor.addEventListener('input', conversorFahrenheitCelsius);


// funções

function conversorDolarReal(e) {
    const dolarReal = document.querySelector('.dolar-real');
    const resultado = document.querySelector('.resultado1');
    const conversorValue = conversor.value;
    const calculo = conversorValue * 5.47;
    resultado.innerHTML = calculo.toFixed(2);
    dolarReal.appendChild(resultado);
    


}

function conversorRealDolar(e) {
    const realDolar = document.querySelector('.real-dolar');
    const resultado = document.querySelector('.resultado2');
    const conversorValue = conversor.value;
    const calculo = conversorValue / 5.47;
    resultado.innerHTML = calculo.toFixed(2);
    realDolar.appendChild(resultado);
}

function conversorCelciusFahrenheit() {
    const cf = document.querySelector('.celsius-fahrenheit');
    const resultado = document.querySelector('.resultado3');
    const conversorValue = conversor.value;
    const calculo = conversorValue * 9 / 5 + 32;
    resultado.innerHTML = calculo.toFixed(2);
    cf.appendChild(resultado);
}

function conversorFahrenheitCelsius() {
    const fc = document.querySelector('.fahrenheit-celsius');
    const resultado = document.querySelector('.resultado4');
    const conversorValue = conversor.value;
    const calculo = ((conversorValue - 32) * 5) / 9
    resultado.innerHTML = calculo.toFixed(2);
    fc.appendChild(resultado);
}