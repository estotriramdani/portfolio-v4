import { navItem, navMenu, content } from './dom-elements/index.js';
import portfoliosPage from './pages/portfolios.js';

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});

content.innerHTML = `<div class="double-column">
<div class="detail"></div>
<div class="items"></div>
</div>`;

navItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    content.style.overflow = 'hidden';
    switch (e.target.id) {
      case 'portfolios':
        portfoliosPage();
        break;

      default:
        break;
    }
  });
});
