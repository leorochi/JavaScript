//TIPOS DE FUNÇÕES

//Declaração de função (Function Hoisting)

function falaOi() {
    console.log('Oi');
}
falaOi();

//First-class objects (Objetos de primeira classe)
//Function expression

const souUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    console.log('Vou executar essa função');
    funcao();
}

executaFuncao(souUmDado);

//Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
};
arrowFunction();

//Exemplo

const numero1 = 3;
const numero2 = 2;

const somaNumeros = () => {
    const resultado = numero1 + numero2;
    return resultado;
}

console.log(somaNumeros());
