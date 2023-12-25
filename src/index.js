import Phaser from 'phaser';

const config = {
  // webGL (Web graphics library) JS Api for rendering 2D and 3D graphic (part of almost every browser by default)
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade phisics plugin, manages phisics symulations
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

// Loading assets, such as images, music, animations ...
const VELOCITY = 200;

let bird = null;

let upperPipe = null;
let lowerPipe = null;
// debugger
let pipeVerticalDistanceRange = [150, 250];
let pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalDistanceRange);
let pipeVerticalPosition = Phaser.Math.Between(0 + 20, config.height - 20 - pipeVerticalDistance);
const flapVelocity = 250;
const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 }

function preload() {
  // 'this' context - scene
  // contains functions and properties we can use
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
  this.load.image('pipe', 'assets/pipe.png');
}

// Initializing your app
function create() {
  // x - 400
  // y - 300
  // key of the image
  this.add.image(0, 0, 'sky').setOrigin(0);
  // bird = this.physics.add.sprite(config.width / 10, config.height / 2, 'bird').setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'bird').setOrigin(0);
  bird.body.gravity.y = 400;

  // debugger
  upperPipe = this.physics.add.sprite(400, pipeVerticalPosition, 'pipe').setOrigin(0, 1);
  lowerPipe = this.physics.add.sprite(400, upperPipe.y + pipeVerticalDistance, 'pipe').setOrigin(0, 0);

  this.input.on('pointerdown', flap);
  this.input.keyboard.on('keydown_SPACE', flap);
}

function update(time, delta) {
  if (bird.y < -bird.height || bird.y > config.height) {
    restartPlayerPosition();
    bird.body.velocity.y = 0;
  }
  // if (bird.x >= config.width - bird.width) {
  //   bird.body.velocity.x = -VELOCITY;
  // } else if (bird.x <= 0) {
  //   bird.body.velocity.x = VELOCITY;
  // }
}

function restartPlayerPosition() {
  bird.x = initialBirdPosition.x
  bird.y = initialBirdPosition.y
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);