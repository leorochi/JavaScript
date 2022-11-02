const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNumero1 = e.target.querySelector('.numero1');
    

    const numero1 = inputNumero1.value;


    for (var i = 1; i <= 10; i++ ) {
        var tabuada = numero1 * i;
        var msg = `Tabuada: ${numero1} * ${i} = ${tabuada}`;
        setResultado(msg);
    }

 


    function setResultado(msg) {
        const resultado = document.querySelector('.resultado');
        const p = document.createElement('p');
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

});