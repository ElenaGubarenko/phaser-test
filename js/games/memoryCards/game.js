// import scene from "./gameScene.js"
import GameScene from './gameScene.js'

let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: new GameScene(),
}

let game = new Phaser.Game(config)


