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
      // gravity: {y:200}

    }
  },
  scene: {
    preload,
    create,
    update
  }
}

// Loading assets, such as images, music, animations ...
function preload() {
  // 'this' context - scene
  // contains functions and properties we can use
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png')
}

let bird = null;
let totalDelta = null;

const VELOCITY = 200;

// Initializing your app
function create() {
  // x - 400
  // y - 300
  // key of the image
  this.add.image(0, 0, 'sky').setOrigin(0);
  bird = this.physics.add.sprite(config.width / 10, config.height / 2, 'bird').setOrigin(0);
  bird.body.velocity.x = VELOCITY;
}


// t0 = 0px/s
// t1 = 200px/s
// t1 = 400px/s
// t1 = 500px/s

// 60 fps
// 60 times pers second
// 60 * 16ms = 1000ms 
function update(time, delta) {

  if (bird.x >= config.width - bird.width) {
    bird.body.velocity.x = -VELOCITY;
  } else if (bird.x <= 0) {
    bird.body.velocity.x = VELOCITY;  
  }
}

new Phaser.Game(config);