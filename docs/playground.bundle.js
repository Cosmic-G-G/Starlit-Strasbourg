/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/playground/assets/images sync \\.(png%7Cjpe?g)$":
/*!**************************************************************************!*\
  !*** ./src/playground/assets/images/ sync nonrecursive \.(png%7Cjpe?g)$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ParkBG.png\": \"./src/playground/assets/images/ParkBG.png\",\n\t\"./ParkBuildingsBG.png\": \"./src/playground/assets/images/ParkBuildingsBG.png\",\n\t\"./Treant.png\": \"./src/playground/assets/images/Treant.png\",\n\t\"./back-towers.png\": \"./src/playground/assets/images/back-towers.png\",\n\t\"./back.png\": \"./src/playground/assets/images/back.png\",\n\t\"./bg.png\": \"./src/playground/assets/images/bg.png\",\n\t\"./buildings.png\": \"./src/playground/assets/images/buildings.png\",\n\t\"./cyberpunk-corridor-foreground.png\": \"./src/playground/assets/images/cyberpunk-corridor-foreground.png\",\n\t\"./cyberpunk-corridor.png\": \"./src/playground/assets/images/cyberpunk-corridor.png\",\n\t\"./far-buildings.png\": \"./src/playground/assets/images/far-buildings.png\",\n\t\"./grunge-tileset.png\": \"./src/playground/assets/images/grunge-tileset.png\",\n\t\"./mech-unit.png\": \"./src/playground/assets/images/mech-unit.png\",\n\t\"./mist-forest-background-tiles.png\": \"./src/playground/assets/images/mist-forest-background-tiles.png\",\n\t\"./mist-forest-background-tree.png\": \"./src/playground/assets/images/mist-forest-background-tree.png\",\n\t\"./night-town-background-sky.png\": \"./src/playground/assets/images/night-town-background-sky.png\",\n\t\"./skill-foreground.png\": \"./src/playground/assets/images/skill-foreground.png\",\n\t\"./sky.png\": \"./src/playground/assets/images/sky.png\",\n\t\"./treant_0.png\": \"./src/playground/assets/images/treant_0.png\",\n\t\"./treant_1.png\": \"./src/playground/assets/images/treant_1.png\",\n\t\"./treant_2.png\": \"./src/playground/assets/images/treant_2.png\",\n\t\"./treant_3.png\": \"./src/playground/assets/images/treant_3.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/playground/assets/images sync \\\\.(png%7Cjpe?g)$\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/playground/index.js":
/*!*********************************!*\
  !*** ./src/playground/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_tiled_park_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/tiled/park.json */ \"./src/playground/assets/tiled/park.json\");\n/* harmony import */ var _assets_images_Treant_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/Treant.json */ \"./src/playground/assets/images/Treant.json\");\n// Native JS + Webpack Version\r\n// import * as assets from './assets';\r\n// this.load.image('ParkBG', assets.nightBG);\r\n// this.load.image('ParkTree', assets.mistTree);\r\n// this.load.image('ParkBuildingsBG', assets.indBuildingsBG);\r\n// this.load.image('ParkBuildingsFG', assets.indBuildingsFG);\r\n// this.load.image('ParkGnd', assets.mistGnd);\r\n// this.load.image('treant', assets.treant);\r\n// this.load.image('mech', assets.mech);\r\n\r\n\r\n\r\n\r\nfunction preload() {\r\n    const images = __webpack_require__(\"./src/playground/assets/images sync \\\\.(png%7Cjpe?g)$\");\r\n    this.load.image('ParkBG', images('./ParkBG.png'));\r\n    this.load.image('ParkTree', images('./mist-forest-background-tree.png'));\r\n    this.load.image('ParkBuildingsBG', images('./ParkBuildingsBG.png'));\r\n    this.load.image('ParkBuildingsFG', images('./skill-foreground.png'));\r\n    this.load.image('ParkGnd', images('./mist-forest-background-tiles.png'));\r\n    this.load.atlas('treant', images('./Treant.png'), _assets_images_Treant_json__WEBPACK_IMPORTED_MODULE_1__);\r\n    this.load.spritesheet('mech', images('./mech-unit.png'), {\r\n        frameWidth: 96,\r\n        frameHeight: 80\r\n    });\r\n    this.load.tilemapTiledJSON('parkmap', _assets_tiled_park_json__WEBPACK_IMPORTED_MODULE_0__);\r\n}\r\n\r\nfunction create() {\r\n    const parkmap = this.make.tilemap({ key: 'parkmap' });\r\n    console.log(parkmap);\r\n    parkmap.images.forEach(layer => {\r\n        let parallaxx = layer.properties[0]['value'] ?? 1;\r\n        let parallaxy = layer.properties[1]['value'] ?? 1;\r\n        this.add.tileSprite(0, 0, layer.width, layer.height, layer.name).setOrigin(0, 0).setScrollFactor(parallaxx, parallaxy);\r\n    });\r\n\r\n    parkmap.createFromObjects('foreground/buildings', { gid: 95, key: 'ParkBuildingsFG' });\r\n    parkmap.createFromObjects('foreground/tree', { gid: 92, key: 'ParkTree' });\r\n\r\n    const gndTileset = parkmap.addTilesetImage('ParkGnd', 'ParkGnd');\r\n    const groundLayer = parkmap.createLayer('ground', gndTileset).setCollisionByExclusion(-1, true);\r\n\r\n    this.anims.create({\r\n        key: 'player-walk',\r\n        frames: this.anims.generateFrameNames('treant', {\r\n            prefix: 'treant_',\r\n            start: 0,\r\n            end: 3,\r\n            suffix: '.png'\r\n        }),\r\n        frameRate: 10,\r\n        repeat: -1\r\n    });\r\n    const player = this.add.sprite(64, 224, 'treant').setFlipX(true).setOrigin(0,1).play('player-walk');; //Automate this?\r\n\r\n    this.anims.create({\r\n        key: 'mech-walk',\r\n        frames: this.anims.generateFrameNumbers('mech', {\r\n            start: 0,\r\n            end: 9\r\n        }),\r\n        frameRate: 10,\r\n        repeat: -1\r\n    });\r\n    const mech = this.add.sprite(768, 224, 'mech').setFlipX(true).setOrigin(0, 1).play('mech-walk');\r\n\r\n    // AI generated shortcut for combining tilesets (not supported by Phaser API)\r\n    // const tilesets = map.tilesets.map(ts =>\r\n    //     map.addTilesetImage(ts.name, ts.name) //Only if tileset name matches cached image\r\n    // );\r\n\r\n    // map.createLayer(\"Ground\", tilesets);\r\n\r\n}\r\n\r\nfunction update() {\r\n\r\n}\r\n\r\nconst config = {\r\n    type: Phaser.AUTO,\r\n    width: 800,\r\n    height: 256,\r\n    scene: {\r\n        preload: preload,\r\n        create: create,\r\n        update: update,\r\n    },\r\n};\r\n\r\nconst game = new Phaser.Game(config);\n\n//# sourceURL=webpack://twilight-inn/./src/playground/index.js?");

