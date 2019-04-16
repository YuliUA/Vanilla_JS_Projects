
/*Завдання 1: Потрібно написати функцію, яка повертає максимальний переданий їй числовий параметр. Кількість параметрів складає 3 або 4.
Приклад роботи:
f(5,-2,10) – має повернути 10;
f(5,-2,30,6) – має повернути 30;*/


/*function maxValue(...numbers) {
	let max = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (max < numbers[i]) {
			max = numbers[i]
		}
	}
	console.log(max);
}
maxValue(5,-2,30,6);*/



/*
Завдання 2: Потрібно написати функцію, яка обраховує суму чисел геометричної прогресії, в якій першим числом є 1. Інформація про геометричну прогресію знаходиься тут :
	https://uk.wikipedia.org/wiki/Геометрична _прогресія
	http://ua.onlinemschool.com/math/formula/geometric_sequence/
Функція приймає два аргументи: кількість чисел прогресії і її знаменник . Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5, а знаменник – 2 (тому що кожне наступне число прогресії домножується на 2). Результат, який має повернути функція для даної прогресії 31.
Функцію  потрібно написати двома способами:
	З використанням циклу
	З використанням формули знаходження суми геометричної прогресії:
S_n=b_1*(1-q^n)/(1-q),
де b1 – перший елемент прогресії (в даному завданні це 1),
q – знаменник,
n – кількість елементів прогресії
Приклад роботи:
f(5,2) – 1+2+4+8+16=31
f(4,3) – 1+3+9+27=40
*/


let n = prompt('');
let q = prompt('');
let b = 1;
let sum = 0;
if (n == 0 || q == 0) {
	alert('Введіть число');
} else {
	function geomProgr(n, q) {
		console.log(b);
		for (i = 1; i < n; i++) {
			b *= q;
			console.log(b);
			sum += b;
		}
		console.log(sum + 1);
	}
	geomProgr(n, q);
}




/*Завдання 3: Потрібно написати функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt(). Потрібно щоб функція виводила діапазон тільки простих чисел вікном alert(), між тими які ввів користувач.*/

/*
let n1 = +prompt('Введіть будь-яке додатнє число')
let n2 = +prompt('Введіть будь-яке додатнє число')

function simpleNumbers(a, b) {
	let str = '';
	for (let n = a; n <= b; n++) {
		let x = true;
		(n <= 0 || n == 1 || n !== n) ? x = false: n;
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				x = false;
				break;
			}
		}
		(x == true) ? str += n + " ": null;
	}
	console.log(str);
}
simpleNumbers(n1, n2);
*/
