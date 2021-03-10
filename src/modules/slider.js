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

export default slider;