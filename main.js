class Main {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.game = new Game(this);
        this.p1 = new Tank(0,0,"p1", this);
        this.p2 = new Tank(100,0,"p2", this);
        this.game.addPlayer(this.p1);
        this.game.addPlayer(this.p2)
        this.game.drawAll();


    }
    
}
var main = new Main();
