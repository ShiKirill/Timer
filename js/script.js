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
    countTimer('28 february 2021');

    // Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const mainBlockLink = document.querySelector('main>a');

        function getScroll(item){
            const itemHref = item.getAttribute('href');
            document.querySelector(itemHref).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        mainBlockLink.addEventListener('click', elem => {
            elem.preventDefault();
            getScroll(mainBlockLink);
        });

        menuItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', (elem) => {
                elem.preventDefault();
                getScroll(link);
            });
        });
        
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => elem.addEventListener('click',handlerMenu));
        
        
    };
    toggleMenu();

    // popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popUpClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content');
        let i = -50;
        iterator = 3;
        let requestId;

        function showPopUp(){
            requestId = requestAnimationFrame(showPopUp);
            popup.style.display = 'block';
            popupContent.style.left = `${i}%`;
            i += iterator;
            if(i > 37) {
                popupContent.style.left = `38%`;
                cancelAnimationFrame(requestId);
            }
        };

        popupBtn.forEach(elem => {
            elem.addEventListener('click',()=>{
                if (document.documentElement.clientWidth>=768) {
                    i = -50;
                requestId = requestAnimationFrame(showPopUp);
                } else {
                    popupContent.style.left = ``;
                    popup.style.display = 'block';
                }
            });
        });

        popUpClose.addEventListener('click',()=>{
            popup.style.display = 'none';
        })

    };
    togglePopUp();
});
