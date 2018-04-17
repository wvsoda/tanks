class GameObject {
  constructor(x,y,w,h,main) {
    this.height = h;
    this.width = w;
    this.position = new Position(x,y);
	this.angle = 0
	this.main = main;
  }
  draw() {
	this.main.ctx.translate(this.x + (this.width/2), this.y + (this.height/2))
	this.main.ctx.rotate(this.angle)
    this.main.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	this.main.ctx.rotate(-1*this.angle)
	this.main.ctx.translate(-this.x, -this.y)
  }
}
