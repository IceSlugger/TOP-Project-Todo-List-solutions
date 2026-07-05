import './style.css';
import { Todo } from './todo.js';
import { Project } from './project.js';
import { renderApp } from './displayController.js';

let myProjects = [];
let currentProjectIndex = 0;

export function saveToLocalStorage() {
  localStorage.setItem('myTodoListProjects', JSON.stringify(myProjects));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('myTodoListProjects');
  
  if (savedData) {
    const rawProjects = JSON.parse(savedData);
    myProjects = rawProjects.map(rawProj => {
      const reconstructedProject = new Project(rawProj.name);
      rawProj.todos.forEach(rawTodo => {
        const reconstructedTodo = new Todo(
          rawTodo.title,
          rawTodo.description,
          rawTodo.dueDate,
          rawTodo.priority
        );
        reconstructedTodo.complete = rawTodo.complete;
        reconstructedProject.addTodo(reconstructedTodo);
      });
      return reconstructedProject;
    });
  } else {
    const defaultProject = new Project('Personal List');
    defaultProject.addTodo(new Todo('Buy Groceries', 'Milk, Eggs, Bread', '2026-07-10', 'High'));
    myProjects.push(defaultProject);

    const workProject = new Project('Work Tasks');
    workProject.addTodo(new Todo('Finish Odin Project', 'Complete the Todo List architecture', '2026-07-15', 'Critical'));
    myProjects.push(workProject);
    
    saveToLocalStorage();
  }
}

function handleProjectSelection(index) {
  currentProjectIndex = index;
  initializeApp();
}

function handleProjectCreation(name) {
  const newProj = new Project(name);
  myProjects.push(newProj);
  currentProjectIndex = myProjects.length - 1; 
  saveToLocalStorage();
  initializeApp();
}

// 1. ADD THE PROJECT DELETION LOGIC HERE 👇
function handleProjectDeletion(index) {
  // Remove the project from our array
  myProjects.splice(index, 1);

  // Safety recalculation: If we just deleted the active project or the last item,
  // shift our active view index backward so we don't look at blank space
  if (currentProjectIndex >= myProjects.length) {
    currentProjectIndex = myProjects.length - 1;
  }
  if (currentProjectIndex < 0) currentProjectIndex = 0;

  saveToLocalStorage();
  initializeApp();
}

function handleTodoCreation(title, desc, date, priority) {
  const newTodo = new Todo(title, desc, date, priority);
  myProjects[currentProjectIndex].addTodo(newTodo);
  saveToLocalStorage();
  initializeApp();
}

function handleTodoToggle(todoIndex) {
  const targetTodo = myProjects[currentProjectIndex].todos[todoIndex];
  targetTodo.complete = !targetTodo.complete;
  saveToLocalStorage();
  initializeApp();
}

function handleTodoDelete(todoIndex) {
  myProjects[currentProjectIndex].todos.splice(todoIndex, 1);
  saveToLocalStorage();
  initializeApp();
}

function initializeApp() {
  renderApp(
    myProjects, 
    currentProjectIndex, 
    handleProjectSelection, 
    handleProjectCreation, 
    handleTodoCreation,
    handleTodoToggle,
    handleTodoDelete,
    handleProjectDeletion // 👈 Passed down to the UI
  );
}

loadFromLocalStorage();
initializeApp();