/***/ }),

/***/ "./src/playground/assets/images/ParkBG.png":
/*!*************************************************!*\
  !*** ./src/playground/assets/images/ParkBG.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ParkBGd7973b5007b18f24722d.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/ParkBG.png?");

/***/ }),

/***/ "./src/playground/assets/images/ParkBuildingsBG.png":
/*!**********************************************************!*\
  !*** ./src/playground/assets/images/ParkBuildingsBG.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ParkBuildingsBGe1e0ff25fb5a5fa0042e.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/ParkBuildingsBG.png?");

/***/ }),

/***/ "./src/playground/assets/images/Treant.png":
/*!*************************************************!*\
  !*** ./src/playground/assets/images/Treant.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/Treant4254f096fe54f461e76a.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/Treant.png?");

/***/ }),

/***/ "./src/playground/assets/images/back-towers.png":
/*!******************************************************!*\
  !*** ./src/playground/assets/images/back-towers.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/back-towersab27105615ab08edb302.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/back-towers.png?");

/***/ }),

/***/ "./src/playground/assets/images/back.png":
/*!***********************************************!*\
  !*** ./src/playground/assets/images/back.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/backaf2e60cd4074598d7edf.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/back.png?");

/***/ }),

/***/ "./src/playground/assets/images/bg.png":
/*!*********************************************!*\
  !*** ./src/playground/assets/images/bg.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/bged7685a9725c6d5c2390.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/bg.png?");

/***/ }),

