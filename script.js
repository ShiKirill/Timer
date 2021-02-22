const greeting = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер', ];
const week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

window.addEventListener('DOMContentLoaded', function () {
    function dayEnding(k) {
        if (k % 10 === 1 && k !== 11) {
            return 'день';
        } else if ((k < 10 || k > 20) && (k % 10 >= 2 && k % 10 <= 4)) {
            return 'дня';
        } else {
            return 'дней';
        }
    };
    function addZero(k) {
        if (k / 10 < 1) {
            return '0' + k;
        } else {
            return k;
        }
    };
    function getDaysRemaining() {
        const date = new Date();
        const year = date.getFullYear();
        let dateStop = new Date('31 december ' + year).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining/60/60/24);
        return {timeRemaining, days, date};
    }
    function getGreeting(currentHours){
        return greeting[Math.floor(currentHours/6)];
    }
    function showMessage() {
        const timer = getDaysRemaining();
        const timerDays = timer.days;
        const currentHours = addZero(timer.date.getHours());
        const currentMinutes = addZero(timer.date.getMinutes());
        const currentSeconds = addZero(timer.date.getSeconds());
        const message = `<p>${getGreeting(currentHours) + '!'}</p>
        <p>${'Сегодня: ' + week[timer.date.getDay()]}</p>
        <p>${'Текущее время: ' + timer.date.toLocaleTimeString('en')}</p>
        <p>${'До нового года осталось: ' + timerDays + ' ' + dayEnding(timerDays)}</p>
        `;
        document.body.innerHTML = message;
    }
    setInterval(showMessage, 1000);

})