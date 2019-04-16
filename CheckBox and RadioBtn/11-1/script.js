let myForm = document.forms['chForm'];
let buttonCheck = myForm.elements.chBox;
let buttonUnCheck = myForm.elements.unChBox;

buttonCheck.addEventListener('click', function () {
	for (let i = 0; i < myForm.length - 2; i++) {
		myForm.elements[i].checked = true;
	}
		buttonCheck.hidden=true;
		buttonUnCheck.hidden=false;
})
buttonUnCheck.addEventListener('click', function () {
	for (let i = 0; i < myForm.length - 2; i++) {
		myForm.elements[i].checked = false;
	}
		buttonCheck.hidden=false;
		buttonUnCheck.hidden=true;
})
