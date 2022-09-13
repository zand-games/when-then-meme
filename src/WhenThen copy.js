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

  // createRenderRoot() {
  //   return this;
  // }
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

          <emoji-selector
            id="when"
            @emoji_changed="${this.emoji_changed_when}"
          ></emoji-selector>
          <textarea
            class="text"
            @change=${this.whenchanged}
            style="background-color:${this._store.value.when_color}"
          ></textarea>
          <color-mood
            default="${this._store.value.when_color}"
            @color_changed="${this.when_update_color}"
          ></color-mood>
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
    return css`
      * {
        box-sizing: border-box;
      }

      /* Style the body */
      body {
        font-family: Arial;
        margin: 0;
      }

      /* Header/logo Title */
      .header {
        padding: 0.8em;
        text-align: center;
        background: #e4ebe9;
        color: black;
      }
      .header h1 {
        font-size: 2em;
        margin-bottom: 10px;
      }
      /* Style the top navigation bar */
      .navbar {
        display: flex;
        background-color: #333;
      }

      /* Style the navigation bar links */
      .navbar a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }

      /* Change color on hover */
      .navbar a:hover {
        background-color: #ddd;
        color: black;
      }

      /* Column container */
      .row {
        display: flex;
        flex-wrap: wrap;
      }

      /* Create two unequal columns that sits next to each other */
      /* Sidebar/left column */
      .side {
        flex: 30%;
        background-color: #f1f1f1;
        padding: 20px;
      }

      /* Main column */
      .main {
        flex: 70%;
        background-color: white;
        padding: 20px;
      }

      /* Fake image, just for this example */
      .text {
        background-color: #eeeeee;
        width: 90%;
        padding: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 80px;
      }

      /* Footer */
      .footer {
        padding: 20px;
        text-align: center;
        background: #ddd;
      }

      .flex-container {
        display: flex;
        flex-wrap: wrap;
        font-size: 30px;
        text-align: center;
      }

      .flex-item-left {
        /* background-color: #f1f1f1; */
        padding: 10px;
        flex: 50%;
      }

      .flex-item-right {
        /* background-color: rgb(248, 248, 248); */
        padding: 10px;
        flex: 50%;
      }

      /* Responsive layout - makes a one column-layout instead of a two-column layout */
      /* @media (max-width: 100px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
} */

      /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
      @media screen and (max-width: 700px) {
        .row,
        .navbar {
          flex-direction: column;
        }
      }
    `;
  }
}
