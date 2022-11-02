const alunos = ['Luiza', 'Giovana', 'Leonardo'];

//adicionando um elemento no Array
alunos.push('Pedro');

//adicionando um elemento no início do Array
alunos.unshift('Flávio');

//excluindo o último elemento do Array
alunos.pop();

//excluindo o primeiro elemento do Array
alunos.shift();

//exclui o elemento mas ainda ocupa espaço no Array
delete alunos[0];

//busca um elemento até um determinado índice
//console.log(alunos.slice(0,3));

//verifica se é Array
//console.log(alunos instanceof Array);