import { LitElement, html, css } from "lit";
export class EmojiSelector extends LitElement {
  static get properties() {
    return {
      id: { type: String },
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
  // createRenderRoot() {
  //   return this;
  // }
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    this.script();
    // debugger;
    // this.slider = this.shadowRoot.querySelector(".slider");
  }
  slider = 123;
  //li = slider.querySelectorAll("ul li")
  script() {
    var slider = this.shadowRoot.querySelector(".slider");
    var li = slider.querySelectorAll("ul li");
    //var leftBtn = slider.querySelector("button.left");
    //var rightBtn = slider.querySelector("button.right");
    //var score = 0;
    //alert(li.length * 150 + 50 + "px");
    slider.firstElementChild.style.width = li.length * 150 + 50 + "px";
    //</li>slider.firstElementChild.style.width = li.length * 150 + 50 + "px";
  }
  score = 0;
  scroll(e) {
    var slider = this.shadowRoot.querySelector(".slider");
    var li = slider.querySelectorAll("ul li");

    if (e.target.classList[1] == "down") {
      if (li[this.score].nextElementSibling == null) return;
      li[this.score].style.display = "none";
      this.score++;
    }

    if (e.target.classList[1] == "top") {
      if (this.score == 0) return;
      li[this.score - 1].style.display = "inline-block";
      this.score--;
    }
  }

  render() {
    return html` <div class="slider">
      <ul class="slide_list">
        <li><img src="https://js.cx/carousel/1.png" /></li>
        <li><img src="https://js.cx/carousel/2.png" /></li>
        <li><img src="https://js.cx/carousel/3.png" /></li>
        <li><img src="https://js.cx/carousel/4.png" /></li>
        <li><img src="https://js.cx/carousel/5.png" /></li>
        <li><img src="https://js.cx/carousel/6.png" /></li>
        <li><img src="https://js.cx/carousel/7.png" /></li>
        <li><img src="https://js.cx/carousel/8.png" /></li>
        <li><img src="https://js.cx/carousel/9.png" /></li>
        <li><img src="https://js.cx/carousel/10.png" /></li>
      </ul>
      <button class="arrow top" @click=${this.scroll}>⇧</button>
      <button class="arrow down" @click=${this.scroll}>⇩</button>
    </div>`;
  }

  static get styles() {
    return css`
      .slider {
        /* background-color: #eeeeee; */
        position: relative;
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
        /* top: 50%; */
        height: 30px;
        /* margin-top: -15px; */
        width: 1.2em;
        left: 40%;
        padding: 0;
        background: #ddd;
        border-radius: 15px;
        border: 1px solid gray;
        font-size: 24px;
        color: #444;
      }
      .slider .arrow.down {
        bottom: 7px;
      }
      .slider .arrow.top {
        top: 0px;
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
