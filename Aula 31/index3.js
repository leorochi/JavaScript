function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

//Exemplo

function criaNumeroAleatorio(numAleatorio) {
    return function(n) {
        return n * numAleatorio;
    };
};

const multiplica = criaNumeroAleatorio(Math.floor(Math.random() * 10));

console.log(multiplica(2));