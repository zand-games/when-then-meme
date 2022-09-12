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
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    this.script();
  }
  script() {
    var item = $(".carousel_" + this.id);

    item.jCarouselLite({
      btnNext: ".next_" + this.id,
      btnPrev: ".prev_" + this.id,
      vertical: true,
      circular: true,
      visible: 1,
      mouseWheel: true,
      autoWidth: true,
      afterEnd: (a, direction) => {
        const val = $(".carousel_" + this.id + " li.active").attr("name");
        this.dispatchInput(val);
      },
    });
  }
  render() {
    return html`
      <a href="#" class="prev_${this.id}">&uarr;</a>
      <div class="carousel">
        <div id="${this.id}" class="carousel_${this.id}">
          <ul class="slides">
            <li class="slide1" name="Happy-Peace-Smiley-Face.svg">
              <img
                src="./assets/Happy-Peace-Smiley-Face.svg"
                alt="1"
                height="60px"
              />
            </li>
            <li class="slide1" name="Laughing-Smiley-Face-Silhouette.svg">
              <img
                src="./assets/Laughing-Smiley-Face-Silhouette.svg"
                alt="2"
                height="60px"
              />
            </li>
            <li class="slide1" name="Petrified-Smiley-Face-Silhouette.svg">
              <img
                src="./assets/Petrified-Smiley-Face-Silhouette.svg"
                alt="3"
                height="60px"
              />
            </li>
            <li class="slide1" name="winking-smiley-face.svg">
              <img
                src="./assets/winking-smiley-face.svg"
                alt="3"
                height="60px"
              />
            </li>
            <li class="slide1" name="Yawning-Smiley-Face.svg">
              <img
                src="./assets/Yawning-Smiley-Face.svg"
                alt="3"
                height="60px"
              />
            </li>
          </ul>
        </div>
      </div>
      <a href="#" class="next_${this.id}">&darr;</a>
    `;
  }

  static get styles() {
    return css``;
  }
}

customElements.define("emoji-selector", EmojiSelector);
