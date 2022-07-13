export default class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, position, texture) {
    super(scene, position.x, position.y, texture)
    this.scene = scene
    this.setOrigin(0, 0)
    this.scene.add.existing(this)
  }
}


