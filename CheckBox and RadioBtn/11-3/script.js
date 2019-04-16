let addTaskForm = document.forms['f2'];
let taskForm = document.forms['f1'];
let addTaskButton = addTaskForm.button;
let myTask
function del() {
	myTask = taskForm.querySelectorAll('label>input');
	for (let i = 0; i < myTask.length; i++) {
		myTask[i].addEventListener('click', function () {
			console.log(this)
			taskForm.removeChild(this.parentElement);
		})
	}
}
del()

//for (let i = 0; i < myTask.length; i++) {
//		myTask[i].addEventListener('click', function () {
//			this.parentElement.removeChild(this);
//		})
//	}

addTaskButton.addEventListener('click', function () {
	let newLable = document.createElement('label');
	let newCheck = document.createElement('input');
	let newTask = document.createElement('span')
	let task = addTaskForm.newTask.value;
	(task === '') ? alert('You must write task!'): taskForm.appendChild(newLable);
	newLable.appendChild(newCheck);
	newLable.appendChild(newTask);
	newCheck.setAttribute('type', 'checkbox');
	newTask.innerHTML = task;
	this.form.reset();
	del();
})