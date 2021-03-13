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
          if (form.closest('.popup')) {
            setTimeout(()=>{
              form.closest('.popup').style.display = 'none';
            statusMsg.textContent = '';
            },500);
          } else {
            setTimeout(() => {
              statusMsg.textContent = '';
            }, 3000);
          }
          
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

export default sendForm;