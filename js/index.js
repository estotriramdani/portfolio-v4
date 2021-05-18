import {
  navItem,
  navMenu,
  content,
  detail,
  items,
} from './dom-elements/index.js';
import portfolios from './data/portfolios.js';
import itemsCard from './template/items-card.js';
import itemsCardSkeleton from './template/items-card-skeleton.js';
import detailSkeleton from './template/detail-skeleton.js';

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

function openPage(pageName) {
  const items = document.querySelector('.items');
  const detail = document.querySelector('.detail');
  // import { detail, items } from './dom-elements/index.js';
  detail.innerHTML = detailSkeleton;
  items.innerHTML = itemsCardSkeleton();
  setTimeout(() => {
    setTimeout(() => {
      items.innerHTML = '';
      portfolios.forEach((p) => {
        items.innerHTML += itemsCard(p);
      });
    }, 1200);
  }, 2000);
}
