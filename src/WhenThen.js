import { LitElement, html, css } from "lit";
import { StoreSubscriber } from "lit-svelte-stores";

import "./city-selector";
import "./color-mood";
import "./emoji-selector";
import "./meme-svg";
import "./store";
import { store } from "./store";
export class WhenThen extends LitElement {
  _store = new StoreSubscriber(this, () => store);

  createRenderRoot() {
    return this;
  }
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "When Then meme";
  }
  clicked(e) {
    alert(e.target.id);
  }
  whenchanged(e) {
    store.update((val) => {
      val.when_txt = e.target.value;
      return val;
    });
  }
  thenchanged(e) {
    //console.log(e.target.value);
    store.update((val) => {
      val.then_txt = e.target.value;
      return val;
    });
  }
  when_update_color(e) {
    store.update((val) => {
      val.when_color = e.detail;
      return val;
    });
  }
  then_update_color(e) {
    store.update((val) => {
      val.then_color = e.detail;
      return val;
    });
  }

  emoji_changed_when(e) {
    store.update((val) => {
      val.when_face = e.detail;
      return val;
    });
  }
  emoji_changed_then(e) {
    store.update((val) => {
      val.then_face = e.detail;
      return val;
    });
  }
  city_changed(e) {
    store.update((val) => {
      val.city = e.detail;
      return val;
    });
  }
  render() {
    return html`
      <!-- Header -->
      <div class="header">
        <h1>WHEN THEN meme</h1>
        <p><a target="_blank" href="http://zand.games/">Zand.Games</a></p>
      </div>

      <!-- The flexible grid (content) -->
      <div class="row">
        <div class="main">
          <p class="when_title">WHEN</p>

          <div class="flex-container">
            <div class="flex-item-left">
              <emoji-selector
                id="when"
                @emoji_changed="${this.emoji_changed_when}"
              ></emoji-selector>
            </div>
            <div class="flex-item-right">
              <color-mood
                default="${this._store.value.when_color}"
                @color_changed="${this.when_update_color}"
              ></color-mood>
            </div>
          </div>

          <textarea
            class="text"
            @change=${this.whenchanged}
            style="background-color:${this._store.value.when_color}"
          ></textarea>
          <br />
          <br />
          <br />
          <p class="then_title">THEN</p>
          <div class="flex-container">
            <div class="flex-item-left">
              <emoji-selector
                id="then"
                @emoji_changed="${this.emoji_changed_then}"
              ></emoji-selector>
            </div>
            <div class="flex-item-right">
              <color-mood
                default="${this._store.value.then_color}"
                @color_changed="${this.then_update_color}"
              ></color-mood>
            </div>
          </div>
          <textarea
            @change=${this.thenchanged}
            class="text"
            style="background-color:${this._store.value.then_color}"
          ></textarea>

          <!-- <div class="svgviewer">
            <meme-svg></meme-svg>
          </div> -->
        </div>
      </div>

      <!-- Footer -->
      <!-- <div class="footer">
        <h2>Footer</h2>
      </div> -->
    `;
  }

  static get styles() {
    return css``;
  }
}
