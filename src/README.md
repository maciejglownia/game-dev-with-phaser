# flappy-bird-clone

### Goal
Playing around creating web games using JS and Phaser 3.

### Architecture
![architecture](app/src/main/res/drawable-v24/architecture_mvvm.jpg)

### Screenshots
![main_menu](game-dev-with-phaser/assets
/ps1_main_menu.png)
![play_game](game-dev-with-phaser/assets
/ps2_play_game.png)
![game_over](game-dev-with-phaser/assets
/ps3_game_over.png)
![pause](game-dev-with-phaser/assets
/ps4_pause.png)
![resume](game-dev-with-phaser/assets
/ps5_resume.png)
![best_score](game-dev-with-phaser/assets
/ps6_best_score.png)

### Overview
Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.

source: [wikipedia](https://en.wikipedia.org/wiki/Flappy_Bird#:~:text=Flappy%20Bird%20is%20an%20arcade,gaps%20placed%20at%20random%20heights.)


### Requirements

1. [node.js](https://nodejs.org/en) (recommended version is: v14.15.1)
2. [npm](https://www.npmjs.com/) (I'm using version: 6.14.8)
3. [git](https://git-scm.com/) (I'm using vesion 2.34.1)
4. optionally you can install the [Visual Studio Code](https://code.visualstudio.com/) to move around the code - I used it to write this application.

### How to run it

1. install required tools (if needed), 
2. clone this repo into folder of your choice on the local machine,
3. open a terminal and go to the folder you cloned the repo,
3. run command `killall -9 node`, to make sure all node processes are killed,
4. run command: `npm run dev`
5. go to [localhost](https://localhost:8080)
6. enjoy your time and play the game by pressing on the Play button.

### Additional option
#### Open the application in the [PhaserEditor2D](https://phasereditor2d.com/downloads/)


##### For linux users:
1. download [PhaserEditor2D](https://phasereditor2d.com/downloads/) if needed,
2. unzip the downloaded file,
3. install [PhaserEditor2D v3 Launcher](https://www.npmjs.com/package/phasereditor2d-launcher),
4. run command `npm install -g phasereditor2d-launcher`,
4. run command: `npx phasereditor2d-launcher -project path/to/project`,
5. PhaserEditor2d should opens in the web browser.