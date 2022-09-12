import { LitElement, html, css } from "lit";
export class ColorMood extends LitElement {
  dispatchInput(rgba_Value) {
    this.dispatchEvent(
      new CustomEvent("color_changed", {
        bubbles: true,
        detail: rgba_Value,
      })
    );
  }
  static get properties() {
    return {
      default: { type: String },
    };
  }
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    var element = this.shadowRoot.getElementById("colorWheel");
    var colorWheel = new iro.ColorPicker(element, {
      width: 250,
      color: this.default ? this.default : "rgb(255,255,255)",
      borderWidth: 1,
      borderColor: "#fff",
      layout: [
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "hue",
          },
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "saturation",
          },
        },
        // {
        //   component: iro.ui.Slider,
        //   options: {
        //     sliderType: "value",
        //   },
        // },
        // {
        //   component: iro.ui.Slider,
        //   options: {
        //     sliderType: "alpha",
        //   },
        // },
      ],
    });
    // add color:change listener
    colorWheel.on("color:change", (color) => {
      //debugger;
      const result =
        color.rgb.r + ";" + color.rgb.g + ";" + color.rgb.b + ";" + "non-sense";
      this.dispatchInput(color.hex8String);
    });

    // colorWheel.color.hsl = { h: 100, s: 100, l: 100 };
  }

  render() {
    return html` <div id="colorWheel"></div> `;
  }
}

customElements.define("color-mood", ColorMood);
