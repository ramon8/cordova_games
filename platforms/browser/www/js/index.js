
document.addEventListener('deviceready', function () {
    game = new Phaser.Game(screen.width, screen.height, Phaser.CANVAS, 'game', {
        preload: preload, create: create, update: update, render: render
    });
});

function preload() {
    game.load.spritesheet('pj_iddle', 'img/assets/pj_iddle.png', 35, 70);
    // game.load.spritesheet('floor', 'img/assets/suelo.jpg', 16, 16);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.stage.backgroundColor = '#000000cc';

	pj = game.add.sprite(0, 0, 'pj_iddle', 2);
	// floor = game.add.sprite(0, 0, 'floor', 1);
    // floor = [];
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 15; j++){
            //floor.push(game.add.sprite(i * 16, j * 16, 'floor', 0));
        }
    }
    game.add.sprite(0, 0, 'pj_iddle', 0);

	game.physics.arcade.enable([pj]);

	game.physics.arcade.gravity.y = 200;

	pj.body.bounce.y = 0.95;
	pj.body.collideWorldBounds = true;
    pj.body.allowGravity = true;
    
    var walk = pj.animations.add('walk');

    pj.animations.play('walk', 15, true);
    

}

function update() {
	//game.physics.arcade.collide(pj, floor);
}

function render() {
}