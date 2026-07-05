export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false; // All todos start unfinished
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}