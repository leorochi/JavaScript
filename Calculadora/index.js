const tela = document.querySelector('.tela');
const numeros = document.querySelectorAll('[class*=btn]')
const operadores = document.querySelectorAll('[class*=operador]')


numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

let novoNumero = true;
let operador;
let numeroAnterior;

const operadorPendente = () => operador != undefined;

function calcular() {
    if(operadorPendente()) {
        const numeroAtual = parseFloat(tela.textContent);
         novoNumero = true;
        if(operador === '+') {
            console.log(numeroAnterior);
            console.log(numeroAtual);
            atualizaTela(numeroAnterior + numeroAtual);
        } else if(operador === '-') {
            atualizaTela(numeroAnterior - numeroAtual);
        } else if(operador === '*') {
            atualizaTela(numeroAnterior * numeroAtual);
        } else if(operador ==='/') {
            atualizaTela(numeroAnterior / numeroAtual);
        }
        
    }
}

function atualizaTela(texto) {
    if(novoNumero) {
        tela.textContent = texto;
        novoNumero = false;
    } else {
        tela.textContent += texto;
    }
}


function inserirNumero(evento) {
    atualizaTela(evento.target.textContent);
}

function selecionaOperador(evento) {
    calcular();
    if(!novoNumero) {
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(tela.textContent);
        
    }
}

operadores.forEach(operador => operador.addEventListener('click', selecionaOperador));



