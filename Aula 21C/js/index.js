function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const servicos = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const cliente = form.querySelector('.cliente');
        const numeroNota = form.querySelector('.numero-nota');
        const telefone = form.querySelector('.telefone');
        const descricao = form.querySelector('.descricao');
        const valor = form.querySelector('.valor');

       servicos.push({
        cliente: cliente.value,
        numeroNota: numeroNota.value,
        telefone: telefone.value,
        descricao: descricao.value,
        valor: valor.value,

        

       })

       

       resultado.innerHTML += `<p> Cliente: <strong> ${cliente.value} </strong> </p>`;
       resultado.innerHTML += `<p> Número da nota: <strong> ${numeroNota.value} </strong> </p>`;
       resultado.innerHTML += `<p> Telefone: <strong> ${telefone.value} </strong> </p>`;
       resultado.innerHTML += `<p> Descrição: <strong> ${descricao.value} </strong> </p>`;
       resultado.innerHTML += `<p> Valor: <strong> ${valor.value} </strong> </p>`;

       console.log(servicos);

    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();