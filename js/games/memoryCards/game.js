let scene = new Phaser.Scene("Game")

scene.preload = function () {
  this.load.image("back", "/js/games/memoryCards/assets/background.jpg")
  this.load.image("cardBack", "/js/games/memoryCards/assets/cardBack.png")
}

scene.create = function () {
  this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, "back")
  this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, "cardBack")
  // this.add.sprite(0, 0, "back").setOrigin(0, 0)
}

let config = {
  type: Phaser.AUTO,
  scene: scene,
  width: 1280,
  height: 720,
}

let game = new Phaser.Game(config)
