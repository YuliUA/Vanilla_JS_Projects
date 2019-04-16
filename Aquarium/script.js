let getId = id => document.getElementById(id);
let goRight = getId('buttonRight');
let goLeft = getId('buttonLeft');
let goUp = getId('buttonUp');
let goDown = getId('buttonDown');
let moveMan = getId('man');

goLeft.addEventListener('click', function () {
	let go = moveMan.offsetLeft;
		moveMan.classList.remove('rotateRight','rotateDown');
		moveMan.classList.add('rotateLeft');
	if (go >= 100) {
		moveMan.style.left = go - 100 + 'px';
	}
})
goRight.onclick = (function () {
	let go = moveMan.offsetLeft;
	moveMan.classList.remove('rotateLeft','rotateDown');
	moveMan.classList.add('rotateRight');
	let windWidth = document.body.offsetWidth;
	if (go <= windWidth - 250) {
		moveMan.style.left = go + 100 + 'px';
	}
})
goUp.onclick = (function () {
	let go = moveMan.offsetTop;
	moveMan.classList.remove('rotateLeft','rotateRight','rotateDown');
	if (go >= 100) {
		moveMan.style.top = go - 100 + 'px';
	}
})
goDown.onclick = (function () {
	let go = moveMan.offsetTop;
	moveMan.classList.remove('rotateLeft','rotateRight');
	moveMan.classList.add('rotateDown');
	let windHeight = document.body.offsetHeight;
	if (go <= windHeight - 250) {
		moveMan.style.top = go + 100 + 'px';
	}
})
