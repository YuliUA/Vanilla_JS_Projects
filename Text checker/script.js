let getId = id => document.getElementById(id);
let cenzor = document.forms['cenzorForm'];

let banArr = getId('banned').innerHTML.split(' ')
cenzor.addWord.addEventListener('click', () => {
	let bannedWord = cenzor.bannedWord.value.toLowerCase();
	let bannedWordArr = bannedWord.split(' ');
	banArr = banArr.concat(bannedWordArr);
	getId('banned').innerHTML = banArr.join(' ');
})

cenzor.cenzorBtn.addEventListener('click', () => {
	let cenzoredTxt = cenzor.txt.value.toLowerCase();
	let userTxtArr = cenzoredTxt.split(' ');
	for (let key in userTxtArr) {
		for (let i = 0; i < banArr.length; i++) {
			if (userTxtArr[key].match(banArr[i])) {
				let newArr = banArr[i].split('');
				for (let i = 0; i < newArr.length; i++) {
					newArr[i] = '*';
					let newWord = newArr.join('');
					userTxtArr[key] = newWord;
				}
			}
		}
		cenzor.txt.value = userTxtArr.join(' ');
	}
})