/***/ "./src/playground/assets/images/buildings.png":
/*!****************************************************!*\
  !*** ./src/playground/assets/images/buildings.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/buildings8dbc7b3bd82bf6e67fcc.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/buildings.png?");

/***/ }),

/***/ "./src/playground/assets/images/cyberpunk-corridor-foreground.png":
/*!************************************************************************!*\
  !*** ./src/playground/assets/images/cyberpunk-corridor-foreground.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cyberpunk-corridor-foreground5bc912b97c078b438a4a.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/cyberpunk-corridor-foreground.png?");

/***/ }),

/***/ "./src/playground/assets/images/cyberpunk-corridor.png":
/*!*************************************************************!*\
  !*** ./src/playground/assets/images/cyberpunk-corridor.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cyberpunk-corridorbb0b96231cc527a7571a.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/cyberpunk-corridor.png?");

/***/ }),

/***/ "./src/playground/assets/images/far-buildings.png":
/*!********************************************************!*\
  !*** ./src/playground/assets/images/far-buildings.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/far-buildings07fee55b7dbfab6c87a6.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/far-buildings.png?");

/***/ }),

/***/ "./src/playground/assets/images/grunge-tileset.png":
/*!*********************************************************!*\
  !*** ./src/playground/assets/images/grunge-tileset.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/grunge-tileset771f2f3e8bcd7d4aeb7b.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/grunge-tileset.png?");

/***/ }),

/***/ "./src/playground/assets/images/mech-unit.png":
/*!****************************************************!*\
  !*** ./src/playground/assets/images/mech-unit.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/mech-unita7e71c62c89d88e52d8e.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/mech-unit.png?");

/***/ }),

/***/ "./src/playground/assets/images/mist-forest-background-tiles.png":
/*!***********************************************************************!*\
  !*** ./src/playground/assets/images/mist-forest-background-tiles.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/mist-forest-background-tiles7c1442e46da5c214b39c.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/mist-forest-background-tiles.png?");

/***/ }),

/***/ "./src/playground/assets/images/mist-forest-background-tree.png":
/*!**********************************************************************!*\
  !*** ./src/playground/assets/images/mist-forest-background-tree.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/mist-forest-background-tree882344d8fc0b802a2ff8.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/mist-forest-background-tree.png?");

/***/ }),

/***/ "./src/playground/assets/images/night-town-background-sky.png":
/*!********************************************************************!*\
  !*** ./src/playground/assets/images/night-town-background-sky.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/night-town-background-sky4269dfda4bf5437bc192.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/night-town-background-sky.png?");

/***/ }),

/***/ "./src/playground/assets/images/skill-foreground.png":
/*!***********************************************************!*\
  !*** ./src/playground/assets/images/skill-foreground.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/skill-foreground4b0c046bd2339aa488d2.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/skill-foreground.png?");

/***/ }),

/***/ "./src/playground/assets/images/sky.png":
/*!**********************************************!*\
  !*** ./src/playground/assets/images/sky.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/sky72b6e9a158d29f24f09e.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/sky.png?");

/***/ }),

/***/ "./src/playground/assets/images/treant_0.png":
/*!***************************************************!*\
  !*** ./src/playground/assets/images/treant_0.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/treant_0c497558c59afecce6d2f.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/treant_0.png?");

/***/ }),

