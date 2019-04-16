let myForm = document.forms['myForm'];

console.log(myForm.rb[0].nextElementSibling.innerHTML)
for (let i = 0; i < myForm.children.length; i++) {
	myForm.rb[i].addEventListener('click', function(){
		alert(myForm.rb[i].nextElementSibling.innerHTML)
	})	
}
