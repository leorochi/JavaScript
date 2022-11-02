const elementos = [
    {tag: 'header', texto: ''},
    {tag: 'h1', texto: 'Loja do Léo'},
    {tag: 'h2', texto: 'Venha conhecer a Loja do Léo'},
    {tag: 'p', texto: 'Na nossa loja temos diversos produtos com desconto, aproveite!'},
    {tag: 'p', texto: 'Aceitamos todos os tipos de pagamento, cartão, pix e demais.'},
    {tag: 'nav', texto: ''},
    {tag: 'ul', texto: ''},
    {tag: 'li', texto: 'QUEM SOMOS'},
    {tag: 'li', texto: 'PRODUTOS'},
    {tag: 'li', texto: 'CURIOSIODADES'},
    {tag: 'li', texto: 'FALE CONOSCO'},
    {tag: 'article', texto: ''},
    {tag: 'h3', texto: 'Especiais'},
    {tag: 'p', texto: 'Veja os produtos especiais da loja'},
    {tag: 'footer', texto: ''},
    {tag: 'p', texto: 'Obrigado por visitar a loja'},
]

const section = document.querySelector('.container');


for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);


    tagCriada.appendChild(textoCriado);
    section.appendChild(tagCriada);
}



