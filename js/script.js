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
            return { timeRemaining, hours, minutes, seconds };
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
        const menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu
                .classList
                .toggle('active-menu');
        };

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (target.closest('.menu')) {
                handlerMenu();
            } else if (target.tagName === 'A' && target.closest('menu')) {
                handlerMenu();
            } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {
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
                .scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    // dots

    const addDots = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const dotParent = document.querySelector('.portfolio-dots');
        const dot = `<li class="dot"></li>`;
        for (let i = 0; i < slide.length; i++) {
            dotParent.innerHTML += dot;
            if (i === 0) {
                dotParent.firstElementChild.classList.add('dot-active');
            }
        }
    };

    addDots();

    // Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const dot = document.querySelectorAll('.dot');
        const slider = document.querySelector('.portfolio-content');
        let interval;
        let currentSlide = 0;

        const prevSlide = (elem, index, strClass) => {
            elem[index]
                .classList
                .remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index]
                .classList
                .add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((item, index) => {
                    if (item === target) {
                        currentSlide = index;
                    }
                })
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide();

    };

    slider();

    const photoChange = () => {
        const command = document.getElementById('command').querySelectorAll('img');

        const changeSrc = (item) => {
            const tmp = item.getAttribute('src');
            item.setAttribute('src', item.dataset.img);
            item.dataset.img = tmp;
        }

        command.forEach(item => {
            item.addEventListener('mouseenter', () => {
                changeSrc(item);
            });
            item.addEventListener('mouseleave', () => {
                changeSrc(item);
            });
        });
    }

    photoChange();

    const calculator = () => {
        const calcBlock = document.querySelector('.calc-block');
        calcBlock.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/\D/, '');
        });
    }

    calculator();

    const questionForm = () => {
        const inputForm = document.querySelector('.footer-form-input');
        const footerInputs = inputForm.querySelectorAll('input');
        const check = (item) => {
            if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form2-message') {
                item.value = item.value.replace(/[^а-яё -%]/ig, '');
            } else if (item.getAttribute('id') === 'form2-email') {
                item.value = item.value.replace(/[^a-z@_.!~*'-]/ig, '');
            } else if (item.getAttribute('id') === 'form2-phone') {
                item.value = item.value.replace(/[^0-9()-]/g, '')
            }
        };
        inputForm.addEventListener('input', event => {
            const target = event.target;
            check(target);
        });
        footerInputs.forEach(item => {
            item.addEventListener('blur', () => {
                check(item);      
                item.value = item.value.replace(/\s+/g, ' ');
                item.value = item.value.replace(/[-]+/g, '-');
                item.value = item.value.replace(/^[\s-]/, '');
                item.value = item.value.replace(/[\s-]$/, '');
                if (item.getAttribute('id') === 'form2-name') {
                    item.value = item.value.replace(/\S+/gi, (match) => {
                        return match[0].toUpperCase() + match.substr(1);
                    });
                }
            });
        });
    }

    questionForm();
});