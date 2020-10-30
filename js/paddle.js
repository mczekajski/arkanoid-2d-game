export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.width = 150;
        this.height = 30;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 20,
        }

        this.maxSpeed = 10;
        this.speed = 0;
    }

    stop() {
        this.speed = 0;
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx) {
        ctx.fillStyle = '#000';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = '#4af';
        ctx.fillRect(this.position.x + 1, this.position.y + 1, this.width - 2, this.height - 2);
    }

    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }

}