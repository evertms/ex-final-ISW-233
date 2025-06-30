const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./blocks/footer/footer.css">
    <div class="social-icons">
        <a href="https://www.instagram.com/evertms_/" target="_blank">
            <img src="./assets/pngs/ig.png" alt="Instagram" width="40">
        </a>

        <a href="https://www.facebook.com/evert.morenoserrate.5/" target="_blank"> 
            <img src="./assets/pngs/fb.png" alt="Facebook" width="40">                    
        </a>

        <a href="https://x.com/evertms_" target="_blank" >
            <img src="./assets/pngs/x.png" alt="Twitter" width="40">
        </a>
        
    </div>    
`

class Footer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define('footer-element', Footer);