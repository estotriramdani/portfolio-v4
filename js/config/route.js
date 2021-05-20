import {
  completionsNavigation,
  content,
  experiencesNavigation,
  homeNavigation,
  navItem,
  portfoliosNavigation,
  tutorialsNavigation,
} from '../dom-elements/index.js';
import portfoliosPage from '../pages/portfolios.js';
import doubleColumn from '../template/double-column.js';
import activeNav from '../utils/active-nav.js';

const router = () => {
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
};

const routes = () => {
  switch (window.location.hash.substr(1)) {
    case '/portfolios':
      doubleColumn();
      portfoliosPage();
      activeNav(portfoliosNavigation);
      break;
    case '/completions':
      activeNav(completionsNavigation);
      doubleColumn();
      break;
    case '/experiences':
      activeNav(experiencesNavigation);
      doubleColumn();
      break;
    case '/tutorials':
      activeNav(tutorialsNavigation);
      break;
    default:
      activeNav(homeNavigation);
      break;
  }
};

const hashWatcher = () => {
  window.addEventListener('hashchange', (e) => {
    navItem.forEach((nav) => {
      if (nav.classList.contains('nav-item-active')) {
        nav.classList.remove('nav-item-active');
      }
    });
    content.style.overflow = 'hidden';
    switch (e.currentTarget.location.hash.substr(1)) {
      case '/portfolios':
        doubleColumn();
        portfoliosPage();
        activeNav(portfoliosNavigation);
        break;
      case '/completions':
        activeNav(completionsNavigation);
        doubleColumn();
        break;
      case '/experiences':
        activeNav(experiencesNavigation);
        doubleColumn();
        break;
      case '/tutorials':
        activeNav(tutorialsNavigation);
        break;
      default:
        activeNav(homeNavigation);
        break;
    }
  });
};

export { hashWatcher, router, routes };
