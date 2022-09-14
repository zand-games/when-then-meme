import { LitElement, html, css } from "lit";
import { store } from "./store";
import { StoreSubscriber } from "lit-svelte-stores";
export class MemeSVG extends LitElement {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
  }
  _store = new StoreSubscriber(this, () => store);

  render() {
    return html`
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 600 450"
      >
        <g>
          <g id="when">
            <path
              transform="rotate(180 105.055 357.591)"
              stroke="#000"
              id="svg_18"
              d="m5.14863,291.14795l0,0c0,-11.21715 10.25057,-20.31043 22.89529,-20.31043l10.40696,0l0,0l49.95337,0l93.66257,0c6.07223,0 11.89573,2.13984 16.18943,5.94878c4.29369,3.80895 6.70588,8.97499 6.70588,14.36166l0,50.7761l0,0l0,30.46566l0,0c0,11.21715 -10.25057,20.31043 -22.89531,20.31043l-93.66256,0l-65.25793,51.64472l15.30455,-51.64472l-10.40695,0c-12.64473,0 -22.8953,-9.09329 -22.8953,-20.31043l0,0l0,-30.46566l0,0l0,-50.7761l0,-0.00001z"
              fill="${this._store.value.when_color}"
            />
            <ellipse
              visibility="${this._store.value.when_face <= 10
                ? "hidden"
                : "visible"}"
              transform="rotate(180 202.692 223.66)"
              stroke="#000"
              y="43.67086"
              rx="43.67086"
              id="svg_19"
              cy="223.65982"
              cx="202.69171"
              fill="${this._store.value.when_color}"
            />
          </g>

          <g id="then">
            <path
              stroke="#000"
              id="svg_1"
              d="m406.50722,25.34762l0,0c0,-11.51438 9.77884,-20.84863 21.84166,-20.84863l9.92803,0l0,0l47.65454,0l89.35223,0c5.79278,0 11.34829,2.19654 15.4444,6.10642c4.09609,3.90988 6.39727,9.21281 6.39727,14.74221l0,52.12159l0,0l0,31.27294l0,0c0,11.51439 -9.77884,20.84863 -21.84166,20.84863l-89.35223,0l-62.25477,53.01323l14.60024,-53.01323l-9.92803,0c-12.06281,0 -21.84166,-9.33424 -21.84166,-20.84863l0,0l0,-31.27294l0,0l-0.00001,-52.12159l-0.00001,0z"
              fill="${this._store.value.then_color}"
            />
            <ellipse
              visibility="${this._store.value.then_face <= 10
                ? "hidden"
                : "visible"}"
              stroke="#000"
              ry="43.67086"
              rx="43.67086"
              id="svg_4"
              cy="225"
              cx="394.9846"
              fill="${this._store.value.then_color}"
            />
          </g>
        </g>
        <text x="20" y="355" style="fill:black">
          ${this._store.value.when_txt}
        </text>

        <text x="420" y="50" style="fill:black">
          ${this._store.value.then_txt}
        </text>
        <image
          href="../assets/${this._store.value.when_face}.png"
          x="160"
          y="185"
          height="80"
          width="80"
        />
        <image
          href="../assets/${this._store.value.then_face}.png"
          x="355"
          y="185"
          height="80"
          width="80"
        />
      </svg>
    `;
  }
}

customElements.define("meme-svg", MemeSVG);
