
const form = document.querySelector('#form');

form.addEventListener('submit', sendForm);


function sendForm(e) {
    e.preventDefault();
    const inputName = document.querySelector('#name');
    const inputUrl = document.querySelector('#url');

    const name = inputName.value;
    const url = inputUrl.value;

    if(inputName.value === '' || inputUrl.value === '' ) {
        alert('Por favor, digite o(s) campo(s)');
    } 

    

    const msg = `${name}`;

    

    setMsg(msg, url);
  

}

function setMsg(msg, url) {
    const output = document.querySelector('#output');
    const criaDiv = document.createElement('div');
    
    criaDiv.setAttribute('class', 'list');
    output.appendChild(criaDiv);
    
    const li = document.createElement('li');
    li.innerHTML = msg;
    criaDiv.appendChild(li);

    const a = document.createElement('a');
    a.setAttribute('class', 'site');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    
    li.appendChild(a);
    
    const btnVisit = document.createElement('button');
    btnVisit.setAttribute('class', 'visit');
    btnVisit.textContent = 'Visit';
    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'delete');
    btnDelete.textContent = 'Delete';

    a.appendChild(btnVisit);
    li.appendChild(btnDelete);

    btnDelete.addEventListener('click', remove);

    function remove() {
        const elParent = document.querySelector('.list');
        elParent.remove();
    }
    
}




