function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const excluir = document.querySelector('.excluir');

    const produtos = [];

    

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const codigo = form.querySelector('.codigo-produto');
        const cliente = form.querySelector('.cliente');
        const nomeProduto = form.querySelector('.nome-produto');
        const valorProduto = form.querySelector('.valor-produto');
        const quantidade = form.querySelector('.quantidade');

        const valorTotal = valorProduto.value * quantidade.value;

        produtos.push({
            codigo: codigo.value,
            cliente: cliente.value,
            nomeProduto: nomeProduto.value,
            valorProduto: valorProduto.value,
            quantidade: quantidade.value,
            valorTotal: valorTotal.valueOf(Number),
        })

        produtos.sort((a, b) => b.valorProduto - a.valorProduto); 

    

        console.log(produtos);
        
        resultado.innerHTML += `<p> Código do produto: <strong> ${codigo.value} </strong> </p>`;
        resultado.innerHTML += `<p> Cliente: <strong> ${cliente.value} </strong> </p>`;
        resultado.innerHTML += `<p> Nome do produto: <strong> ${nomeProduto.value} </strong> </p>`;
        resultado.innerHTML += `<p> Valor do produto: <strong> ${valorProduto.value} </strong> </p>`;
        resultado.innerHTML += `<p> Quantidade: <strong> ${quantidade.value} </strong> </p>`;
        resultado.innerHTML += `<p> Valor total: <strong> ${valorTotal.valueOf(parseFloat)} </strong> </p>`

    }



    function recebeEventoExcluir(evento) {
        evento.preventDefault();
        
        produtos.shift();

        console.log(produtos);
        
        

    }

    

    form.addEventListener('submit', recebeEventoForm);
    excluir.addEventListener('submit', recebeEventoExcluir);
    
}

meuEscopo();