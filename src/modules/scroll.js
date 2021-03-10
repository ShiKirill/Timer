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

export default scroll;