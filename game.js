const gameState = {
    level: 0
}


function preload() {
    this.load.image('me', "assets/player.jpg");
    //this.load.image("closeButton", "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-blue-round-creative-button-image_1217183.jpg");
    //this.load.image("boxBack", "https://e7.pngegg.com/pngimages/107/708/png-clipart-box-box.png");
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
}

function create() {
    gameState.player = this.physics.add.sprite(125, 110, 'me').setScale(.1);
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.platforms = this.physics.add.staticGroup();
    gameState.platforms.create(225, 300, 'platform').setScale(4, 0.5).refreshBody();
    this.physics.add.collider(gameState.player, gameState.platforms)
    //gameState.player.on('pointerup', testMessageBox)

    this.cameras.main.setBounds(0, 0, 1800, config.height);
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
}




function update() {
    if (gameState.cursors.right.isDown){ // && gameState.player.x < config.width){
        gameState.player.setVelocityX(200);
    } else if (gameState.cursors.left.isDown){// && gameState.player.x > 0){
        gameState.player.setVelocityX(-200);
    } else if (gameState.cursors.up.isDown && gameState.player.body.touching.down){// && gameState.player.x > 0){
        gameState.player.setVelocityY(-200);
    } else {
        gameState.player.setVelocityX(0);
    }

}



const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 350,
    backgroundColor: "b9eaff",
    fps: {target: 60},
    scene: {
        preload,
        create,
        update
    },
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          enableBody: true,
    
        }
      },
}

const game = new Phaser.Game(config);