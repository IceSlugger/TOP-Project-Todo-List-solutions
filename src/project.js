export class Project {
  constructor(name) {
    this.name = name;
    this.todos = []; // This array will hold our Todo objects
  }

  addTodo(todoObject) {
    this.todos.push(todoObject);
  }

  removeTodo(todoTitle) {
    this.todos = this.todos.filter(todo => todo.title !== todoTitle);
  }
}