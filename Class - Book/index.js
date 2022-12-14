//Class Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
}

// UI Class: Handle UI Tasks

class UI {
    static displayBooks() {
        const storedBooks = [{
            title: 'Book one',
            author: 'John doe',
            isbn: '1234'
        },
    {
        title: 'Book two',
        author: 'Jane doe',
        isbn: '123456'
    }];

    const books = storedBooks;

    books.forEach(book => {
        UI.addBookToList(book);
    });

    
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title} </td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td> <button class="btn-delete"> X </button>`

        
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.isbn').value = '';
    }

}
   

//Event Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event add a books
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const ISBN = document.querySelector('.isbn').value;

    //Instatiante book

    const book = new Book(title, author, ISBN);

    if(title === '') {
        return msgValidation();
    } else if(author === '') {
        return msgValidation();
    } else if(ISBN === '') {
        return msgValidation();
    } else {
        UI.addBookToList(book);
        msgSucess();
    };

    UI.clearFields();

    
    console.log(book);
    
});


const list = document.querySelector('#book-list');

list.addEventListener('click', removeBook);

function removeBook(e) {
    if(e.target.classList.contains('btn-delete')) {
        var tr = e.target.parentElement;
        list.removeChild(tr);

    }
}

function msgValidation(){
    const divValidation = document.querySelector('.validation');
    divValidation.innerHTML = '';
    const p = document.createElement('p');
    p.setAttribute('class', 'msg');
    p.innerHTML = 'Por favor, Digite o campo';
    divValidation.appendChild(p);
    p.style.backgroundColor = 'red';
}

function msgSucess() {
    const divValidation = document.querySelector('.validation');
    divValidation.innerHTML = '';
    const p = document.createElement('p');
    p.setAttribute('class', 'msg');
    p.innerHTML = 'Livro adicionado com sucesso';
    divValidation.appendChild(p);
    p.style.backgroundColor = 'green';
}

const search = document.querySelector('.search');

search.addEventListener('keyup', filterBook)

function filterBook(e){
const text = e.target.value.toLowerCase();
const trBooks = list.querySelectorAll('tr');

Array.from(trBooks).forEach(function(item) {
    const nameBooks = item.firstChild.textContent;
    if(nameBooks.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});



}







