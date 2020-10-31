import {
    detectCollision
} from './collisionDetection.js';

export default class Ball {
    constructor(game) {
        this.image = document.getElementById("img_ball");
        this.size = 20;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.speed = {
            x: 0,
            y: 0,
        };

        this.position = {
            x: 10,
            y: 350,
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        // wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x <= 0) {
            this.speed.x = -this.speed.x;
        }

        // top of the game
        if (this.position.y <= 0) {
            this.speed.y = -this.speed.y;
        }

        // bottom of the game
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }

    reset(ballSpeed) {
        this.position = {
            x: 10,
            y: 350
        };
        this.speed = {
            x: ballSpeed,
            y: -ballSpeed
        };
    }
}