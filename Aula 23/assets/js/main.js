function meuEscopo() {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');


const array = []

function calculaImc(evento) {
    evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    let imc = peso.value / (altura.value * altura.value);

    if(altura.value === '') {
        resultado.innerHTML += `<p> Digite a altura </p>`
    }

    if(peso.value === '') {
        resultado.innerHTML += `<p> Digite o peso </p>`
    }

    

    if(imc < 18.5) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Abaixo do peso) </p>`;
    } else if (imc >= 18 && imc <= 24.9) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Peso normal) </p>`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Sobrepeso) </p>`;
    } else if (imc >= 30 && imc <= 34.9 ) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else if (imc > 40 ) {
        resultado.innerHTML += `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
    } else {
        resultado.innerHTML += `<p> Algo deu errado, verifique novamente.`
    }

    array.push({
        peso: peso.value,
        altura: altura.value,
        imc: imc.toFixed(2),
    })

    array.sort((a,b) => a.imb - b.imc);

    console.log(array);

}

form.addEventListener('submit', calculaImc)



}

meuEscopo();