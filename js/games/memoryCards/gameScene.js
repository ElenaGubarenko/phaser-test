import Card from "./card.js"
import configuration from "../../../configuration.js"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  preload() {
    this.load.image("back", "js/games/memoryCards/assets/background.jpg")
    configuration.cards.map((card) =>
      this.load.image(`${card.texture}`, `js/games/memoryCards/assets/${card.texture}.png`)
  )
   
    this.load.image("cardBack", "js/games/memoryCards/assets/cardBack.png")
  }

  create() {
    this.createBackground()
    this.createCards()
    this.openedCard = null
  }

  createBackground() {
    this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, "back")
  }

  createCards() {
    this.cards = []
    let counter = 0
    let positions = this.getCardsPositions()

    Phaser.Utils.Array.Shuffle(positions)

    configuration.cards.map((card) => {
      for (let i = 0; i < 2; i++) {
        this.cards.push(new Card(this, card, positions[counter], "cardBack"))
        counter += 1
      }
    })

    this.input.on("gameobjectdown", this.onCardClicked, this)
  }

  onCardClicked(pointer, card)
  {
    card.openCard()

    if (this.openedCard && this.openedCard === card.id) {
      console.log("true")
      this.openedCard = null
      return
    }
    
     this.openedCard = card.id
    console.log(this.openedCard, card.id)
    
  }

  getCardsPositions() {
    let positions = []
    let cardTexture = this.textures.get("cardBack").getSourceImage()
    let cardWidth = cardTexture.width + 7
    let cardHeight = cardTexture.height + 7
    let paddingX = (this.sys.game.config.width - cardWidth * configuration.cols) / 2
    let paddingY = (this.sys.game.config.height - cardHeight * configuration.rows) / 2

    for (let row = 0; row < configuration.rows; row++) {
      for (let col = 0; col < configuration.cols; col++) {
        positions.push({
          x: col * cardWidth + paddingX,
          y: row * cardHeight + paddingY,
        })
      }
    }
    return positions
  }
}
