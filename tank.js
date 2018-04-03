class Tank extends GameObject {
  constructor(x,y,id) {
    super(x,y,32,32);
    this.health = 100;
    this.ammoInRound = 5;
    this.bullets = [];
    this.id;
  }
}
