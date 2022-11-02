const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');

const produtos = [];

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputCodigo = e.target.querySelector('#codigo');
    const inputNomeCliente = e.target.querySelector('#cliente');
    const inputNomeVendedor = e.target.querySelector('#vendedor');
    const inputProduto = e.target.querySelector('#produto');
    const inputValorProduto = e.target.querySelector('#valor-produto');
    const inputQuantidade = e.target.querySelector('#quantidade');

    const codigo = inputCodigo.value;
    const cliente = inputNomeCliente.value;
    const vendedor = inputNomeVendedor.value;
    const produto = inputProduto.value;
    const valorProduto = inputValorProduto.value;
    const quantidade = inputQuantidade.value;

    if (codigo === '') {
        return setResultado('Digite o código');
    }

    if (cliente === '') {
        return setResultado('Digite o nome do cliente');
    }

    if (vendedor === '') {
        return setResultado('Digite o nome do vendedor');
    }

    if (produto === '') {
        return setResultado('Digite o nome do produto');
    }

    if (valorProduto === '') {
        return setResultado('Digite o valor do produto');
    }

    if (quantidade === '') {
        return setResultado('Digite a  quantidade');
    }

    const valorTotal = calculaValorTotal(valorProduto, quantidade);
    const verificaTotal = verificaValorTotal(valorTotal);
    
   

    const msg = `Código: <strong>  ${codigo} </strong>   
    ${criaPConteudo(`Nome do cliente: <strong> ${cliente} </strong>` )} 
    ${criaPConteudo(`Nome do vendedor: <strong> ${vendedor} </strong>`)}
    ${criaPConteudo(`Nome do produto: <strong> ${produto} </strong>`)}
    ${criaPConteudo(`Valor do produto: <strong> ${valorProduto} </strong>`)}
    ${criaPConteudo(`Quantidade: <strong> ${quantidade} </strong>`)} 
    ${criaPConteudo(`Valor total: <strong> ${valorTotal} </strong>`)}
    ${criaPConteudo(`Quantidade: <strong> ${verificaTotal} </strong>`)}`


    

    produtos.push({
        codigo: codigo,
        cliente: cliente,
        vendedor: vendedor,
        produto: produto,
        valorProduto: valorProduto,
        quantidade: quantidade,
        valorTotal: valorTotal,
        verificaTotal: verificaTotal,
    })

    setResultado(msg, true);

    console.log(produtos);

    
    

    function calculaValorTotal(valorProduto, quantidade) {
        return valorProduto * quantidade;
    }

    function verificaValorTotal(valorTotal) {
        const verifica = ['1.5%', '3%', '6%', '8%', '10%'];

        if (valorTotal >= 4999.99) {
            return verifica[4];
        }

        if (valorTotal >= 3499.99) {
            return verifica[3];
        }

        if (valorTotal >= 1999.99) {
            return verifica[2];
        }

        if (valorTotal >= 800) {
            return verifica[1];
        }

        if (valorTotal < 800) {
            return verifica[0];
        }
    }




    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function criaPConteudo(conteudo) {
        return `<p> ${conteudo} </p>`
    }

    


    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('paragrafo-erro');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);

    }
})