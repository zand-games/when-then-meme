import { LitElement, html, css } from "lit";
import { StoreSubscriber } from "lit-svelte-stores";
import { Canvg } from "https://cdn.skypack.dev/canvg";
import "./city-selector";
import "./color-mood";
import "./emoji-selector";
import "./meme-svg";
import "./store";
import "./meme-svgresult";
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
  fontChanged(e) {
    store.update((val) => {
      val.when_font = e.target.options[e.target.selectedIndex].text;
      return val;
    });
  }
  fontsizeChanged(e) {
    store.update((val) => {
      val.when_fontsize = e.target.options[e.target.selectedIndex].text;
      return val;
    });
  }
  render() {
    return html`
      <table>
        <tr>
          <td colspan="2">
            <h1>WHEN THEN meme</h1>
            <h3><a href="http://zand.games/" target="_blank">Zand.Games</a></h3>
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
          <td colspan="2">
            <meme-svg></meme-svg>
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
        <tr>
          <td class="btncontainer" colspan="2">
            <button
              class="button instagram"
              id="insta_story"
              @click="${this.export_svg_to_img}"
              value="export for instagram story"
            >
              Download Meme
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <meme-svgresult
              style="visibility:hidden !important"
            ></meme-svgresult>
          </td>
        </tr>
      </table>

      <canvas style="visibility:hidden;" id="myCanvas"></canvas>
      <div style="text-align:center;">
        <a id="link"></a>
      </div>
    `;
  }
  async export_svg_to_img(e) {
    this.svg_textMultiline("svgwhentext", this._store.value.when_txt);
    this.svg_textMultiline("svgthentext", this._store.value.then_txt);

    const canvas = this.shadowRoot.querySelector("canvas");
    const svg = this.shadowRoot.getElementById("svgresult");
    let svg_content = "";

    svg_content = this.resize_svg("1080", "1920");
    const ctx = canvas.getContext("2d");

    let v = Canvg.fromString(ctx, svg_content);

    v.start();
    await new Promise((r) => setTimeout(r, 1000));

    var link = this.shadowRoot.getElementById("link");
    link.style.display = "none";
    link.setAttribute("download", "when-then-meme.png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
    v.stop();
  }

  resize_svg(width, height) {
    const svg = this.shadowRoot.getElementById("hedosvg");
    var cloned_svg = svg.cloneNode(true);
    cloned_svg.setAttribute("width", width);
    cloned_svg.setAttribute("height", height);
    var s = new XMLSerializer();
    var str = s.serializeToString(cloned_svg);

    return str;
  }
  static get styles() {
    return css`
      .button {
        margin: 5px;
        border: none;
        color: white;
        background-color: rgb(92, 102, 108);
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        border-radius: 15px;
        font-size: 16px;
      }
      button:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      .btncontainer {
        padding-top: 1.5em;
        text-align: center;
      }

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
        /* height: 180px; */
        max-width: 220px;
        height: 180px;
        max-height: 180px;
        border-radius: 15px;
      }

      textarea {
        resize: none;
        border-radius: 15px;
        font-size: 1.2em;
        display: flex;
        border: 1px solid #d7d6d6;
        background: #fff;
        width: 220px;
        max-width: 220px;
        max-height: 300px;
        padding: 10px 10px 10px 65px;
        /* font-family: "Comfortaa", "Trebuchet MS", "Lucida Sans Unicode",
          "Lucida Grande", "Lucida Sans", Arial, sans-serif !important; */
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
        font-family: "Carter One", "Trebuchet MS", "Lucida Sans Unicode",
          "Lucida Grande", "Lucida Sans", Arial, sans-serif !important;
      }
    `;
  }

  svg_textMultiline(controlId, value) {
    var x = 0;
    var y = 25;
    var width = 200;
    var lineHeight = 20;

    /* get the text */
    var element = this.shadowRoot.getElementById(controlId);
    var text = value; //element.innerHTML;

    /* split the words into array */
    var words = text.split(" ");
    var line = "";

    /* Make a tspan for testing */
    element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var testElem = this.shadowRoot.getElementById("PROCESSING");
      /*  Add line in testElement */
      testElem.innerHTML = testLine;
      /* Messure textElement */
      var metrics = testElem.getBoundingClientRect();
      let testWidth = metrics.width;

      if (testWidth > width && n > 0) {
        element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + "</tspan>";
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }

    element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + "</tspan>";
    this.shadowRoot.getElementById("PROCESSING").remove();
  }
}
