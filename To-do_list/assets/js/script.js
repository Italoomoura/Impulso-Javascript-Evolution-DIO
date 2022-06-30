var form = document.getElementById('task-form');
var lista = document.getElementById('tasks');

form.onsubmit = function (x) {
	x.preventDefault();
	var inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(task) {
	var taskContainer = document.createElement('div');
	var newTask = document.createElement('input');
	var taskLabel = document.createElement('label');
	var taskDesc = document.createTextNode(task);

    if(task != ""){
        newTask.setAttribute('type', 'checkbox');
	    taskLabel.appendChild(taskDesc);
	    taskContainer.classList.add('task-item');
	    taskContainer.appendChild(newTask);
	    taskContainer.appendChild(taskLabel);

	    lista.appendChild(taskContainer);
    }
    else{
        alert("Por favor escreva algo")
    }
}