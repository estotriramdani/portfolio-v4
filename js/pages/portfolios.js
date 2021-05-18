import portfolios from '../data/portfolios.js';
import { content } from '../dom-elements/index.js';
import detailItem from '../template/detail-item.js';
import detailSkeleton from '../template/detail-skeleton.js';
import itemsCardSkeleton from '../template/items-card-skeleton.js';
import itemsCard from '../template/items-card.js';

const portfoliosPage = () => {
  const items = document.querySelector('.items');
  const detail = document.querySelector('.detail');

  detail.innerHTML = detailSkeleton;
  items.innerHTML = itemsCardSkeleton();

  setTimeout(() => {
    content.style.overflow = 'auto';

    // set items di menu
    items.innerHTML = '';
    portfolios.forEach((p) => {
      items.innerHTML += itemsCard(p);
    });

    // TO DO: tampilkan detail
    detail.innerHTML = detailItem(portfolios[1]);

    // seleksi card
    const cards = document.querySelectorAll('.items-card');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const id = parseInt(e.target.id);
        detail.innerHTML = detailSkeleton;
        setTimeout(() => {
          detail.innerHTML = detailItem(portfolios[id]);
        }, 1000);
      });
    });
  }, 1000);
};

export default portfoliosPage;
