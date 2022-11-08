// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const filter = document.querySelector('#filter-select');

let oldInputValue;


// Funções
function saveTodo(text) {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();

}

function toggleForms() {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
}

function updateTodo(text) {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3');

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    });

}

// Eventos
todoForm.addEventListener('submit', function(e) {

e.preventDefault();

const inputValue = todoInput.value;

if(inputValue) {
   saveTodo(inputValue); 
}

});

filter.addEventListener('click', filterTodo);

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        switch(e.target) {
            case 'all':
                todo.style.display = 'flex';
            break;
            case 'done':
                if(todo.classList.contains('done')) {
                    todo.style.display = 'flex';
            }   else {
                    todo.style.display = 'none';
            }
    }
})


}

document.addEventListener('click', function(e) {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if(targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done');
    }

    if(targetEl.classList.contains('remove-todo')) {
        parentEl.remove();
    }

    if(targetEl.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener('click', function(e) {
    e.preventDefault();

    toggleForms();

});

editForm.addEventListener('submit', function(e) {

e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue) {
        updateTodo(editInputValue);
    }

    toggleForms();
})

