import { writable } from "svelte/store";

export class ThenWhenData {
  constructor() {
    this.when_txt = "type here...";
    this.then_txt = "type here...";

    this.when_face = "1";
    this.then_face = "1";

    this.when_color = "#d7ffc4ff";
    this.then_color = "#d9ddffff";

    this.city = "connection.png";

    this.when_font = "Carter One";
    this.then_font = "Carter One";

    this.when_fontsize = "19";
    this.then_fontsize = "19";
  }
}

export let store = writable(new ThenWhenData());
