import { writable } from "svelte/store";

export class ThenWhenData {
  constructor() {
    this.then_txt = "";
    this.when_txt = "";

    this.then_face = "Laughing-Smiley-Face-Silhouette.svg";
    this.when_face = "Laughing-Smiley-Face-Silhouette.svg";

    this.when_color = "#f7ffebff";
    this.then_color = "#d9ddffff";

    this.city = "connection.png";
  }
}

export let store = writable(new ThenWhenData());
