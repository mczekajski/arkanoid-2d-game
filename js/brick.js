import {
    detectCollision
} from './collisionDetection.js';

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById("img_bricks");
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.position = position;
        this.markedForDeletion = false;
    }

    update() {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}