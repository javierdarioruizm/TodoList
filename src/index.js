
import './styles.css';

// Así importamos las clases Todo y TodoList de forma individual
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

// Pero como hemos importado y exportado las clases en el archivo index.js del directorio classes, pordemo importarlas en una sola linea que hacer referencia a ese archivo index.js

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
// Cuando el argumento que envíamos es el único que hay podemos factorizarlo así:

// todoList.todos.forEach(crearTodoHtml);


// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);


// console.log(todoList);


// crearTodoHtml(tarea);

// Funcionamiento del localStorage del navegador web

// localStorage.setItem('mi-key', 'ABC123');
// // Se guarda la clave y el valor pero siempre en formato string

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

//  Con este comando, se elimina el contenido del localStorage