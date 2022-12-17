const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputNumero = document.querySelector('#numero');

    const numero = inputNumero.value;


    const resposta = document.querySelector('#resposta');

    resposta.innerHTML = `Número: ${numero} <br> 
                          Vizinho Anterior: ${numero - 1} <br>
                          Vizinho Próximo: ${+numero + +1}`;

})