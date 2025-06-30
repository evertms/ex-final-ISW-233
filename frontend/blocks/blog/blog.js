import BlogCard from "../blog-card/blog-card.js";
const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./blocks/blog/blog.css">

<div class="blog-layout">
  <div class="blog-layout__fondo">
    <header-bar></header-bar>
    <div class="blog-layout__name">BLOG</div>
  </div>

  <div class="blog-layout__contenido" id="blog-list">
    <h1 class="blog-container__title">BEHIND THE SCENES</h1>
    <h1 class="blog-container__title2">& LATEST NEWS</h1>
    <div class="blog-layout__categorias">
      <button class="blog-layout__btn"> ALL NEWS </button>
      <button class="blog-layout__btn"> FAVORITIES </button>
      <button class="blog-layout__btn"> MY ARTICLES </button>
    </div>
  </div>
</div>
`;

class BlogPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    this.observer = null;
    this.blogs = [];
    this.container = null;
    this.batchSize = 2;
    this.currentIndex = 0;
  }
  connectedCallback() {
    document.documentElement.style.setProperty("--dynamic-background", "black");
    this.container = this.shadowRoot.getElementById('blog-list');
    // Data fake pq no tengo base de datos
    this.blogs = 
    [ 
      {
        id: 1,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 2,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 3,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 4,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 5,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 6,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 7,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 8,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 9,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
      {
        id: 10,
        fecha: "24TH AUG 2023",
        titulo: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
        descripcion: "Probando 123",
        autor: "Evert MS"
      },
    ];

    this.showNextBatch();

    this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && this.currentIndex < this.blogs.length) {
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
    const batch = this.blogs.slice(this.currentIndex, endIndex);
    batch.forEach(blog => {
      const card = new BlogCard(blog);
      this.container.insertBefore(card, this.container.lastChild);
    });

    this.currentIndex = endIndex;

    if (this.currentIndex >= this.blogs.length) {
      this.observer.disconnect();
    }
  }
}

customElements.define("blog-page", BlogPage);
