let getId = id => document.getElementById(id);
//Змінні
let date = new Date();
//для секундоміра
let ms = `000`;
let s = `00`;
let m = `00`;
let h = `00`;
let t;
//для таймера
let mT;
let sT = `00`;
let timeSet = 0;
let tT;

//Годинник
getId('myDate').innerHTML = date.toLocaleDateString();
const myClock = () => {
    let clock = new Date();
    getId('digitalClock').innerHTML = clock.toLocaleTimeString()
}
setInterval(myClock, 1000)

//Секундомір
let startTimer = () => {
    ms++;
    (ms < 10) ? ms = `00${ms}`: (ms < 100) ? ms = `0${ms}` : ms;
    if (ms > 999) {
        ms = `000`;
        s++;
        (s < 10) ? s = `0${s}`: s;
        if (s > 59) {
            s = `00`;
            m++;
            (m < 10) ? m = `0${m}`: m;
            if (m > 59) {
                m = `00`;
                h++;
                (h < 10) ? h = `0${h}`: h;
            }
        }
    }
    getId('stopWatch').innerHTML = `${h}:${m}:${s}:${ms}`;
}
//кнопка старт секундоміра
getId('start').addEventListener('click', () => t = setInterval(startTimer, 1)) //мілісекунди рахуються дуже повільно!!!!!!Чому?

//запис даних секундоміра
getId('loop').addEventListener('click', () => {
    let stopTime = getId('stopWatch').innerHTML
    getId('result').innerHTML += `<p>${stopTime}</p>`;
})

//стоп секундоміра
getId('stop').addEventListener('click', () => {
    let timeArr = getId('stopWatch').innerHTML.split(':')
    getId('stopWatch').innerHTML = getId('stopWatch').innerHTML;
    clearInterval(t);
    h = +timeArr[0];
    m = +timeArr[1];
    s = +timeArr[2];
    ms = +timeArr[3]
})

//обнулення секундоміра і записів
getId('reset').addEventListener('click', () => {
    clearInterval(t);
    h = '00';
    m = '00';
    s = '00';
    ms = '000';
    getId('stopWatch').innerHTML = '00:00:00:000';
    getId('result').innerHTML = '';
})

//Таймер
//встановлення значення таймера 
//кнопка /+/
getId('btnPlus').addEventListener('click', () => {
    timeSet++;
    (timeSet < 10) ? timeSet = `0${timeSet}`: (timeSet == 60) ? timeSet = `00` : timeSet;
    getId('time').innerHTML = timeSet;
    mT = timeSet;
})
//кнопка /-/
getId('btnMinus').addEventListener('click', () => {
    if (timeSet == 0) return timeSet;
    timeSet--;
    (timeSet < 10) ? timeSet = `0${timeSet}`: timeSet;
    getId('time').innerHTML = timeSet;
    mt = timeSet;
})

//запуск таймера зворотнього відліку
getId('startTimer').addEventListener('click', () => {
    if (getId('time').innerHTML == 0) return timeSet;
    (mT < 10) ? mT = `0${mT}`: mT;
    tT = setInterval(() => {
        (sT == 0) ? sT = 60: sT;
        sT--;
        (sT < 10) ? sT = `0${sT}`: sT;
        if (sT == 59) {
            mT--;
            (mT < 10) ? mT = `0${mT}`: mT;
        }
        if (mT === `00` && sT === `00`) {
            clearInterval(tT);
            getId('timer').innerHTML = `00:00`;
            return timeSet;
        }
        getId('timer').innerHTML = `${mT}:${sT}`;
    }, 1000)
})

//зупинка таймера зворотнього відліку
getId('stopTimer').addEventListener('click', () => {
    let timerArr = getId('timer').innerHTML.split(':');
    getId('timer').innerHTML = getId('timer').innerHTML;
    clearInterval(tT);
    mT = +timerArr[0];
    sT = +timerArr[1];
})

//очищення значень таймера
getId('resetTimer').addEventListener('click', () => {
    clearInterval(tT);
    mT = '00';
    sT = '00';
    timeSet = `00`;
    getId('timer').innerHTML = '00:00';
    getId('time').innerHTML = '00';
})
