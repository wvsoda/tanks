class Main {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.ctx = this.canvas.getContext("2d");
    this.game;
  }
}
var main = new Main();
