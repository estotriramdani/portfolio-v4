const itemsCard = (card) => {
  return `<div class="items-card" id="${card.id}" onclick="alert(this.id)">
  <div class="thumbnail">
    <img src="${card.image}" alt="Image" />
  </div>
  <div class="detail">
    <p class="title">${card.title}</p>
    <p class="short-desc">
      ${card.role}
    </p>
    <p class="type">${card.type}</p>
  </div>
</div>`;
};

export default itemsCard;
