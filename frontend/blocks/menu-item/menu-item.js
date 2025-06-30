const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./blocks/menu-item/menu-item.css">
<div class="menu-section__item"> 
  <div class="menu-section__image"></div>
  <div class="menu-section__info">
    <h2 class="menu-section__item-title"></h2>
    <div class="menu-section__description"></div>
  </div>
  <div class="menu-section__price"></div>
</div>
`;

export default class MenuItem extends HTMLElement {
  constructor(itemData) {
    super();
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    this.itemData = itemData;
  }

  connectedCallback() {
    const title = this.shadowRoot.querySelector('.menu-section__item-title');
    const description = this.shadowRoot.querySelector('.menu-section__description');
    const price = this.shadowRoot.querySelector('.menu-section__price');

    if (this.itemData) {
      title.textContent = this.itemData.title;
      description.textContent = this.itemData.description;
      price.textContent = this.itemData.price;
    }
  }
}

customElements.define('menu-item', MenuItem);