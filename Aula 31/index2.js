function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador ==='+') acumulador += numero;
        if(operador ==='-') acumulador -= numero;
        if(operador ==='*') acumulador /= numero;
        if(operador ==='/') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);

const contaDado = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador ==='+') acumulador += numero;
        if(operador ==='-') acumulador -= numero;
        if(operador ==='*') acumulador /= numero;
        if(operador ==='/') acumulador *= numero;
    }

    console.log(acumulador);
}

contaDado('-', 1, 20, 30, 40, 50);

const arrowConta = (operador, acumulador, ...numeros) => {
    for(let numero of numeros) {
        if(operador ==='+') acumulador += numero;
        if(operador ==='-') acumulador -= numero;
        if(operador ==='*') acumulador *= numero;
        if(operador ==='/') acumulador /= numero;
    }

    console.log(acumulador);
}

arrowConta('*', 1, 20, 30, 40, 50);