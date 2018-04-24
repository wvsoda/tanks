class Tank extends GameObject {
  constructor(x,y,id,main) {
    super(x,y,32,32,main);
    this.health = 100;
    this.ammoInRound = 5;
    this.bullets = [];
    this.id = id;
  }

  move(direction) {
	switch(direction) {
		case "up": this.position.y -= 10; break;
		case "down": this.position.y += 10; break;
		case "right": this.angle-=0.01; break;
		case "left": this.angle+=0.01; break;
        case "shoot":
            if (this.ammoInRound != 0) {
                this.main.game.tankShoot(this.id, this.x + (this.width/2), this. y, this.angle, this.main, this);
                this.ammoInRound--;
            }
            break;
	}
  }

  draw() {
    //this.main.ctx.save()
    let xCenter = this.x + (this.width / 2)
    let yCenter = this.y  + (this.height / 2)
	this.main.ctx.translate(xCenter, yCenter)
	this.main.ctx.rotate(this.angle)
//    var image = new Image()
//    var self = this
//    image.onload = function(event) {
//        self.main.ctx.fillRect(self.position.x - (self.width/2), self.position.y - (self.height/2), self.width, self.height);
//        //self.main.ctx.drawImage(image, this.x, this.y)//(this, self.x, self.y, self.width, self.height)
//    }
//    image.src = "tank.png"
    //this.main.ctx.drawImage(img, this.x, this.y, this.width, this.height)
    this.main.ctx.fillRect(-(this.width/2), -(this.height/2), this.width, this.height);
    this.main.ctx.translate(-xCenter,-yCenter)
	//this.main.ctx.rotate(-1*this.angle)
    //this.main.ctx.restore()

  }
}
