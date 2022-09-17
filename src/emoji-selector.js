import { LitElement, html, css } from "lit";

export class EmojiSelector extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      color: { type: String },
      selectedCategory: { type: String },
      selectedItem: { type: Number },
    };
  }
  dispatchInput(Value) {
    this.dispatchEvent(
      new CustomEvent("emoji_changed", {
        bubbles: true,
        detail: Value,
      })
    );
  }

  constructor() {
    super();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "selectedCategory") {
        this.score = 0;
        this.script();
        this.selectDefault();

        var slider = this.shadowRoot.querySelector(".slider");
        var li = slider.querySelectorAll("ul li");
        this.dispatchInput(li[this.score].id);
      }
    });
  }

  firstUpdated() {
    super.firstUpdated();
  }
  script() {
    var slider = this.shadowRoot.querySelector(".slider");
    var li = slider.querySelectorAll("ul li");
    li.forEach((item) => (item.style.display = "inline-block"));

    slider.firstElementChild.style.width = li.length * 150 + 50 + "px";
  }
  selectDefault() {
    if (!this.selectedItem || this.selectedItem == 0) return;
    this.score = this.selectedItem - 1;
    var slider = this.shadowRoot.querySelector(".slider");
    var li = slider.querySelectorAll("ul li");
    for (let index = 0; index < this.score; index++) {
      li[index].style.display = "none";
    }
  }
  score = 0;
  scroll(e) {
    var slider = this.shadowRoot.querySelector(".slider");
    var li = slider.querySelectorAll("ul li");

    if (e.target.classList[1] == "right") {
      if (li[this.score].nextElementSibling == null) {
        li.forEach((item) => (item.style.display = "inline-block"));
        this.score = 0;
        this.dispatchInput(li[this.score].id);
        return;
      }
      li[this.score].style.display = "none";
      this.score++;
    }

    if (e.target.classList[1] == "left") {
      if (this.score == 0) {
        li.forEach((item) => (item.style.display = "none"));
        this.score = li.length - 1;
        li[this.score].style.display = "inline-block";
        this.dispatchInput(li[this.score].id);

        return;
      }
      li[this.score - 1].style.display = "inline-block";
      this.score--;
    }
    this.dispatchInput(li[this.score].id);
  }
  dictionary = {
    Crypto: ["bitcoin", "ethereum"],
    Animals: ["21", "19", "20", "22"],
    Emojis: ["1", "2", "3", "4", "5", "6"],
  };
  render() {
    debugger;
    return html` <div style="background-color:transparent" class="slider">
      <ul class="slide_list">
        ${this.dictionary[this.selectedCategory].map(
          (i) => html`<li id="${i}"><img src="./assets/${i}.png" /></li>`
        )}
      </ul>

      <button class="arrow left" @click=${this.scroll}>⇦</button>
      <button class="arrow right" @click=${this.scroll}>⇨</button>
    </div>`;
  }

  static get styles() {
    return css`
      .slider {
        /* background-color: #eeeeee; */
        position: relative;
        border-radius: 15px;

        /* padding: 20px 13px; */
        /* border: 1px solid #cccccc; */
        overflow: none;
        width: 130px;
        height: 180px;
        overflow-x: hidden;
        margin: 0px;
      }
      .slider ul li {
        display: inline-block;
      }
      .slider ul li img {
        width: 130px;
        height: 130px;
      }
      .slider .arrow {
        position: absolute;
        bottom: 35px;
        height: 30px;
        margin-top: -15px;
        padding: 0;
        background: #ddd;
        border-radius: 15px;
        border: 1px solid gray;
        font-size: 24px;
        color: #444;
      }
      .slider .arrow.right {
        right: 2px;
      }
      .slider .arrow.left {
        left: 2px;
      }
      .slider .arrow:focus {
        outline: none;
      }
      .slider .arrow:hover {
        background: #ccc;
        cursor: pointer;
      }
      .slide_list {
        background-color: transparent;
        padding: 0px;

        margin-top: 25px;
      }
    `;
  }
}

customElements.define("emoji-selector", EmojiSelector);
