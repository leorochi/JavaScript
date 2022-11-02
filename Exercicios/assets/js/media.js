const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
e.preventDefault();


    const inputNota1 = e.target.querySelector('.nota1');
    const inputNota2 = e.target.querySelector('.nota2');
    const inputNota3 = e.target.querySelector('.nota3');
    const inputNota4 = e.target.querySelector('.nota4');

    const nota1 = inputNota1.valueOf(Number);
    const nota2 = inputNota2.valueOf(Number);
    const nota3 = inputNota3.valueOf(Number);
    const nota4 = inputNota4.valueOf(Number);

    const media = (+nota1.value + +nota2.value + +nota3.value + +nota4.value) / 4

    


    function validaMedia(media) {
        if(media <5) {
            return "Reprovado";
        } else {
            return "Aprovado";
        }
    }

    function setResultado(msg) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    const msg = `<p> Nota1: ${nota1.value} </p>
                 <p> Nota2: ${nota2.value} </p>
                 <p> Nota3: ${nota3.value} </p>
                 <p> Nota4: ${nota4.value} </p>
                 <p> Média: ${media}, o aluno está ${validaMedia(media)}`;
    
    setResultado(msg, true);

})