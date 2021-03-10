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

export default photoChange;