function preload() {

}

function create() {

}

function update() {

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            enableBody: true,
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config);