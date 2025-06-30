const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./blocks/blog-card/blog-card.css">
<div class="blog-article" id="componente-detalle">
    <div id="image-article" class="blog-article__image-wrapper">
        <img src="/frontend/assets/images/ct-4.jpg" class="blog-article__image">
        <button class="favorite-button" aria-label="Añadir a favoritos">
            <svg class="favorite-icon" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </button>                
    </div>

    <div class="blog-article__description-wrapper">
        <p id="fecha-articulo" class="blog-article__date"></p>
        <h1 class="blog-article__title" id="titulo-articulo"></h1>
        <p id="description-articulo" class="blog-article__description"></p>
        <p id="description-articulo" class="blog-article__autor">Author:</p>
    </div>
</div>
`;

export default class BlogCard extends HTMLElement {
    constructor(blogData) {
        super();
        this.attachShadow({ mode: 'open'}).appendChild(template.content.cloneNode(true));
        this.blogData = blogData;
    }

    connectedCallback() {
        const fecha = this.shadowRoot.querySelector('.blog-article__date');
        const titulo = this.shadowRoot.querySelector('.blog-article__title');
        const descripcion = this.shadowRoot.querySelector('.blog-article__description');
        const autor = this.shadowRoot.querySelector('.blog-article__autor');

        if (this.blogData) {
            fecha.textContent = this.blogData.fecha;
            titulo.textContent = this.blogData.titulo;
            descripcion.textContent = this.blogData.descripcion;
            autor.textContent = this.blogData.autor;
        }
    }
}

customElements.define('blog-card', BlogCard);