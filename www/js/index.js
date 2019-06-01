let canvas_width = screen.width;
const tile_size = 16;

const map_tile_w_dimension = 10;
const map_tile_h_dimension = Math.trunc(screen.height / ratio_w);

const ratio_w = canvas_width / map_tile_w_dimension;

const canvas_height = ratio_w * map_tile_h_dimension;

const ratio_h = screen.height / (screen.height / ratio_w);



document.addEventListener('deviceready', function () {
    game = new Phaser.Game(canvas_width, canvas_height, Phaser.CANVAS, 'game', {
        preload: preload, create: create, update: update, render: render
    });
});

function preload() {
    game.load.spritesheet('pj_iddle', 'img/assets/pj_iddle.png', 35, 70);
    game.load.spritesheet('floor', 'img/assets/suelo.png', tile_size, tile_size);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    pj = game.add.sprite(50, 50, 'pj_iddle', 2);
    pj.smoothed = false;
    pj.scale.setTo(2);
    floor = [];
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < map_tile_h_dimension; j++) {
            if (j == 0 || i == 0 || j == map_tile_h_dimension -1 || i == 9) {
                var floorTemp = game.add.sprite(i * ratio_w, j * ratio_w, 'floor', 0);
                floorTemp.scale.setTo(ratio_w/tile_size);
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