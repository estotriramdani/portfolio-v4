import { navItem, navMenu, content } from './dom-elements/index.js';
import portfoliosPage from './pages/portfolios.js';
import doubleColumn from './template/double-column.js';

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});

navItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    content.style.overflow = 'hidden';
    switch (e.target.id) {
      case 'portfolios':
        doubleColumn();
        portfoliosPage();
        break;
      case 'completions':
        doubleColumn();
        break;
      case 'experiences':
        doubleColumn();
        break;
      case 'tutorials':
        doubleColumn();
        break;
      default:
        console.log('home pgae');
        break;
    }
  });
});
