'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import scroll from './modules/scroll';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import photoChange from './modules/photoChange';
import calculator from './modules/calculator';
import questionForm from './modules/questionForm';
import sendForm from './modules/sendForm';


//Timer
countTimer('28 march 2021');
// Меню
toggleMenu();
// Прокрутка
scroll();
// popup
togglePopUp();
//табы
tabs();
// dots
addDots();
// Слайдер
slider();
// change photo on mouseenter/leave
photoChange();
// calculator
calculator(100);
//question form
questionForm();
// send-ajax-form
sendForm();