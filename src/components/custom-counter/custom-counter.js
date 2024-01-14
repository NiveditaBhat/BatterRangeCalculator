import "../../css/customCounter.css";

const templateString = `
<style></style>
<div class="counter">
<slot></slot>
  <button type="button" class="decrementButton"><img src="src/images/icon-thin-chevron-down.svg" width="25"
      height="8"></button>
  <input type="text" value="">
  <span class="staticText" />
  <button type="button" class="incrementButton"><img src="src/images/icon-thin-chevron-up.svg" width="25"
      height="8"></button>
</div>`;

class CounterWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["value", "staticValue"];
  }

  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = templateString;

    //  const template = document.getElementById("counter-template").content;

    // const style = document.createElement("style");
    // style.innerHTML = styles;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    // shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const value = this.getAttribute("value") || "";
    const staticValue = this.getAttribute("staticValue") || "";
    //  this.shadowRoot.querySelector("input").value = value;
    // this.shadowRoot.querySelector(".staticText").innerHTML = staticValue;
  }
}

customElements.define("custom-counter", CounterWebComponent);
