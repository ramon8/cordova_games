document.addEventListener('deviceready', function () {
    game = new Phaser.Game(300, 300, Phaser.CANVAS, 'game', {
        preload: preload, create: create, update: update, render: render
    });
});

function preload() {
    console.log('preload');
}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#123123';
    game.stage.backgroundColor = '#ffffff';
    console.log('create');
}

function update() {
    console.log('update');
}

function render() {
    console.log('render');
}