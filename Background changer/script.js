let getId = id => document.getElementById(id)

alert('Click on text below')

document.write(`<table  style="margin: 50px auto;border-collapse: collapse">`)
for (let i = 1; i <= 3; i++) {
	document.write(`<tr>`)
	for (let i = 1; i <= 3; i++) {
		document.write(`<td style="width:100px; height:50px ; border:2px solid black"></td>`)
	}
	document.write(`</tr>`)
}
document.write(`</table>`)

let tabPicker = document.querySelector('table');
tabPicker.style.display = 'none';

let colorCell = ['skyblue', 'pink', 'lime', 'coral', 'aqua', 'purple', 'green', 'red', 'blue'];
let photoCell = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', ]

let cell = document.querySelectorAll('td')

getId('color').onclick = (function () {
	for (let k = 0; k <= cell.length; k++) {
		tabPicker.style.display = 'table';
		cell[k].style.background = colorCell[k];
		cell[k].onclick = () => document.body.style.background = cell[k].style.background;
	}
})
getId('photo').onclick = (function () {
	for (let k = 0; k <= cell.length; k++) {
		tabPicker.style.display = 'table';
		cell[k].style.backgroundSize = 'cover';
		cell[k].style.background = `url(${photoCell[k]})`;
		cell[k].onclick = () => document.body.style.background = cell[k].style.background;
	}
})
