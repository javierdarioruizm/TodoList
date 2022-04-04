

export class Todo {

    static fromJson(id, tarea, completado, creado) {
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    // Esta propiedad estática la creamos para recuperar los objetos de localStorage y convertirlos de nuevo en instancias. La usaremos en el método cargarLocalStorage


    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}