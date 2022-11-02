const produtos = ['Refrigerante', 'Vodka', 'Suco', 'Frango', 'Carne','Linguiça'];
const novoArray = [];
const corte = 3;

for (var i = 0; i < produtos.length; i = i + corte) {
    novoArray.push(produtos.slice(i, i + corte));
}

const bebidas = novoArray[0];
const alimentos = novoArray[1];

console.log(bebidas);

const [refri, vodka] = bebidas;
const [frango, carne] = alimentos;

console.log(refri, carne);


for(let i = 0; i < produtos.length; i++) {
    console.log(`Índice ${i}:`, produtos[i]);
}