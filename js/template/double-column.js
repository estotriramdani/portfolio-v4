import { content } from '../dom-elements/index.js';

const doubleColumn = () => {
  return (content.innerHTML = `<div class="double-column">
  <div class="detail"></div>
  <div class="items"></div>
  </div>`);
};

export default doubleColumn;
