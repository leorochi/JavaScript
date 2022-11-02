let num1 = 1; // number

let num2 = 2.5; // number

let num3 = 0.7;
let num4 = 0.1;


num3 = Number(num3.toFixed(2));
console.log(num3.toFixed(2));
console.log(Number.isInteger(num3));

console.log(num1.toString() + num2); // transforma pra stringconsole.log(num1.toString(2)); // transforma pra número binário

console.log(num1.toFixed(2)); // transforma o número em 2 casas decimais

console.log(Number.isInteger(num1)); // chega se o número é inteiro (retorna true or false)

let temp = num1 * 'Ola';

console.log(Number.isNaN(temp)); // verifica se é NaN (retorna true or false)

