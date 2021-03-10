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

export default toggleMenu;