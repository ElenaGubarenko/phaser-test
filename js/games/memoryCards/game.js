import "./gameScene.js"

let config = {
  type: Phaser.AUTO,
  scene: new GameScene(),
  width: 1280,
  height: 720,
  rows: 2,
  cols: 5,
}

let game = new Phaser.Game(config)
