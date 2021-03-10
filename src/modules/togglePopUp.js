const togglePopUp = () => {
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popupContent = document.querySelector('.popup-content');
  let i = -42;
  let iterator = 2;
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

export default togglePopUp;