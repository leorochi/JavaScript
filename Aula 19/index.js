 // MODELO 1 (PADRÃO)

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

function subtracao(x, y) {
    const resultado = x - y;
    return resultado;
}

function multiplicacao(x, y) {
    const resultado = x * y;
    return resultado;
}

function divisao(x, y) {
    const resultado = x / y;
    return resultado;
}  

//   MODELO 2:

const soma = (x, y) => x + y;

const subtracao = (x, y) => x - y;

const multiplicacao = (x, y) => x * y;

const divisao = (x, y) => x / y;

console.log(soma(2,2));
console.log(subtracao(10,5));
console.log(multiplicacao(5,5));
console.log(divisao(10,2));
