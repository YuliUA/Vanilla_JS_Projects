let getId = id => document.getElementById(id);

let signInForm = document.forms['signIn'];
let signOutForm = document.forms['signOut'];
let userForm = getId('form');
let userName = getId('userName');
let userEmail = getId('userEmail');
let wraperSignIn = getId('wraperSignIn');
let userPosition = getId('userPosition');

signInForm.chBox.addEventListener('click', () => {
	if (signInForm.chBox.checked == true) {
		signInForm.signInButton.removeAttribute('disabled', 'disabled');
		signInForm.signInButton.style.opacity = '1';
		signInForm.signInButton.style.cursor = 'pointer';
	} else {
		signInForm.signInButton.setAttribute('disabled', 'disabled')
		signInForm.signInButton.style.opacity = '0.5';
		signInForm.signInButton.style.cursor = 'auto';
	}
});

signInForm.signInButton.addEventListener('click', function () {
	let fn = signInForm.first_name.value;
	let sn = signInForm.second_name.value;
	let mail = signInForm.email.value;
	let image = getId('userPhoto');
	let photo = ['img/man.jpg', 'img/woman.jpg', 'img/Question.jpg'];
	let position = signInForm.choose.value;
	userName.innerHTML = fn + ' ' + sn;
	userName.style.fontWeight = '900';
	userEmail.innerHTML = mail;
	for (let i = 0; i < signInForm.rb.length; i++) {
		(signInForm.rb[i].checked) ? image.style.background = `url(${photo[i]})`: image.style.background = `url(${photo[2]})`;
	}
	(position == 'QC/QA') ? userPosition.innerHTML = position: (position == 'Choose...') ? userPosition.innerHTML = ' ' : userPosition.innerHTML = `${position} developer`
	signInForm.reset();
	wraperSignIn.classList.add('hideForm');
	userForm.classList.remove('hideForm');
})

signOutForm.signOutButton.addEventListener('click', function () {
	userForm.classList.add('hideForm');
	wraperSignIn.classList.remove('hideForm');
	signInForm.chBox.checked = false;
	signInForm.signInButton.setAttribute('disabled', 'disabled');
	signInForm.signInButton.style.opacity = '0.5';
	signInForm.signInButton.style.cursor = 'auto';
})
