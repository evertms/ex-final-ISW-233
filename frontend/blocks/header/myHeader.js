import BaseHTMLElement from "../base/BaseHTMLElement.js";

export default class MyHeader extends BaseHTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.load();
  }

  async load() {
    await this.loadHTML("/frontend/blocks/header/myHeader.template");
  }
}

customElements.define("my-header", MyHeader);