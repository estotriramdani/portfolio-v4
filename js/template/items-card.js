const itemsCard = (card) => {
  return `<div class="items-card" id="${card.id}">
  <div class="thumbnail" id="${card.id}">
    <img src="${card.thumb}" alt="Image" id="${card.id}" />
  </div>
  <div class="detail" id="${card.id}">
    <p class="title" id="${card.id}">${card.title}</p>
    <p class="short-desc" id="${card.id}">
      ${card.role}
    </p>
    <p class="type" id="${card.id}">${card.type}</p>
  </div>
</div>`;
};

export default itemsCard;
