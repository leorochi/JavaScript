const usuarios = [
    {nome: 'Leonardo', sobrenome: 'Martins', id: 5},
    {nome: 'Mário', sobrenome: 'Martins', id: 3},
    {nome: 'Andreia', sobrenome: 'Martins', id: 1},
    {nome: 'Maya', sobrenome: 'Martins', id: 6},
]

function getUsers() {
    let resultado = '';
    usuarios.forEach(usuarios => resultado += `<li> ${usuarios.nome} ${usuarios.sobrenome} ${usuarios.id}`);
    document.body.innerHTML = resultado;
}

getUsers();

function createPost(users) {
    return new Promise((resolve, reject) => {
        usuarios.push(users);

        const error = false;

        if(!error) {
            resolve();
        } else {
            reject('Erro');
        }
    })
}



createPost({nome: 'Iracema', sobrenome: 'Fernandes', id: 6})
.then(getUsers);
