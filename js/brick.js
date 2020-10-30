export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById("img_bricks");
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.position = position;
    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}