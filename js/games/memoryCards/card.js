export default class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, card, position, texture) {
    super(scene, position.x, position.y, texture)
    this.scene = scene
    this.setOrigin(0, 0)
    this.scene.add.existing(this)
    this.card = card
    this.id = card.id

    this.setInteractive()

    // this.input.on("gameobjectdown", this.openCard, this)

    // this.on("pointerdown", this.openCard, this)
  }

  openCard() {
    this.setTexture(this.card.texture)
  }

  closeCard() {
    // this.setTexture(this.texture)
  }
}
