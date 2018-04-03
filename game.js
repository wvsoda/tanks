class Game {
  constructor() {
    this.gameObjects = [];
  }
  drawAll() {
    for (var i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects.draw();
    }
  }
}
