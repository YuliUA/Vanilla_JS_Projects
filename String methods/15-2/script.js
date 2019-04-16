let getId = id => document.getElementById(id);
let userMail;
let i = 0;
getId('mail').addEventListener('click', () => {
	userMail = prompt('Enter user email', 'Your mail');
	while (i < userMail.length) {
		if (userMail.indexOf('@') == 0) {
			alert('Символ @ введений на початку стрічки');
			break;
		} else if (userMail.indexOf('@') == -1) {
			alert('Ви не ввели символа @');
			break;
		} else if (userMail.charAt(userMail.length - 1) == '@') {
			alert('Символ @ введений в кінці стрічки');
			break;
		} else {
			i = userMail.length - 1;
			document.write(userMail)
		}
		i++;
	}
})
