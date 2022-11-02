// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'USUÁRIO VIP' : 'USUÁRIO NORMAL';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);