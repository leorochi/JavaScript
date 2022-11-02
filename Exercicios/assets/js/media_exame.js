const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
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

    if(media >=7) {
        return setResultado("Aprovado");
    } 

    if(media <7) {
        const exame = document.querySelector('.exame');
        exame.innerHTML = '';
        const form2 = document.createElement('form');
        form2.classList.add('form2');
        exame.appendChild(form2);
        const label = document.createElement('label');
        label.innerHTML = "Informe a nota de exame:";
        form2.appendChild(label);
        const input = document.createElement("input");
        input.classList.add('notaexame');
        form2.appendChild(input);
        const btn = document.createElement('button');
        btn.innerHTML = "Enviar";
        form2.appendChild(btn);

        
    }

    const msg = `Reprovado`;

    setResultado(msg);

    function setResultado(msg) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    const exame = document.querySelector('.exame');

    exame.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputNotaExame = e.target.querySelector('.notaexame');

        const notaExame = inputNotaExame.valueOf(Number);

        const mediaFinal = (+media + +notaExame.value) / 2

        if(mediaFinal >= 5) {
            return setResultado(`Nota final: ${mediaFinal.toFixed(2)} <p>  <strong> Aprovado em exame. </strong>`);
        }

        if(mediaFinal <=5) {
            return setResultado(`Nota final: ${mediaFinal.toFixed(2)} <p>  <strong> Reprovado em exame. </strong>`);
        }

        const msg = `${mediaFinal}`;

        setResultado(msg);
        console.log(msg);
    
        

        function setResultado(msg) {
        const resultado = document.querySelector('.resultado-final');
        resultado.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
    
    


    })

    
    


})