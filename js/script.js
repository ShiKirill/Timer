window.addEventListener('DOMContentLoaded', () => {

    //Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');

        function addZero(k) {
            if (k / 10 < 1) {
                return '0' + k;
            } else {
                return k;
            }
        };

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining <= 0) {
                clearInterval(intervalID);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        const intervalID = setInterval(updateClock, 1000);
        

    }

    countTimer('24 february 2021');
});
