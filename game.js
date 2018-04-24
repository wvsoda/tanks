class Game {
  constructor(main) {
    this.gameObjects = [];
	this.players = {}
	this.main = main
	this.drawAll = this.drawAll.bind(this)
	this.keyPressed = this.keyPressed.bind(this)
	window.onKeyDown = this.keyPressed;
	document.addEventListener('keydown', this.keyPressed)

  }
  drawAll() {
	if (this.gameObjects) {
		this.main.ctx.clearRect(0,0,this.main.canvas.width, this.main.canvas.height)
		for (var i = 0; i < this.gameObjects.length; i++) {
		  this.gameObjects[i].draw();
		}
	}
	requestAnimationFrame(this.drawAll)


  }
  addPlayer(player) {
  	  this.gameObjects.push(player);
	  console.log(player.id)
	  this.players[player.id] = player
  }
    
  tankShoot(tankId,x,y,angle, main, tank) {
      var bullet = new Bullet(tankId,x,y,angle, main);
      tank.bullets.push(bullet)
      
      this.gameObjects.push(bullet);
  }
    
  keyPressed(e) {
    var key = e.keyCode ? e.keyCode : e.which;
	var direction = "";
	switch(key) {
		case 38: case 87: direction = "up"; break;
		case 40: case 83: direction = "down"; break;
		case 39: case 68: direction = "right"; break;
		case 37: case 65: direction = "left"; break;
	}
	if (key >= 37 && key <=40) {
		this.players["p1"].move(direction);
	}
	else if(key == 65 || key == 68 || key == 83 || key == 87) {
		this.players["p2"].move(direction);
	}
  }
}
