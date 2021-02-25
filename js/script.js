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
        const activeMenu = document.getElementsByTagName('menu')[0];
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li>a');

        const handlerMenu = () => {
            menu
                .classList
                .toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        activeMenu.addEventListener('click', (event)=> {
            const target = event.target;
            if (target.tagName === 'A') {
                handlerMenu();
            }
        });
        
    };
    
    toggleMenu();

    // Прокрутка

    const scroll = () => {
        
        const menuItems = document.querySelectorAll('menu>ul>li>a');
        const mainBlockLink = document.querySelector('main>a');

        function getScroll(item) {
            const itemHref = item.getAttribute('href');
            document
                .querySelector(itemHref)
                .scrollIntoView({behavior: 'smooth', block: 'start'});
        }

        mainBlockLink.addEventListener('click', elem => {
            elem.preventDefault();
            getScroll(mainBlockLink);
        });

        menuItems.forEach(item => {
            item.addEventListener('click', (elem) => {
                elem.preventDefault();
                getScroll(item);
            });
        });
    };
    scroll();

    // popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');
        let i = -42;
        iterator = 2;
        let requestId;

        function showPopUp() {
            requestId = requestAnimationFrame(showPopUp);
            popup.style.display = 'block';
            popupContent.style.left = `${i}rem`;
            i += iterator;
            if (popupContent.offsetLeft / document.documentElement.clientWidth > 0.38) {
                popupContent.style.left = `38%`;
                cancelAnimationFrame(requestId);
            }
        };

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (document.documentElement.clientWidth >= 768) {
                    i = -50;
                    requestId = requestAnimationFrame(showPopUp);
                } else {
                    popupContent.style.left = ``;
                    popup.style.display = 'block';
                }
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }

        });

    };
    togglePopUp();

    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i]
                        .classList
                        .add('active');
                    tabContent[i]
                        .classList
                        .remove('d-none');
                } else {
                    tab[i]
                        .classList
                        .remove('active');
                    tabContent[i]
                        .classList
                        .add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });

            }

        });
    };

    tabs();
});