/***/ "./src/playground/assets/images/treant_1.png":
/*!***************************************************!*\
  !*** ./src/playground/assets/images/treant_1.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/treant_159c5e994ba73cd3290a9.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/treant_1.png?");

/***/ }),

/***/ "./src/playground/assets/images/treant_2.png":
/*!***************************************************!*\
  !*** ./src/playground/assets/images/treant_2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/treant_26fa68c69d47ce9813f2a.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/treant_2.png?");

/***/ }),

/***/ "./src/playground/assets/images/treant_3.png":
/*!***************************************************!*\
  !*** ./src/playground/assets/images/treant_3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/treant_329ae908c4776ca475916.png\";\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/treant_3.png?");

/***/ }),

/***/ "./src/playground/assets/images/Treant.json":
/*!**************************************************!*\
  !*** ./src/playground/assets/images/Treant.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"textures\":[{\"image\":\"Treant\",\"format\":\"RGBA8888\",\"size\":{\"w\":80,\"h\":336},\"scale\":1,\"frames\":[{\"filename\":\"treant_0.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":80,\"h\":84},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":84},\"frame\":{\"x\":0,\"y\":0,\"w\":80,\"h\":84}},{\"filename\":\"treant_1.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":80,\"h\":84},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":84},\"frame\":{\"x\":0,\"y\":84,\"w\":80,\"h\":84}},{\"filename\":\"treant_2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":80,\"h\":84},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":84},\"frame\":{\"x\":0,\"y\":168,\"w\":80,\"h\":84}},{\"filename\":\"treant_3.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":80,\"h\":84},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":80,\"h\":84},\"frame\":{\"x\":0,\"y\":252,\"w\":80,\"h\":84}}]}],\"meta\":{\"app\":\"http://free-tex-packer.com\",\"version\":\"0.6.7\"}}');\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/images/Treant.json?");

/***/ }),

