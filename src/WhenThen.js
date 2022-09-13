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
      <table>
        <tr>
          <td colspan="2">
            <h1>WHEN THEN meme</h1>
            <h3>Zand.Games</h3>
          </td>
        </tr>
        <tr class="when">
          <td>
            <emoji-selector
              id="when"
              @emoji_changed="${this.emoji_changed_when}"
              selectedItem="8"
            ></emoji-selector>
          </td>
          <td>
            <div class="input-box">
              <textarea
                value=""
                autofocus="autofocus"
                id="txtwhen"
                maxlength="155"
                placeholder="you face a new opportunity."
                @change="${this.whenchanged}"
                style="background-color:${this._store.value.when_color}"
              ></textarea>
              <span class="unit">WHEN, </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tdcolor">
            <color-mood
              default="${this._store.value.when_color}"
              @color_changed="${this.when_update_color}"
            ></color-mood>
          </td>
        </tr>
        <tr>
          <td class="splitter"></td>
        </tr>
        <tr class="then">
          <td>
            <emoji-selector
              id="then"
              @emoji_changed="${this.emoji_changed_when}"
              selectedItem="7"
            ></emoji-selector>
          </td>
          <td>
            <div class="input-box">
              <textarea
                value=""
                autofocus="autofocus"
                id="txtthen"
                maxlength="155"
                placeholder="don't jump immediately. Follow your needs."
                @change="${this.thenchanged}"
                style="background-color:${this._store.value.then_color}"
              ></textarea>
              <span class="unit">THEN, </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tdcolor">
            <color-mood
              default="${this._store.value.then_color}"
              @color_changed="${this.then_update_color}"
            ></color-mood>
          </td>
        </tr>
      </table>
      <!-- Header -->
    `;
  }

  static get styles() {
    return css`
      ::placeholder {
        opacity: 0.4;
      }
      .splitter {
        padding-top: 50px;
      }
      .tdcolor {
        text-align: right;
        margin-right: 1em;
      }
      table {
        margin-left: auto;
        margin-right: auto;
      }
      .input-box {
        position: relative;
        display: flex;
        background-color: green;
        height: 180px;
        border-radius: 15px;
      }

      textarea {
        resize: none;
        border-radius: 15px;
        font-size: 1.2em;
        display: flex;
        border: 1px solid #d7d6d6;
        background: #fff;
        width: 80%;
        padding: 10px 10px 10px 65px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif !important;
      }
      .unit {
        position: absolute;
        display: flex;
        font-size: 1.2em;
        color: black;
        left: 5px;
        top: 10px;
        z-index: 9;
        color: #656563;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif !important;
      }
    `;
  }
}
