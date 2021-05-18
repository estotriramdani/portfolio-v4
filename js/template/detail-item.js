const detailItem = (p) => {
  return `
  <div class="cover-img">
    <img src="${p.image}" alt="">
  </div>
  <div class="detail__body">
    <h3 class="detail__body__title">${p.title}</h3>
    <div class="detail__body__subtitle">
      <p>${p.role}</p>
      <p>${p.type}</p>
    </div>
    <p class="detail__body__description">
      ${p.description}
    </p>
    <div class="detail__body__more-description">
      Technologies: ${p.technology}
    </div>
  </div>
  `;
};
export default detailItem;
