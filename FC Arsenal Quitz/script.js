//Завдання 1

let count = 0;
let quest1 = prompt('Рік заснування ФК Арсенал?');
if (quest1 == 1886) {
	alert('Це було легко');
	count++;
} else {
	alert('Спробуй ще...');
}
let quest2 = prompt('Рідне місто ФК Арсенал?');
if (quest2 == 'Лондон' || quest2 == 'лондон') {
	alert('Ну, звичайно, Лондон!');
	count++;
} else {
	alert('Далі...');
}
let quest3 = prompt('Скільки разів Арсенал ставав переможцем чемпіонату Англії з футболу');
if (quest3 == 13) {
	alert('Твоя правда!');
	count++;
} else {
	alert('...');
}
let quest4 = prompt('Фірма-виробник футбольної форми ФК Арсенал з 2014 року...');
if (quest4 == 'пума' || quest4 == 'Пума') {
	alert('Ти це знаєш?');
	count++;
} else {
	alert('Це не твій день... Йдемо далі...');
}

let quest5 = prompt('Скільки німецьких футболістів грає у ФК Арсенал на даний час?');
if (quest5 == 3) {
	alert("Так 3");
	count++;
} else {
	alert('Спробуй ще...');
}

let quest6 = prompt('Прізвище головного тренера ФК Арсенал з 1996 року?');
if (quest6 == 'венгер' || quest6 == 'Венгер') {
	alert("Так точно!");
	count++;
} else {
	alert('Ти не знав???');
}

let quest7 = prompt('Прізвище рекордсмена клубу по кількості забитих голів?');
if (quest7 == 'анрі' || quest7 == 'Анрі') {
	alert("Так, аж 209 голів!!!");
	count++;
} else {
	alert('Далі...');
}
let quest8 = prompt('Прізвище воротаря клубу, який провів найбільше матчів?');
if (quest8 == 'сімен' || quest8 == 'Cімен') {
	alert("Авжеж");
	count++;
} else {
	alert('Як такого не знати :(');
}
let quest9 = prompt('Прізвище найдорожчого гравця ФК Арсенал?');
if (quest9 == 'езіл' || quest9 == 'Езіл' || quest9 == 'озіл' || quest9 == 'Озіл') {
	alert("Так, сума угоди 42,5 мільйони фунтів стерлінгів");
	count++;
} else {
	alert('Йдемо далі...');
}

let quest10 = prompt('Назва стадіону ФК Арсенал?');
if (quest10 == 'еміратс' || quest10 == 'Еміратс') {
	alert("Остання правильна відповідь...");
	count++;
} else {
	alert('Твій результат...');
}

alert((count == 10) ? ('Це ідеально! Ти фанат!' + count + ' з 10!') : (count < 10 && count >= 7) ? ('Всі помиляються... Твій результат ' + count + ' з 10!') : (count < 7 && count >= 4) ? ('Ти дещо знаєш :( ' + count + ' з 10!') : (count < 4 && count > 0) ? ('Іди вчитись у тебе ' + count + ' з 10!') : ('Ти нічогісінького не знаєш про ФК Арсенал! ' + count + ' правильних відповідей!'));


//Завдання 2

// let name = prompt("Введіть ім'я користувача", '');
// if (name == 'Юлія' || name == 'юлія') {
// 	let pass = prompt("Введіть пароль", '');
// 	if (pass == '1111') {
// 		document.getElementById('enter').innerHTML = 'Ласкаво просимо!';
// 		document.getElementById('enter').style.background = 'lime';

// 	} else if (pass === null) {
// 		document.getElementById('enter').innerHTML = 'Вхід скасований!';
// 		document.getElementById('enter').style.background = 'yellow';
// 	} else {
// 		document.getElementById('enter').innerHTML = 'Пароль невірний!';
// 		document.getElementById('enter').style.background = 'red';
// 	}
// } else if (name === null) {
// 	document.getElementById('enter').innerHTML = 'Вхід скасований!';
// 	document.getElementById('enter').style.background = 'yellow';
// } else {
// 	document.getElementById('enter').innerHTML = 'Я Вас не знаю!';
// 	document.getElementById('enter').style.background = 'red';
// }


//Завдання 3

// let month = prompt('Введіть номер місяця року від 1 до 12', '');
// (month == 1) ? alert('january'): (month == 2) ? alert('february') : (month == 3) ? alert('march') : (month == 4) ? alert('april') : (month == 5) ? alert('may') : (month == 6) ? alert('june') : (month == 7) ? alert('july') : (month == 8) ? alert('august') : (month == 9) ? alert('september') : (month == 10) ? alert('october') : (month == 11) ? alert('november') : (month == 12) ? alert('december') : alert('У році тільки 12 місяців');
