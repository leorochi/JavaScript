const form = document.querySelector('#my-form');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const telefone = document.querySelector('#telefone');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const rg = document.querySelector('#rg');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const usuarios = document.querySelector('#users');
const listaUsuarios = document.querySelector('#list');


form.addEventListener('submit', onSubmit);
const pessoas = [];


function onSubmit(e) {
e.preventDefault();
validaCampo();





}

function validaCampo() {
    if(nome.value === '') {
        return erroCampo('Preencha o nome');
    } else if(sobrenome.value === '') {
        return erroCampo('Preencha o sobrenome');
    } else if(telefone.value === '') {
        return erroCampo('Preencha o telefone');
    } else if(email.value === '') {
        return erroCampo('Preencha o e-mail');
    } else if(cpf.value === '') {
        return erroCampo('Preencha o CPF');
    } else if(rg.value === '') {
        return erroCampo('Preencha o RG');
    } else {
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            telefone: telefone.value,
            email: email.value,
            cpf: cpf.value,
            rg: rg.value,

        });

        
        mostraUsuarios(organizaUsuarios());

        console.log(pessoas);
    }

function erroCampo(elemento) {
    msg.classList.add('error');
    msg.innerHTML = elemento;
}

}

function mostraUsuarios(mensagem) {
    const p = document.createElement('div');
    p.classList.add('usuarios')
    p.innerHTML = mensagem;
    listaUsuarios.appendChild(p);
}

function organizaUsuarios() {
    return      `<p> Nome: ${nome.value} </p>
                 <p> Sobrenome: ${sobrenome.value} </p>
                 <p> Telefone: ${telefone.value} </p>
                 <p> E-mail: ${email.value} </p>
                 <p> CPF: ${cpf.value} </p>
                 <p> RG: ${rg.value} </p>`;
                 
}

