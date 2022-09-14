import { writable } from "svelte/store";

export class ThenWhenData {
  constructor() {
    this.then_txt = "";
    this.when_txt = "";

    this.when_face = "15";
    this.then_face = "8";

    this.when_color = "#d7ffc4ff";
    this.then_color = "#d9ddffff";

    this.city = "connection.png";
  }
}

export let store = writable(new ThenWhenData());
