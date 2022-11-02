const form = document.querySelector('.form');
const pJoao = document.querySelector('.pJoao');

form.addEventListener('submit', function (e) {
e.preventDefault();

const inputNome = e.target.querySelector('.nome');

const nome = inputNome.value;


if(nome === 'João') {
    return setResultadoJoao();
} else if (nome === 'Claudio') {
    return setResultadoClaudio();
} else if(nome === 'Márcio') {
    return setResultadoMarcio();

} else {
    return setValida();
}


function setResultadoJoao() {
    const pJoao = document.querySelector('.pJoao');
    pJoao.innerHTML = '';
    const negrito = document.createElement('strong');
    const txt = document.createTextNode('João');
    negrito.appendChild(txt);
    pJoao.appendChild(negrito);

    }

function setResultadoClaudio() {
    const pClaudio = document.querySelector('.pClaudio');
    pClaudio.innerHTML = '';
    const negrito = document.createElement('strong');
    const txt = document.createTextNode('Claudio');
    negrito.appendChild(txt);
    pClaudio.appendChild(negrito);

}

function setResultadoMarcio() {
    const pMarcio = document.querySelector('.pMarcio');
    pMarcio.innerHTML = '';
    const negrito = document.createElement('strong');
    const txt = document.createTextNode('Márcio');
    negrito.appendChild(txt);
    pMarcio.appendChild(negrito);

}

function setValida() {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Digite um dos três nomes!';
    resultado.appendChild(p);
}
    

})


