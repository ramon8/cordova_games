let canvas_width = screen.width;
const ratio_w = canvas_width / 10
const canvas_height = ratio_w * Math.trunc(screen.height / ratio_w);
const ratio_h = screen.height / (screen.height / ratio_w);

const aspect_ratio = canvas_width / screen.height;


document.addEventListener('deviceready', function () {
    game = new Phaser.Game(canvas_width, canvas_height, Phaser.CANVAS, 'game', {
        preload: preload, create: create, update: update, render: render
    });
});

function preload() {
    game.load.spritesheet('pj_iddle', 'img/assets/pj_iddle.png', 35, 70);
    game.load.spritesheet('floor', 'img/assets/suelo.png', 16, 16);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    pj = game.add.sprite(50, 50, 'pj_iddle', 2);
    pj.smoothed = false;
    pj.scale.setTo(2);
    floor = [];
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < Math.trunc(screen.height / ratio_w); j++) {
            if (j == 0 || i == 0 || j == Math.trunc(screen.height / ratio_w) -1 || i == 9) {
                var floorTemp = game.add.sprite(i * ratio_w, j * ratio_w, 'floor', 0);
                floorTemp.scale.setTo(ratio_w/16);
                floorTemp.smoothed = false;
                floor.push(floor);
            }
        }
    }

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