document.addEventListener('deviceready', function () {
    console.log();
    var config = {
        type: Phaser.AUTO,
        parent: 'game',
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload() {
    }

    function create() {
    }
});