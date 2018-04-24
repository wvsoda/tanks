class Bullet extends GameObject {
  constructor(tankId, x,y, angle, main) {
    super(x,y,32,32,main);
    this.health = 100;
    this.ammoInRound = 5;
    this.bullets = [];
    this.id = id;
    this.velocity = 10;
  }


  draw() {
    super.draw();
    this.x += this.velocity * Math.cos(this.angle)
    this.y += -1 * this.velocity * Math.sin(this.angle)
    // // TODO: Add later
  }
}
