const questionForm = () => {
    const inputForm = document.querySelector('.footer-form-input');
    const footerInputs = inputForm.querySelectorAll('input');
    const mainFormInput = document.querySelector('.main-form-input');
    const mainInputs = mainFormInput.querySelectorAll('input');
    const modalForm = document.getElementById('form3');
    const modalInputs = modalForm.querySelectorAll('input');
    const statusMessage = `<div class='form-status-message'  style="font-size: 2rem; color: red;"></div>`;
            
    mainFormInput.closest('form').insertAdjacentHTML('beforeend', statusMessage);
    modalForm.insertAdjacentHTML('beforeend', statusMessage);
    inputForm.closest('form').insertAdjacentHTML('beforeend', statusMessage);

    const check = (item) => {
        if (item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form3-name') {
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
            const statusMsg = item.closest('form').querySelector('.form-status-message');
            const namePattern = /^([a-яё]{2,})/;
            const emailPattern = /^\w+@\w+\.\w{2,3}$/;
            const phonePattern = /^(8|\+7)\d{10}$/;
            check(item);
            item.value = item.value.replace(/\s+/g, ' ');
            item.value = item.value.replace(/[-]+/g, '-');
            item.value = item.value.replace(/^[\s+]/, '');
            item.value = item.value.replace(/[\s+]$/, '');
            if (item.classList.contains('form-name') || item.getAttribute('id')==='form2-name') {
                if (!namePattern.test(item.value)) {
                    item.value = '';
                    statusMsg.textContent = 'Введите корректное имя!';
                } else if (statusMsg.textContent = 'Введите корректное имя!') {
                    statusMsg.textContent = ''
                }
            }
            if (item.classList.contains('form-email')) {
                if (!emailPattern.test(item.value)) {
                    item.value = '';
                    statusMsg.textContent = 'Введите корректный email!';
                } else if (statusMsg.textContent === 'Введите корректный email!') {
                    statusMsg.textContent = ''
                }
            }
            if (item.classList.contains('form-phone')) {
                if (!phonePattern.test(item.value)) {
                    item.value = '';
                    statusMsg.textContent = 'Введите корректный телефон!'
                } else if (statusMsg.textContent === 'Введите корректный телефон!') {
                    statusMsg.textContent = '';
                }
            }
            if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form3-name') {
                item.value = item.value.replace(/\S+/gi, (match) => {
                    return match[0].toUpperCase() + match.substr(1).toLowerCase();
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

export default questionForm;