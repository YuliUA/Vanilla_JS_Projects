let getId = id => document.getElementById(id);
let show = x => x.removeAttribute('hidden', 'hidden');
let hide = y => y.setAttribute('hidden', 'hidden');

//змінні
let styleForm = document.forms['styleForm'];
let arrX = [];
let arrY = [];

//показати блок
styleForm.createBtn.addEventListener('click', () => show(getId('box')));

//зміна ширини і висоти блоку
getId('boxWidth').addEventListener('blur', () => getId('box').style.width = `${getId('boxWidth').value}px`)
getId('boxHeight').addEventListener('blur', () => getId('box').style.height = `${getId('boxHeight').value}px`)

//зміна кольору блоку
styleForm.firstColorBox.addEventListener('click', () => {
    getId('box').classList.add('red-box');
    getId('box').classList.remove('green-box', 'blue-box')
})
styleForm.secondColorBox.addEventListener('click', () => {
    getId('box').classList.add('green-box');
    getId('box').classList.remove('red-box', 'blue-box')
})
styleForm.thirdColorBox.addEventListener('click', () => {
    getId('box').classList.add('blue-box');
    getId('box').classList.remove('red-box', 'green-box')
})

//координати
let numberPairs;
styleForm.coordinates.addEventListener('click', () => {
    hide(styleForm);
    numberPairs = +prompt('Введіть кількість пар координат', '5');
    let i = 0;
    let j = 0;
    for (let i = 0; i < numberPairs; i++) {
        let coordX = +prompt('координати по осі Х %');
        arrX[i] = coordX;
        let coordY = +prompt('координати по осі Y %');
        arrY[i] = coordY;
    }
    let x;
    let y;
    let fieldWidth = getId('field').offsetWidth;
    let fieldHeight = getId('field').offsetHeight;
    let l = 0;
    let t = 0;
    getId('box').addEventListener('mouseover', () => {
        if (l < arrX.length) {
            x = fieldWidth * (arrX[l++] / 100);
            y = fieldHeight * (arrY[t++] / 100);
            getId('box').style.left = `${x}px`;
            getId('box').style.top = `${y}px`;
        } else {
            l = 0;
            t = 0;
        }
    })
})
