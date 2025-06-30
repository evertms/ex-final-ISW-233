const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./blocks/menu-page/menu-page.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Forum&display=swap">
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi"> 
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap">

<div class="menu-layout">
    <div class="menu-layout__background-panel">
        <header-bar></header-bar>
        <div class="menu-layout__hero-title"> MENU </div>
    </div>

    <div class="menu-layout__content-panel">
        <div class="menu-layout__categories">
            <button class="menu-layout__btn"> All </button>
            <button class="menu-layout__btn"> MAKI </button>
            <button class="menu-layout__btn"> URAMAKI </button>
            <button class="menu-layout__btn"> SPECIAL ROLLS </button>
        </div>

        <section class="menu-section">
            <h1 class="menu-section__title"> MAKI </h1>
            <div class="menu-section__item"> 
                <div class="menu-section__image"></div>
                <div class="menu-section__info">
                    <h2 class="menu-section__item-title"> Title Product </h2>
                    <div class="menu-section__description">texto de descripcion afsodjifb </div>
                </div>
                <div class="menu-section__price">5$</div>
            </div>
            <div class="menu-section__item"> 
                <div class="menu-section__image"></div>
                <div class="menu-section__info">
                    <h2 class="menu-section__item-title"> Title Product </h2>
                    <div class="menu-section__description">texto de descripcion afsodjifb </div>
                </div>
                <div class="menu-section__price">5$</div>
            </div>
        </section>

        <section class="menu-section">
            <h1 class="menu-section__title"> URAMAKI </h1>
            <div class="menu-section__item"> 
                <div class="menu-section__image"></div>
                <div class="menu-section__info">
                    <h2 class="menu-section__item-title"> Title Product </h2>
                    <div class="menu-section__description">texto de descripcion afsodjifb </div>
                </div>
                <div class="menu-section__price">5$</div>
            </div>
        </section>

        <section class="menu-section">
            <h1 class="menu-section__title"> SPECIAL ROLLS </h1>             
            <div class="menu-section__item"> 
                <div class="menu-section__image"></div>
                <div class="menu-section__info">
                    <h2 class="menu-section__item-title"> Title Product </h2>
                    <div class="menu-section__description">texto de descripcion afsodjifb </div>
                </div>
                <div class="menu-section__price">5$</div>
            </div>
        </section>
    </div> 
</div>

`;

class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "closed" }).appendChild(template.content.cloneNode(true));
  }
    connectedCallback() {
        document.documentElement.style.setProperty("--dynamic-background", "black");
  }  
}

customElements.define("menu-page", MenuPage);