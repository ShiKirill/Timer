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
    countTimer('28 march 2021');

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

    const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount = document.querySelector('.calc-count');
        const totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0;
            let countValue = 1;
            let dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;

            let squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            if (total === 0) {
                totalValue.textContent = total;
            } else {
                let tmp = 1;
                const numberAnimation = () => {
                    let animId = requestAnimationFrame(numberAnimation);
                    if (tmp < total) {
                        totalValue.textContent = tmp;
                    } else {
                        totalValue.textContent = total;
                        cancelAnimationFrame(animId);
                    }
                    tmp += Math.floor(price * squareValue * dayValue * countValue * 0.03);
                };
                numberAnimation();
            }
        }

        calcBlock.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/\D/, '');
            }
        });
        calcBlock.addEventListener('change', event => {
            let target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    }

    calculator(100);

    const questionForm = () => {
        const inputForm = document.querySelector('.footer-form-input');
        const footerInputs = inputForm.querySelectorAll('input');
        const mainFormInput = document.querySelector('.main-form-input');
        const mainInputs = mainFormInput.querySelectorAll('input');
        const modalForm = document.getElementById('form3');
        const modalInputs = modalForm.querySelectorAll('input');

        const check = (item) => {
            if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form3-name') {
                item.value = item.value.replace(/[^а-яё -%]/ig, '');
            } else if (item.getAttribute('id') === 'form2-email' || item.getAttribute('id') === 'form1-email' || item.getAttribute('id') === 'form3-email') {
                item.value = item.value.replace(/[^a-z@_.!~*'-]/ig, '');
            } else if (item.getAttribute('id') === 'form2-phone' || item.getAttribute('id') === 'form1-phone' || item.getAttribute('id') === 'form3-phone') {
                item.value = item.value.replace(/[^+0-9]/, '')
            } else if (item.getAttribute('id') === 'form2-message' || item.getAttribute('id') === 'form1-message' || item.getAttribute('id') === 'form3-message') {
                item.value = item.value.replace(/[^а-яё0-9 -,.;:!?]/ig, '');
            }
        };
        mainFormInput.addEventListener('input', event => {
            const target = event.target;
            check(target);
        });
        inputForm.addEventListener('input', event => {
            const target = event.target;
            check(target);
        });
        modalForm.addEventListener('input', event => {
            const target = event.target;
            check(target);
        });

        const inputCheck = (item) => {
            item.addEventListener('blur', () => {
                check(item);
                item.value = item.value.replace(/\s+/g, ' ');
                item.value = item.value.replace(/[-]+/g, '-');
                item.value = item.value.replace(/^[\s+]/, '');
                item.value = item.value.replace(/[\s+]$/, '');
                if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form3-name') {
                    item.value = item.value.replace(/\S+/gi, (match) => {
                        return match[0].toUpperCase() + match.substr(1);
                    });
                }
            });
        };

        mainInputs.forEach(item => {
            inputCheck(item);
        });
        footerInputs.forEach(item => {
            inputCheck(item);
        });
        modalInputs.forEach(item => {
            inputCheck(item);
        })
    }

    questionForm();

    // send-ajax-form

    const sendForm = () => {
        const style = document.createElement('style');
        style.textContent = `
    .sk-three-bounce {
        width: 8em;
        margin: auto;
        text-align: center;
    }
    .sk-three-bounce .sk-child {
        width: 2em;
        height: 2em;
        background-color: #337ab7;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
        animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
    }
    .sk-three-bounce .sk-bounce-1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .sk-three-bounce .sk-bounce-2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    
    @keyframes sk-three-bounce {
        0%, 80%, 100% {
        transform: scale(0);
        }
        40% {
        transform: scale(1.0);
        }
    }
    `;
        const errorMsg = 'Что-то пошло не так...';
        const loadMsg = 'Загрузка...';
        const successMsg = 'Спасибо! Мы скоро с вами свяжемся!';

        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');
        const statusMsg = document.createElement('div');
        statusMsg.style.cssText = 'font-size: 2rem; color: white;';

        const formEvent = (form) => {
            form.addEventListener('submit', event => {
                event.preventDefault();
                form.appendChild(statusMsg);
                const formData = new FormData(form);
                let body = {};
                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                document.head.appendChild(style);
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200')
                        }
                        statusMsg.textContent = successMsg;
                    })
                    .catch(error => {
                        statusMsg.textContent = errorMsg;
                        console.error(error);
                    });
                form.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
            });
        };

        formEvent(form1);
        formEvent(form2);
        formEvent(form3);

        const postData = (body) => {
            statusMsg.innerHTML = `
                <div class="sk-three-bounce">
                    <div class="sk-bounce-1 sk-child"></div>
                    <div class="sk-bounce-2 sk-child"></div>
                    <div class="sk-bounce-3 sk-child"></div>
                </div>
                `;
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
    };

    sendForm();
});