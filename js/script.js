const navItem = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('.nav');
const showItems = document.querySelector('.showItems');
const items = document.querySelector('.items');
const content = document.querySelector('.content');

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});

showItems.addEventListener('click', () => {
  items.classList.add('slideDownItems');
  // content.style.padding = '0';
});
