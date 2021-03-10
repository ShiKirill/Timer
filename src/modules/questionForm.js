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

export default questionForm;