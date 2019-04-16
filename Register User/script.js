let getId = id => document.getElementById(id);
let show = s => s.removeAttribute('hidden', 'hidden');
let hide = h => h.setAttribute('hidden', 'hidden');

let signForm = document.forms['signForm'];
let signBtn = signForm.signButton;
let editFormBtn = signForm.editButton;
let arrEditField = signForm.querySelectorAll('input')
let editBtn;
let deleteBtn;
let rowNum;
let arrUser = [];
let userName = getId('userLogin').value;
let userPass = getId('userPassword').value;
let userMail = getId('userMail').value;


class User {
    constructor(name, pass, email) {
        this.name = name || 'user';
        this.password = pass || 1111;
        this.email = email || 'user@gmail.com';
    }
}

//Запис даних користувача в таблицю
signBtn.addEventListener('click', () => {
    userName = getId('userLogin').value;
    userPass = getId('userPassword').value;
    userMail = getId('userMail').value;
    let user = new User(userName, userPass, userMail)
    arrUser.push(user)

    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.classList.add('numeric');
    tr.appendChild(th);

    for (let key in user) {
        let td = document.createElement('td')
        td.innerHTML = arrUser[arrUser.length - 1][key];
        tr.appendChild(td);
    }
    //Створюємо додаткові комірки для кнопок редагування та видалення
    for (let i = 0; i < 2; i++) {
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    // Створюємо кнопку редагування в таблиці для кожного користувача
    editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('name', 'editBtn');
    editBtn.classList.add('btn', 'btn-warning');
    editBtn.innerHTML = 'Edit';
    getId('tableBox').appendChild(tr);

    // Створюємо кнопку видалення з таблиці даних користувача
    deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('name', 'deleteBtn');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.innerHTML = 'Delete';
    getId('tableBox').appendChild(tr);

    tr.cells[4].appendChild(editBtn);
    tr.cells[5].appendChild(deleteBtn);

    signForm.reset();
    //При кліку на кнопку редагування 
    editBtn.addEventListener('click', (e) => {
        hide(signBtn);
        show(editFormBtn);
        for (let i = 0; i < arrEditField.length; i++) {
            arrEditField[i].value = tr.cells[i + 1].innerHTML
        }
        rowNum = e.target.parentNode.parentNode.rowIndex;
    })
    //При кліку на кнопку видалення
    deleteBtn.addEventListener('click', () => {
        let delRow = tr.rowIndex - 1;
        arrUser.splice(delRow, 1)
        getId('tableBox').removeChild(tr);
    })
})

//Редагування даних користувача через форму реєстрації
editFormBtn.addEventListener('click', () => {
    show(signBtn);
    hide(editFormBtn);
    userName = getId('userLogin').value;
    userPass = getId('userPassword').value;
    userMail = getId('userMail').value;
    let editUser = new User(userName, userPass, userMail)
    arrUser.splice(rowNum - 1, 1, editUser);
    let counter = 1
    for (let key in editUser) {
        let editCellsArr = getId('tableBox').rows[rowNum].cells;
        editCellsArr[counter++].innerHTML = editUser[key];
    }
    signForm.reset();
})
