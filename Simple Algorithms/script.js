/*Завдання1 . Перевірте, чи є введене користувачем з клавіатури натуральне число - простим. */

/*
let n = +prompt('Введіть будь-яке додатнє число');
let x = 1;
(n !== n) ? x = NaN: (n == 1 || n == 0) ? x = undefined : n;

for (let i = 2; i < n; i++) {
	if (n % i == 0) {
		x = 0;
		break;
	}
}
(x == 1) ? document.write(`число ${n} є простим`): (x == 0) ? document.write(`число ${n} є складним`) : document.write('Це не число!');
*/



/*
Завдання 2. Виведіть на екран перші 11 членів послідовності Фібоначчі. Нагадуємо, що перший і другий члени послідовності рівні одиницям, а кожен наступний - сумою двох попередніх. 
*/

/*
let a = 1;
let b = 0;
let c;
let count = 0;
while (count < 11) {
	count++;
	c = a + b;
	a = b;
	b = c;
	document.write(` ${c},`)
}
*/



/*Завдання 3. Для введеного користувачем з клавіатури натурального числа порахуйте суму всіх його цифр (заздалегідь не відомо скільки цифр буде в числі).*/

/*
let n = +prompt('Write number');
let sum = 0;
for (let i = n; i > 0; i = parseInt(i / 10)) {
	sum += i % 10;
}
document.write(sum)
*/



/*Завдання 4. Вивести за допомогою циклів (for, while чи do while) табличку множення від 2 до 9 у тегах table через скріпт, методом document.write.*/

/*
let tabTr = 9;
let tabTd = 1;
let num = 1;
while (num != 9) {
	num++;
	document.write('<table style="float: left;  margin: 10px; padding: 5px ; border: 1px solid black">');
	for (let i = 1; i <= tabTr; i++) {
		let res = i * num;
		document.write('<tr>');
		for (let k = 1; k == tabTd; k++) {
			document.write(`<td> ${i} x ${num} = ${res}</td>`);
		}
		document.write('</tr>');
	}
	document.write('</table>');
}
*/
