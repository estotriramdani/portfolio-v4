const navItem = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('.nav');
const items = document.querySelector('.items');
const itemsCard = document.querySelector('.items-card');

itemsCard.addEventListener('click', () => {
  alert('k');
});

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});
