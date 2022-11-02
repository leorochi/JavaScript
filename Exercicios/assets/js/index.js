const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e) {
    console.log(iniciaContagem());
});

pausar.addEventListener('click', function(e) {

});

zerar.addEventListener('click', function(e) {

});

function iniciaContagem() {
    const relogio = document.querySelector('.relogio'); 
    const timer = setInterval(() => {
        console.log(relogio);
    }, 1000);
    
    



}