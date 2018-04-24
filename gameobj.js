class GameObject {
  constructor(x,y,w,h,main) {
    this.height = h;
    this.width = w;
    this.position = new Position(x,y);
	this.angle = 0
	this.main = main;
  }
  draw() {
    this.main.ctx.save()
    let xCenter = this.x//+ (this.width / 2)
    let yCenter = this.y //+ (this.height / 2)
	this.main.ctx.translate(xCenter, yCenter)
	this.main.ctx.rotate(this.angle)
  	this.main.ctx.translate(-1 * xCenter, -1 * yCenter)

    this.main.ctx.fillRect(this.position.x - (this.width/2), this.position.y - (this.height/2), this.width, this.height);
	//this.main.ctx.rotate(-1*this.angle)
    this.main.ctx.restore()

  }
}
