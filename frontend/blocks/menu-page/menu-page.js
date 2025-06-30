import MenuItem from "../menu-item/menu-item.js";

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

        <section class="menu-section" id="menu-list">
            <h1 class="menu-section__title"> MAKI </h1>
        </section>
    </div> 
</div>

`;

class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    this.observer = null;
    this.items = [];
    this.container = null;
    this.batchSize = 2;
    this.currentIndex = 0;
  }
  connectedCallback() {
    document.documentElement.style.setProperty("--dynamic-background", "black");
    this.container = this.shadowRoot.getElementById('menu-list');
    // data fake porque no tengo base de datos ni backend
    this.items = [
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
      {
        title: 'Item de prueba',
        description: 'Examen final de aplicaciones web',
        precio: '5 $'
      },
    ];

    this.showNextBatch();
    
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && this.currentIndex < this.items.length) {
        this.showNextBatch();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
  
    const sentinel = document.createElement("div");
    sentinel.style.height = '100px';
    sentinel.style.width = '100%';
  
    this.container.appendChild(sentinel);
    this.observer.observe(sentinel);
  }
  
  showNextBatch() {
    const endIndex = this.currentIndex + this.batchSize;
    const batch = this.items.slice(this.currentIndex, endIndex);
    batch.forEach(item => {
      const card = new MenuItem(item);
      this.container.insertBefore(card, this.container.lastChild);
    });
  
    this.currentIndex = endIndex;

    if (this.currentIndex >= this.items.length) {
      this.observer.disconnect();
    }
  }  
}

customElements.define("menu-page", MenuPage);