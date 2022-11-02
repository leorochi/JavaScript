function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Leonardo', 'Martins', 23);
const pessoa2 = criaPessoa('Andreia', 'Martins', 24);
const pessoa3 = criaPessoa('Mário', 'Martins', 25);

console.log(pessoa1.nome);