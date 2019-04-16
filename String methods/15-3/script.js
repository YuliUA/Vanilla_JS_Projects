let getId = id => document.getElementById(id);
let userTxt;
let count = 0;
let i = 0;
getId('txt').addEventListener('click', () => {
	userTxt = prompt('Enter user text', 'html css javascript html java html');
	let userTxtArr = userTxt.split(' ')
	while (i < userTxtArr.length) {
		if(userTxtArr[i]=='html'){
			count++
		}
		i++;
	}
	getId('word').innerHTML=`Count of 'html' is ${count}.`
})

