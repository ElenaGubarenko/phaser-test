export default class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, cardId, position, texture) {
    super(scene, position.x, position.y, texture)
    this.scene = scene
    this.cardId = cardId
    this.setOrigin(0, 0)
    this.scene.add.existing(this)
  }
}


