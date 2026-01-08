// Native JS + Webpack Version
// import * as assets from './assets';
// this.load.image('ParkBG', assets.nightBG);
// this.load.image('ParkTree', assets.mistTree);
// this.load.image('ParkBuildingsBG', assets.indBuildingsBG);
// this.load.image('ParkBuildingsFG', assets.indBuildingsFG);
// this.load.image('ParkGnd', assets.mistGnd);
// this.load.image('treant', assets.treant);
// this.load.image('mech', assets.mech);

import parkmapdata from './assets/tiled/park.json';
import treantanimdata from './assets/images/Treant.json';

function preload() {
    const images = require.context("./assets/images", false, /\.(png|jpe?g)$/);
    this.load.image('ParkBG', images('./ParkBG.png'));
    this.load.image('ParkTree', images('./mist-forest-background-tree.png'));
    this.load.image('ParkBuildingsBG', images('./ParkBuildingsBG.png'));
    this.load.image('ParkBuildingsFG', images('./skill-foreground.png'));
    this.load.image('ParkGnd', images('./mist-forest-background-tiles.png'));
    this.load.atlas('treant', images('./Treant.png'), treantanimdata);
    this.load.spritesheet('mech', images('./mech-unit.png'), {
        frameWidth: 96,
        frameHeight: 80
    });
    this.load.tilemapTiledJSON('parkmap', parkmapdata);
}

function create() {
    const parkmap = this.make.tilemap({ key: 'parkmap' });
    console.log(parkmap);
    parkmap.images.forEach(layer => {
        let parallaxx = layer.properties[0]['value'] ?? 1;
        let parallaxy = layer.properties[1]['value'] ?? 1;
        this.add.tileSprite(0, 0, layer.width, layer.height, layer.name).setOrigin(0, 0).setScrollFactor(parallaxx, parallaxy);
    });

    parkmap.createFromObjects('foreground/buildings', { gid: 95, key: 'ParkBuildingsFG' });
    parkmap.createFromObjects('foreground/tree', { gid: 92, key: 'ParkTree' });

    const gndTileset = parkmap.addTilesetImage('ParkGnd', 'ParkGnd');
    const groundLayer = parkmap.createLayer('ground', gndTileset).setCollisionByExclusion(-1, true);

    this.anims.create({
        key: 'player-walk',
        frames: this.anims.generateFrameNames('treant', {
            prefix: 'treant_',
            start: 0,
            end: 3,
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    });
    const player = this.add.sprite(64, 224, 'treant').setFlipX(true).setOrigin(0,1).play('player-walk');; //Automate this?

    this.anims.create({
        key: 'mech-walk',
        frames: this.anims.generateFrameNumbers('mech', {
            start: 0,
            end: 9
        }),
        frameRate: 10,
        repeat: -1
    });
    const mech = this.add.sprite(768, 224, 'mech').setFlipX(true).setOrigin(0, 1).play('mech-walk');

    // AI generated shortcut for combining tilesets (not supported by Phaser API)
    // const tilesets = map.tilesets.map(ts =>
    //     map.addTilesetImage(ts.name, ts.name) //Only if tileset name matches cached image
    // );

    // map.createLayer("Ground", tilesets);

}

function update() {

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 256,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

const game = new Phaser.Game(config);