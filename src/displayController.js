export function renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete) {
  
  // --- 1. ENSURE APP HEADER BANNER EXISTS ---
  if (!document.getElementById('app-header')) {
    const banner = document.createElement('header');
    banner.id = 'app-header';
    
    const bannerIcon = document.createElement('span');
    bannerIcon.textContent = '📋 \u00A0 ToDoers List';
    banner.appendChild(bannerIcon);
    
    document.body.insertBefore(banner, document.body.firstChild);
  }

  const projectListUI = document.getElementById('project-list');
  const contentDiv = document.getElementById('content');

  projectListUI.innerHTML = '';
  contentDiv.innerHTML = '';

  // Ensure heading label sits atop the sidebar projects list
  if (!document.getElementById('sidebar-label')) {
    const label = document.createElement('div');
    label.id = 'sidebar-label';
    label.className = 'sidebar-heading';
    label.textContent = 'Projects';
    projectListUI.parentNode.insertBefore(label, projectListUI);
  }

  // --- 2. RENDER SIDEBAR PROJECTS ---
  projectsArray.forEach((project, index) => {
    const projectLi = document.createElement('li');
    if (index === activeProjectIndex) {
      projectLi.className = 'active-project';
    }

    const projectText = document.createElement('span');
    projectText.textContent = '#  ' + project.name;
    projectText.style.flex = '1';
    projectLi.appendChild(projectText);

    projectLi.addEventListener('click', () => {
      onProjectSelect(index);
    });

    if (projectsArray.length > 1) {
      const deleteProjBtn = document.createElement('button');
      deleteProjBtn.textContent = '×';
      deleteProjBtn.style.cssText = 'background:none; border:none; color:inherit; font-size:1.2rem; cursor:pointer; font-weight:bold; opacity: 0.6; padding: 0 4px;';
      
      deleteProjBtn.addEventListener('mouseenter', () => deleteProjBtn.style.opacity = '1');
      deleteProjBtn.addEventListener('mouseleave', () => deleteProjBtn.style.opacity = '0.6');
      
      deleteProjBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('Remove project "' + project.name + '" and all its internal tasks?')) {
          onProjectDelete(index);
        }
      });

      projectLi.appendChild(deleteProjBtn);
    }

    projectListUI.appendChild(projectLi);
  });

  // --- 3. INLINE MODULAR PROJECT ADD FORM ---
  const newProjectBtn = document.getElementById('new-project-btn');
  const clearBtn = newProjectBtn.cloneNode(true);
  newProjectBtn.parentNode.replaceChild(clearBtn, newProjectBtn);
  
  clearBtn.style.cssText = 'background:none; border:none; color:#db4c3f; text-align:left; font-weight:600; font-size:0.95rem; cursor:pointer; padding: 10px 12px; border-radius:6px; display:block; width:100%;';
  clearBtn.textContent = '+ Add Project';
  clearBtn.addEventListener('mouseenter', () => clearBtn.style.backgroundColor = '#eeeeee');
  clearBtn.addEventListener('mouseleave', () => clearBtn.style.backgroundColor = 'transparent');

  clearBtn.addEventListener('click', () => {
    clearBtn.style.display = 'none';
    
    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = 'display:flex; flex-direction:column; gap:8px; padding:10px 12px;';

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'new-project-input';
    inputField.placeholder = 'Project name...';
    inputField.style.cssText = 'width:100%; box-sizing:border-box;';

    const btnGroup = document.createElement('div');
    btnGroup.style.cssText = 'display:flex; gap:6px;';

    const saveBtn = document.createElement('button');
    saveBtn.id = 'save-project-btn';
    saveBtn.textContent = 'Add';
    saveBtn.style.cssText = 'padding:6px 12px; background-color:#db4c3f; color:white; border:none; border-radius:4px; font-weight:600; cursor:pointer; font-size:0.85rem;';

    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancel-project-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.cssText = 'padding:6px 12px; background-color:transparent; border:none; color:#555; font-weight:600; cursor:pointer; font-size:0.85rem;';

    btnGroup.appendChild(saveBtn);
    btnGroup.appendChild(cancelBtn);
    inputContainer.appendChild(inputField);
    inputContainer.appendChild(btnGroup);
    clearBtn.parentNode.appendChild(inputContainer);

    inputField.focus();

    const submitProject = () => {
      const name = inputField.value.trim();
      if (name !== "") onProjectCreate(name);
      else renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete);
    };

    saveBtn.addEventListener('click', submitProject);
    cancelBtn.addEventListener('click', () => {
      renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete);
    });
    inputField.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitProject(); });
  });

  // --- 4. MAIN HEADER & ELEVATED TASK FORM ---
  const activeProject = projectsArray[activeProjectIndex];
  
  const projectTitle = document.createElement('h1');
  projectTitle.textContent = activeProject.name;
  contentDiv.appendChild(projectTitle);

  const taskFormContainer = document.createElement('div');
  taskFormContainer.style.marginBottom = '20px';
  
  const showFormBtn = document.createElement('button');
  showFormBtn.id = 'show-task-form-btn';
  showFormBtn.style.cssText = 'background:none; border:none; color:#db4c3f; font-weight:600; font-size:0.95rem; cursor:pointer; display:flex; align-items:center; gap:8px; padding:6px 0;';
  
  const plusSpan = document.createElement('span');
  plusSpan.style.cssText = 'font-size:1.3rem; line-height:1;';
  plusSpan.textContent = '+';
  showFormBtn.appendChild(plusSpan);
  showFormBtn.appendChild(document.createTextNode(' Add Task'));
  
  const todoForm = document.createElement('form');
  todoForm.id = 'todo-form';
  todoForm.style.cssText = 'display: none; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff; margin-top:10px; box-shadow:0 4px 12px rgba(0,0,0,0.05);';

  const taskTitleInput = document.createElement('input');
  taskTitleInput.type = 'text';
  taskTitleInput.id = 'task-title';
  taskTitleInput.placeholder = 'e.g., Renew gym membership';
  taskTitleInput.required = true;
  taskTitleInput.style.fontWeight = '500';

  const taskDescInput = document.createElement('input');
  taskDescInput.type = 'text';
  taskDescInput.id = 'task-desc';
  taskDescInput.placeholder = 'Description';
  taskDescInput.style.cssText = 'font-size:0.88rem; color:#666;';

  const rowGrid = document.createElement('div');
  rowGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 10px;';

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.id = 'task-date';
  taskDateInput.required = true;

  const taskPrioritySelect = document.createElement('select');
  taskPrioritySelect.id = 'task-priority';
  
  const priorities = ['Low', 'Medium', 'High', 'Critical'];
  priorities.forEach((prio) => {
    const opt = document.createElement('option');
    opt.value = prio;
    opt.textContent = prio + ' Priority';
    if (prio === 'Medium') opt.selected = true;
    taskPrioritySelect.appendChild(opt);
  });

  rowGrid.appendChild(taskDateInput);
  rowGrid.appendChild(taskPrioritySelect);

  const formActions = document.createElement('div');
  formActions.style.cssText = 'display: flex; gap: 8px; margin-top: 4px;';

  const submitTaskBtn = document.createElement('button');
  submitTaskBtn.type = 'submit';
  submitTaskBtn.style.cssText = 'padding: 7px 14px; background-color: #db4c3f; color: white; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size:0.88rem;';
  submitTaskBtn.textContent = 'Add Task';

  const cancelTaskBtn = document.createElement('button');
  cancelTaskBtn.type = 'button';
  cancelTaskBtn.id = 'cancel-task-btn';
  cancelTaskBtn.style.cssText = 'padding: 7px 14px; background-color: #f5f5f5; color: #444; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size:0.88rem;';
  cancelTaskBtn.textContent = 'Cancel';

  formActions.appendChild(submitTaskBtn);
  formActions.appendChild(cancelTaskBtn);

  todoForm.appendChild(taskTitleInput);
  todoForm.appendChild(taskDescInput);
  todoForm.appendChild(rowGrid);
  todoForm.appendChild(formActions);

  taskFormContainer.appendChild(showFormBtn);
  taskFormContainer.appendChild(todoForm);
  contentDiv.appendChild(taskFormContainer);

  showFormBtn.addEventListener('click', () => {
    showFormBtn.style.display = 'none';
    todoForm.style.display = 'flex';
    taskTitleInput.focus();
  });

  cancelTaskBtn.addEventListener('click', () => {
    showFormBtn.style.display = 'flex';
    todoForm.style.display = 'none';
  });

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    const desc = taskDescInput.value.trim();
    const date = taskDateInput.value;
    const priority = taskPrioritySelect.value;

    if (title !== "") onTodoCreate(title, desc, date, priority);
  });

  // --- 5. RENDER THE POLISHED ROW-BASED TASK ITEMS ---
  const todoContainer = document.createElement('div');
  todoContainer.style.display = 'flex';
  todoContainer.style.flexDirection = 'column';

  activeProject.todos.forEach((todo, todoIndex) => {
    const row = document.createElement('div');
    row.className = 'task-row ' + (todo.complete ? 'task-complete' : '');

    // Left Circular Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'custom-checkbox prio-' + todo.priority;
    checkbox.checked = todo.complete || false;
    checkbox.addEventListener('change', () => onTodoToggle(todoIndex));

    // Middle Workspace Texts
    const mainInfo = document.createElement('div');
    mainInfo.className = 'task-main-info';

    const titleEl = document.createElement('h3');
    titleEl.className = 'task-title';
    titleEl.textContent = todo.title;
    mainInfo.appendChild(titleEl);

    if (todo.description) {
      const descEl = document.createElement('p');
      descEl.className = 'task-description';
      descEl.textContent = todo.description;
      mainInfo.appendChild(descEl);
    }

    // Meta Tags Layout (Date and Priority Tag)
    const metaEl = document.createElement('div');
    metaEl.className = 'task-meta-info';
    
    const dateSpan = document.createElement('span');
    dateSpan.textContent = '📅 ' + todo.dueDate;
    
    const prioSpan = document.createElement('span');
    prioSpan.className = 'tag-priority tag-' + todo.priority;
    prioSpan.textContent = todo.priority;
    
    metaEl.appendChild(dateSpan);
    metaEl.appendChild(prioSpan);
    mainInfo.appendChild(metaEl);

    // Right Action Delete Controls
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.style.cssText = 'background:none; border:none; cursor:pointer; font-size:1.1rem; filter: grayscale(1); opacity:0.4; transition: opacity 0.2s; padding:4px 8px;';
    
    row.addEventListener('mouseenter', () => deleteBtn.style.opacity = '1');
    row.addEventListener('mouseleave', () => deleteBtn.style.opacity = '0.4');
    deleteBtn.addEventListener('click', () => onTodoDelete(todoIndex));

    // Assembly
    row.appendChild(checkbox);
    row.appendChild(mainInfo);
    row.appendChild(deleteBtn);
    todoContainer.appendChild(row);
  });

  contentDiv.appendChild(todoContainer);
}