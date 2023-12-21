const contenido = document.querySelector('#contenido');
const projectContent = document.querySelector('#project--content');
const sectionContenido = document.querySelector('#section--contenido');
const sectionContent = document.querySelector('#section--content');
const sectionH3 = document.querySelector('#section--div-h3');
const contenidoInput = document.querySelector('#contenido--input');
const add = document.querySelector('#add');
const containerTask = document.querySelector('#container--task');
const contenidoInputSection = document.querySelector('#contenido--input-section');
const containerTaskSection = document.querySelector('#container--task-section');
const addSection = document.querySelector('#section--add');


projectContent.addEventListener("click", ()=>{
    projectContent.style.display = "none";
    contenido.style.display = "block"
    sectionContenido.style.display = "none";
    sectionContent.style.display = "flex";
});

sectionContent.addEventListener("click", ()=>{
    sectionContent.style.display = "none";
    sectionContenido.style.display = "block"
    contenido.style.display = "none";
    projectContent.style.display = "flex";
});

function projectContentReturn (){
    projectContent.style.display = "flex";
    contenido.style.display = "none";
    
};

function projectSectionContentReturn (){
    sectionContent.style.display = "flex";
    sectionContenido.style.display = "none";

};

function inbox(){
    sectionH3.textContent = "Inbox";
    sectionContent.style.display = "flex";
    if (projectContent) {
        projectContent.addEventListener("click", () => {
            sectionContent.style.display = "flex";
        });
    }
};

function today(){
    sectionH3.textContent = "Today";
    sectionContent.style.display = "none";
    if (projectContent) {
        projectContent.addEventListener("click", () => {
            sectionContenido.style.display = "none";
            sectionContent.style.display = "none";
            
        });
    }

};

function thisWeek(){
    sectionH3.textContent = "This week";
    sectionContent.style.display = "none";
    if (projectContent) {
        projectContent.addEventListener("click", () => {
            sectionContenido.style.display = "none";
            sectionContent.style.display = "none";
        });
    }
};

window.onload = function () {
    const savedTask = localStorage.getItem('savedTask');
    if (savedTask) {
        containerTask.innerHTML = savedTask;
    }
};


function addTask() {
    const taskText = contenidoInput.value.trim();

    if (taskText !== "") {
        // Crear un nuevo elemento div para la tarea
        const newTask = document.createElement('div');
        newTask.className = 'newTask';
        const newImage = document.createElement('img');
        newImage.className = 'newImage';
        newImage.src = './img/task.svg';
        newTask.appendChild(newImage);

        const textNode = document.createTextNode(taskText);
        newTask.appendChild(textNode);

        const newImageX = document.createElement('img');
        newImageX.className = 'newImageX';
        newImageX.src = './img/bx-x.svg';
        newTask.appendChild(newImageX);

        // Agregar la tarea al contenedor
  
        containerTask.appendChild(newTask);

        // Almacenar el valor en localStorage
        localStorage.setItem('savedTask', containerTask.innerHTML);

        // Limpiar el input después de agregar la tarea
        contenidoInput.value = "";

       
    }
}



// Agrega un manejador de tecla al campo de entrada
contenidoInput.addEventListener("keypress", function (event) {
    // Verifica si la tecla presionada es Enter (código 13)
    if (event.key === 'Enter') {
        addTask();
    }
});


containerTask.addEventListener("click", function (event) {
    if (event.target.classList.contains("newImageX")) {
        // Si se hace clic en newImageX, elimina el elemento padre (el div de la tarea)
        const taskToRemove = event.target.parentNode;
        containerTask.removeChild(taskToRemove);

        // Actualiza el contenido en localStorage después de eliminar la tarea
        localStorage.setItem('savedTask', containerTask.innerHTML);
    }
});

window.onload = function () {
    const savedTask = localStorage.getItem('savedTask');
    if (savedTask) {
        containerTask.innerHTML = savedTask;
    }

    const savedTaskSection = localStorage.getItem('savedTaskSection');
    if (savedTaskSection) {
        containerTaskSection.innerHTML = savedTaskSection;
    }
};

function addTaskSection() {
    const taskTextSection = contenidoInputSection.value.trim();

    if (taskTextSection !== "") {
        // Crear un nuevo elemento div para la tarea
        const newTaskSection = document.createElement('div');
        newTaskSection.className = 'newTaskSection';
        const newImageSection = document.createElement('img');
        newImageSection.className = 'newImageSection';
        newImageSection.src = './img/task.svg';
        newTaskSection.appendChild(newImageSection);

        const textNodeSection = document.createTextNode(taskTextSection);
        newTaskSection.appendChild(textNodeSection);

        const newImageXSection = document.createElement('img');
        newImageXSection.className = 'newImageXSection';
        newImageXSection.src = './img/bx-x.svg';
        newTaskSection.appendChild(newImageXSection);

        // Agregar la tarea al contenedor
 
        containerTaskSection.appendChild(newTaskSection);




        // Almacenar el valor en localStorage con una clave diferente
        localStorage.setItem('savedTaskSection', containerTaskSection.innerHTML);
        // Limpiar el input después de agregar la tarea
        contenidoInputSection.value = "";

       
    }
}




// Agrega un manejador de tecla al campo de entrada
contenidoInputSection.addEventListener("keypress", function (event) {
    // Verifica si la tecla presionada es Enter (código 13)
    if (event.key === 'Enter') {
        addTaskSection();
    }
});

// ...

containerTaskSection.addEventListener("click", function (event) {
    if (event.target.classList.contains("newImageXSection")) {
        // Si se hace clic en newImageX, elimina el elemento padre (el div de la tarea)
        const taskToRemoveSection = event.target.parentNode;
        containerTaskSection.removeChild(taskToRemoveSection);

        // Actualiza el contenido en localStorage después de eliminar la tarea
        localStorage.setItem('savedTaskSection', containerTaskSection.innerHTML);
    }
});
