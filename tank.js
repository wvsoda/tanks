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
	}
  }

  /*draw() {
    super.draw();
    // // TODO: Add later
  }*/
}
