function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const times = []

function recebeEventoForm(evento) {
    evento.preventDefault();

    const time1 = form.querySelector('.time-1');
    const time2 = form.querySelector('.time-2');
    const time3 = form.querySelector('.time-3');
    const time4 = form.querySelector('.time-4');
    const time5 = form.querySelector('.time-5');

    times.push({
        time1: time1.value,
        time2: time2.value,
        time3: time3.value,
        time4: time4.value,
        time5: time5.value,
    })

    console.log(times);

    resultado.innerHTML += `<p> Time 1:  <strong> ${time1.value} </strong> </p>`
    resultado.innerHTML += `<p> Time 2:  <strong> ${time2.value} </strong> </p>`
    resultado.innerHTML += `<p> Time 3:  <strong> ${time3.value} </strong> </p>`
    resultado.innerHTML += `<p> Time 4:  <strong> ${time4.value} </strong> </p>`
    resultado.innerHTML += `<p> Time 5:  <strong> ${time5.value} </strong> </p>`
}

form.addEventListener('submit', recebeEventoForm)

}

meuEscopo();