/***/ "./src/playground/assets/tiled/park.json":
/*!***********************************************!*\
  !*** ./src/playground/assets/tiled/park.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"compressionlevel\":-1,\"height\":16,\"infinite\":false,\"layers\":[{\"id\":2,\"image\":\"../images/night-town-background-sky.png\",\"imageheight\":224,\"imagewidth\":96,\"name\":\"ParkBG\",\"opacity\":1,\"parallaxx\":0.8,\"properties\":[{\"name\":\"parallaxx\",\"type\":\"float\",\"value\":0.8},{\"name\":\"parallaxy\",\"type\":\"float\",\"value\":1}],\"repeatx\":true,\"type\":\"imagelayer\",\"visible\":true,\"x\":0,\"y\":0},{\"id\":5,\"image\":\"../images/buildings.png\",\"imageheight\":150,\"imagewidth\":272,\"name\":\"ParkBuildingsBG\",\"offsetx\":0,\"offsety\":80,\"opacity\":1,\"parallaxx\":0.9,\"properties\":[{\"name\":\"parallaxx\",\"type\":\"float\",\"value\":0.9},{\"name\":\"parallaxy\",\"type\":\"float\",\"value\":1}],\"repeatx\":true,\"type\":\"imagelayer\",\"visible\":true,\"x\":0,\"y\":0},{\"id\":8,\"layers\":[{\"draworder\":\"topdown\",\"id\":3,\"name\":\"buildings\",\"objects\":[{\"gid\":95,\"height\":104,\"id\":1,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":272,\"x\":8.5,\"y\":227.5},{\"gid\":95,\"height\":104,\"id\":2,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":272,\"x\":487.5,\"y\":227.5}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":9,\"name\":\"tree\",\"objects\":[{\"gid\":92,\"height\":224,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":336,\"x\":0,\"y\":224}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"name\":\"foreground\",\"opacity\":1,\"type\":\"group\",\"visible\":true,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,50,17,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,68,35,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1073741891,1073741892,53,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1073741873,1073741874,71,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1073741855,1073741856,53,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,15,16,17,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1073741837,1073741838,71,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,32,33,34,35,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,72,0,23,24,0,0,27,28,0,0,0,15,16,0,0,0,0,23,24,25,26,27,28,15,16,0,0,0,14,0,0,27,28,0,0,0,0,0,0,0,14,23,24,0,0,0,15,16,0,0,23,24,0,0,0,14,0,0,0,40,43,44,41,42,44,44,45,46,43,44,43,33,34,44,43,43,44,41,42,43,44,45,46,33,34,43,44,44,32,43,44,45,46,44,43,44,44,43,43,44,32,41,42,44,43,43,33,34,43,43,41,42,44,43,43,32,43,43,44,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58],\"height\":16,\"id\":1,\"name\":\"ground\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":60,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":7,\"name\":\"characters\",\"objects\":[{\"gid\":2147483745,\"height\":80,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":96,\"x\":768,\"y\":224},{\"gid\":2147483757,\"height\":65.1,\"id\":18,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":62,\"x\":64,\"y\":224}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":10,\"nextobjectid\":19,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.11.2\",\"tileheight\":16,\"tilesets\":[{\"columns\":18,\"firstgid\":1,\"image\":\"../images/mist-forest-background-tiles.png\",\"imageheight\":80,\"imagewidth\":288,\"margin\":0,\"name\":\"ParkGnd\",\"spacing\":0,\"tilecount\":90,\"tileheight\":16,\"tilewidth\":16},{\"columns\":0,\"firstgid\":91,\"grid\":{\"height\":1,\"orientation\":\"orthogonal\",\"width\":1},\"margin\":0,\"name\":\"park_backgrounds\",\"spacing\":0,\"tilecount\":5,\"tileheight\":224,\"tiles\":[{\"id\":0,\"image\":\"../images/night-town-background-sky.png\",\"imageheight\":224,\"imagewidth\":96},{\"id\":1,\"image\":\"../images/mist-forest-background-tree.png\",\"imageheight\":224,\"imagewidth\":336},{\"id\":2,\"image\":\"../images/buildings.png\",\"imageheight\":150,\"imagewidth\":272},{\"id\":3,\"image\":\"../images/far-buildings.png\",\"imageheight\":142,\"imagewidth\":213},{\"id\":4,\"image\":\"../images/skill-foreground.png\",\"imageheight\":104,\"imagewidth\":272}],\"tilewidth\":336},{\"columns\":10,\"firstgid\":96,\"image\":\"../images/mech-unit.png\",\"imageheight\":80,\"imagewidth\":960,\"margin\":0,\"name\":\"mech\",\"spacing\":0,\"tilecount\":10,\"tileheight\":80,\"tiles\":[{\"animation\":[{\"duration\":100,\"tileid\":0},{\"duration\":100,\"tileid\":1},{\"duration\":100,\"tileid\":2},{\"duration\":100,\"tileid\":3},{\"duration\":100,\"tileid\":4},{\"duration\":100,\"tileid\":5},{\"duration\":100,\"tileid\":6},{\"duration\":100,\"tileid\":7},{\"duration\":100,\"tileid\":8},{\"duration\":100,\"tileid\":9}],\"id\":1}],\"tilewidth\":96},{\"columns\":1,\"firstgid\":106,\"image\":\"../images/Treant.png\",\"imageheight\":336,\"imagewidth\":80,\"margin\":0,\"name\":\"treant\",\"spacing\":0,\"tilecount\":4,\"tileheight\":84,\"tiles\":[{\"animation\":[{\"duration\":100,\"tileid\":0},{\"duration\":100,\"tileid\":1},{\"duration\":100,\"tileid\":2},{\"duration\":100,\"tileid\":3}],\"id\":3}],\"tilewidth\":80}],\"tilewidth\":16,\"type\":\"map\",\"version\":\"1.10\",\"width\":60}');\n\n//# sourceURL=webpack://twilight-inn/./src/playground/assets/tiled/park.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/playground/index.js");
/******/ 	
/******/ })()
;