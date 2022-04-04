import { Todo } from "./todo.class";



export class TodoList {

    constructor() {


        // this.todos = [];
        this.cargarLocalStorage(); // Aquí carga los datos que haya en el localStorage


    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {    // doble igual porque compara un string con un número
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado)
        // De esta forma guardamos en el array los no completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {
        // if (localStorage.getItem('todo')) {

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     // Al ser un string lo que hay en localStorage tenemos que reconvertirlo a tipo objeto

        // } else {
        //     this.todos = [];
        // }

        // Podemos convertir este if a operador ternario


        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        // Aquí con el método map de arrays retorna un nuevo array con los objetos mutados. Y usamos la propiedad estática fromJson de la clase Todo que hemos importado arriba. 

        // Aquí también podemos simplificar esta línea, ya que tenemos el mismo argumento que envíamos.

        // this.todos = this.todos.map(Todo.fromJson);


    }


}