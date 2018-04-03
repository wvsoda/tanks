class GameObject {
  constructor(x,y,w,h) {
    this.height = h;
    this.width = w;
    this.position = new Position(x,y);
  }
  draw() {
    main.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
