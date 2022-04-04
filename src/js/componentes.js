import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias en el HTML


const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''} >
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
			</div >
    <input class="edit" value="Create a TodoMVC template">
    </li>`;


    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;


}


// Eventos


// Evento para añadir una tarea

// El evento 'keyup' es cuando se suelta la tecla en el input

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';

    }

});

// Evento para marcar como completada una tarea y para eliminarla si queremos

divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;  // sacamos el <li>
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {    // click en el chech
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {
        // hay que borrar el todo si hacemos click en el aspa de la derecha 
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);

    }

    console.log(todoList);

});

// Evento para borrar todas las tareas

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        // Vamos del último al primero
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }


    }


});


// Evento para filtrar las tareas

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) {   // Así contralamos el undefined
        return;
    }

    anchorFiltros.forEach(elemento => elemento.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }

    }

});


