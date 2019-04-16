let bodyBgColor = prompt('Оберіть колір фону сторінки', 'skyblue');
let bodyFont = prompt("Оберіть тип шрифта на сторінці: 'sans', ''sans-serif', 'cursive', 'fantasy'", 'monospace');
let align = prompt('Вирівняйте заголовок сторінки: праворуч, ліворуч, по центру', 'по центру');
let headingName = prompt('Змініть назву сторінки, якщо ні натисніть Скасувати', '')
let linkBgColor = prompt('Оберіть колір фону для параграфа з посиланнями', 'yellow');
let paragrTextColor = prompt('Оберіть колір тексту для першого параграфа', 'gray');
let linkTextColor = prompt('Оберіть колір тексту для посилань на сайти', 'firebrick');
let divTextColor = prompt('Оберіть колір тексту "Список властивостей..."', 'snow')
let divTextSize = prompt('Оберіть розмір тексту "Список властивостей..."', '14px')
let divTextWeight = prompt('Оберіть товщину тексту "Список властивостей...". Введіть значення від 100 до 900', '900')
let listStyle = prompt('Оберіть тип маркера для маркованого списку на сторінці: circle, square, disc', 'square')
let heading = document.getElementsByTagName('h1');
let mySites = document.getElementById('site');
let wrapList = document.getElementById('wraper-list');
let link = document.querySelectorAll('a');
let listItem = wrapList.querySelectorAll('li')

document.body.style.backgroundColor = bodyBgColor;
document.body.style.fontFamily = bodyFont;
(align == 'по центру') ? align = 'center': (align == 'праворуч') ? align = 'right' : align = 'left';
heading[0].style.textAlign = align;
heading[0].innerHTML = (headingName == '') ? headingName = 'my page' : (headingName == null) ? headingName = 'my page' : headingName = headingName;
mySites.style.backgroundColor = linkBgColor;
mySites.style.color = paragrTextColor;
for (let i = 0; i < link.length; i++) {
	link[i].style.color = linkTextColor
}
wrapList.style.color = divTextColor;
wrapList.style.fontSize = divTextSize;
wrapList.style.fontWeight = divTextWeight;
for (let k = 0; k < listItem.length; k++) {
	listItem[k].style.listStyleType = listStyle
}
// Додаткове завдання

let mySite = document.getElementById('site').children;

function myFunction() {
	for (let q = 0; q < mySite.length; q++) {
		let ask = prompt('Введіть адресу Вашого улюбленого сайту', 'w3schools.com');
		mySite[q].innerHTML = ask;
		mySite[q].href = `https://www.${ask}`;

	}
}
