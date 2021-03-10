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

export default addDots;