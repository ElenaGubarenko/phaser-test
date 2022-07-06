// import '@phaser'
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

class FlyingBrokenPieces extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
        this.load.image('naruto', 'assets/naruto_ramen.jpg');
        this.load.image('fire', 'assets/fire.png');
    }

    create() {
        const naruto = this.add.image(512, 620, 'naruto');

        const particles2 = this.make.particles({
            key: 'fire',
            add: false
        });

        const shape = new Phaser.Geom.Rectangle(naruto.x + 200, naruto.y - 60, naruto.width / 10, naruto.height / 5);

        particles2.createEmitter({
            emitZone: { type: 'random', source: shape },
            lifespan: 4000,
            speed: 140,
            angle: { min: 160, max: 200 },
            rotate: { start: 0, end: 200 },
            scale: { start: 0.8, end: 0 }
        });

        naruto.mask = new Phaser.Display.Masks.BitmapMask(this, particles2);

    }

}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    backgroundColor: 'black',
    scene: [FlyingBrokenPieces]
};

const game = new Phaser.Game(config);


// class Example extends Phaser.Scene {
//     constructor() {
//         super();
//     }

//     preload() {

//         this.load.image('raster', 'assets/demoscene/multi-color-raster.png');
//         this.load.image('rezero', 'assets/pics/rezero-cast.png');
//         this.load.image('mask2', 'assets/particles/glass.png');
//     }

//     create() {
//         const rezero = this.add.image(512, 620, 'rezero');

//         const particles2 = this.make.particles({
//             key: 'mask2',
//             add: false
//         });

//         const shape = new Phaser.Geom.Rectangle(rezero.x + 120, rezero.y - 60, rezero.width / 4, rezero.height / 3);

//         particles2.createEmitter({
//             emitZone: { type: 'random', source: shape },
//             lifespan: 4000,
//             speed: 140,
//             angle: { min: 160, max: 200 },
//             rotate: { start: 0, end: 200 },
//             scale: { start: 0.8, end: 0 }
//         });

//         rezero.mask = new Phaser.Display.Masks.BitmapMask(this, particles2);

//     }

// }

// const config = {
//     type: Phaser.WEBGL,
//     parent: 'phaser-example',
//     width: 1024,
//     height: 768,
//     backgroundColor: '#1d0b1c',
//     scene: [Example]
// };

