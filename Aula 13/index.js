let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let num1 = 1; // 1B
let num2 = 2; // 2C
let num3 = 3; // 3A

[varA, num1, num2, num3, varB, varC] = [varB, num1, num3,varC, num2 , varA];

console.log(num1, varA, num2, num3, varB, varC);
