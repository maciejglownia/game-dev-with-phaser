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
const PIPES_TO_RENDER = 4;

let bird = null;
let pipeHorizontalDistance = 0;
let pipeVerticalDistanceRange = [150, 250];

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
  // key of the image
  this.add.image(0, 0, 'sky').setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'bird').setOrigin(0);
  bird.body.gravity.y = 400;

  for (let i = 0; i < PIPES_TO_RENDER; i++) {
    const upperPipe = this.physics.add.sprite(0,0, 'pipe').setOrigin(0, 1);
    const lowerPipe = this.physics.add.sprite(0,0, 'pipe').setOrigin(0, 0);

    placePipe(upperPipe, lowerPipe)
  }


  this.input.on('pointerdown', flap);
  this.input.keyboard.on('keydown_SPACE', flap);
}

function update(time, delta) {
  if (bird.y < -bird.height || bird.y > config.height) {
    restartPlayerPosition();
    flap();
  }
}

function placePipe(uPipe, lPipe) {
  pipeHorizontalDistance += 400;
  let pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalDistanceRange);
  let pipeVerticalPosition = Phaser.Math.Between(0 + 20, config.height - 20 - pipeVerticalDistance);

  uPipe.x = pipeHorizontalDistance;
  uPipe.y = pipeVerticalPosition;
  
  lPipe.x = uPipe.x;
  lPipe.y = uPipe.y + pipeVerticalDistance;
  
  lPipe.body.velocity.x = -200;
  uPipe.body.velocity.x = -200;
}

function restartPlayerPosition() {
  bird.x = initialBirdPosition.x
  bird.y = initialBirdPosition.y
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);