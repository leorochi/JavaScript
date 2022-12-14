const search = document.querySelector('.search');
const form = document.querySelector('.form');
const inputAdd = document.querySelector('.add-items');
const items = document.querySelector('.items');
const liItems = document.querySelector('.item-list')

search.addEventListener('keyup', filterItems);
form.addEventListener('submit', addItems);
items.addEventListener('click', removeItems);
items.addEventListener('click', checkItems);


function filterItems(e) {
    var text = e.target.value.toLowerCase();
    
    var itemsLi = items.querySelectorAll('li');

    Array.from(itemsLi).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != 1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function addItems(e) {
    e.preventDefault();

    
    const addInput = inputAdd.value;

    const addLi = document.createElement('li');
    addLi.appendChild(document.createTextNode(addInput));
    items.appendChild(addLi);

    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn-delete');
    btn.textContent = 'X';
    addLi.appendChild(btn);

    const btnCheck = document.createElement('button');
    btnCheck.setAttribute('class', 'btn-check');
    btnCheck.textContent = 'OK';
    addLi.appendChild(btnCheck);

}

function removeItems(e) {
    if(e.target.classList.contains('btn-delete')) {
        var li = e.target.parentElement;
        items.removeChild(li);
    }
}

function checkItems(e) {
    if(e.target.classList.contains('btn-check')) {
        var li = e.target.parentElement;
        li.style.backgroundColor = 'red';
    }
}

