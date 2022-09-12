import { LitElement, html, css } from "lit";
export class CitySelector extends LitElement {
  static get properties() {
    return {
      id: { type: String },
    };
  }
  dispatchInput(Value) {
    this.dispatchEvent(
      new CustomEvent("city_changed", {
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
            <li class="slide1" name="connection.png">
              <img src="./assets/connection.png" alt="1" height="60px" />
            </li>
            <li class="slide1" name="freedom.png">
              <img src="./assets/freedom.png" alt="2" height="60px" />
            </li>
            <li class="slide1" name="pleasure.png">
              <img src="./assets/pleasure.png" alt="3" height="60px" />
            </li>
            <li class="slide1" name="creativity.png">
              <img src="./assets/creativity.png" alt="3" height="60px" />
            </li>
            <li class="slide1" name="fear.png">
              <img src="./assets/fear.png" alt="3" height="60px" />
            </li>
            <li class="slide1" name="trust.png">
              <img src="./assets/trust.png" alt="3" height="60px" />
            </li>
            <li class="slide1" name="harmoney.png">
              <img src="./assets/harmoney.png" alt="3" height="60px" />
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

customElements.define("city-selector", CitySelector);
