const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


const section = document.querySelector('.container');
const div = document.createElement('div');


for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

section.appendChild(div);
























/*const section = document.querySelector('.container');

const div = document.createElement('div');
section.appendChild(div);

const p = document.createElement('p');
p.innerHTML = 'Frase 1';
div.appendChild(p);

const div2 = document.createElement('div');
div2.innerHTML = 'Frase 2';
div.appendChild(div2);

const footer = document.createElement('footer');
footer.innerHTML = 'Frase 3';   
div.appendChild(footer);

const section2 = document.createElement('section');
section2.innerHTML = 'Frase 4';
div.appendChild(section2);*/


