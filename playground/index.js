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

class TalkingGameObject extends Phaser.GameObjects.Sprite {
    dialogueBox;
    scene;
    text;

    constructor(scene, type) {
        super(scene, type);
        this.scene = scene;
        scene.add.existing(this);
    }

    openDialogue() {
        this.text = this.scene.add.bitmapText(this.x, this.y, 'treemomFont')
        this.dialogueBox = this.scene.add.rectangle(this.x, this.y, 50, 50, 0xFFFFFF, 1.0);
    }

    advanceDialogue() {
        this.dialogueBox.angle += 30;
    }

    closeDialogue() {
        this.dialogueBox.destroy();
    }
}

class TreeantIntroScene extends Phaser.Scene {
    preload() {
        const images = require.context("./assets/images", false, /\.(png|jpe?g)$/);
        const fonts = require.context("./assets/fonts", false, /\.(png|xml)$/);
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
        this.load.bitmapFont('treemomFont', fonts('./treemom.png', fonts('treemom.xml')));
    }

    create() {
        const parkmap = this.make.tilemap({ key: 'parkmap' });
        parkmap.images.forEach(layer => {
            let parallaxx = layer.properties[0]['value'] ?? 1;
            let parallaxy = layer.properties[1]['value'] ?? 1;
            this.add.tileSprite(0, 0, layer.width, layer.height, layer.name).setOrigin(0, 0).setScrollFactor(parallaxx, parallaxy);
        });

        parkmap.createFromObjects('foreground/buildings', { gid: 95, key: 'ParkBuildingsFG' });
        this.dialogueLayer = this.physics.add.staticGroup(
            parkmap.createFromObjects('foreground/tree', { 
                gid: 92, 
                key: 'ParkTree',
                classType: TalkingGameObject
             })); //Maybe make this single static body?

        const gndTileset = parkmap.addTilesetImage('ParkGnd', 'ParkGnd');
        this.groundLayer = parkmap.createLayer('ground', gndTileset);
        this.groundLayer.setCollisionBetween(40, 53);
        this.groundLayer.setCollisionBetween(32, 35);

        this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F, 1, 0);
        this.cursors = this.input.keyboard.createCursorKeys();

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
        this.player = this.add.sprite(64, 150, 'treant').setFlipX(true).setOrigin(0, 1).play('player-walk'); //Automate this?
        this.physics.add.existing(this.player, 0);
        this.physics.add.collider(this.player, this.groundLayer);
        this.playerDialogueOverlaps = new Set();
        this.physics.add.overlap(this.player, this.dialogueLayer, (obj1, obj2) => {
            if (!this.playerDialogueOverlaps.has(obj2)) {
                obj2.openDialogue();
                this.playerDialogueOverlaps.add(obj2);
            } else if (this.interactKey.isDown) {
                obj2.advanceDialogue();
            }
        }, null, this);

        this.cameras.main.startFollow(this.player, false, 0.2, 0, -30, 30);
        this.cameras.main.setDeadzone(35);
        this.cameras.main.setBounds(0, 0, 2000, 256);

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

    update() {
        for (const talkingGameObj of this.playerDialogueOverlaps) {
            if (!this.physics.overlap(this.player, talkingGameObj)) {
                talkingGameObj.closeDialogue();
                this.playerDialogueOverlaps.delete(talkingGameObj);
            }
        }

        const { left, right, up } = this.cursors;

        if (left.isDown) {
            this.player.body.setVelocityX(-160);
        }
        else if (right.isDown) {
            this.player.body.setVelocityX(160);
        }
        else {
            this.player.body.setVelocityX(0);
        }

        if (up.isDown && this.player.body.blocked.down) {
            this.player.body.setVelocityY(-330);
            this.player.body.setGravityY(200);
        } else if (this.player.body.velocity.y > 0) {
            this.player.body.setGravityY(300);
        }
    }

    openDialogue(object1, object2) {
        var dialogueBox;
        if (this.cursors.left.isDown) {
            dialogueBox = this.add.rectangle(object2.x, object2.y, 50, 50, 0xFFFFFF, 1.0);
        } else {
            dialogueBox = this.add.rectangle(object2.x, object2.y, 50, 50, 0x0, 1.0);
        }

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 256,
    scene: TreeantIntroScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 300
            },
        },
    },
};

const game = new Phaser.Game(config);