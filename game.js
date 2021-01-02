const gameState = {
    level: 0
}


function preload() {
    this.load.image('me', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tofugu.com%2Fjapanese%2Fchibi%2F&psig=AOvVaw036YhODODs4fS2i5ZDuKbo&ust=1609635843082000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDFxPuG_O0CFQAAAAAdAAAAABAJ');

}

function create() {
    gameState.player = this.add.sprite(125, 110, 'me');
    gameState.cursors = this.input.keyboard.createCursorKeys();

    gameState.player.on('pointerup', ()=>{

    })

    this.cameras.main.setBounds(0, 0, 1800, config.height);
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
}


function update() {
    if (gameState.cursors.right.isDown && gameState.player.x < config.width){
        gameState.player.x += 10;
    } else if (gameState.cursors.left.isDown && gameState.player.x > 0){
        gameState.player.x -= 10;
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
    }
}

const game = new Phaser.Game(config);