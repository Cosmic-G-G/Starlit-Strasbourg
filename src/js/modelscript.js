import * as THREE from 'three';

import {
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
    RGBELoader
} from './RGBELoader';
import { 
    DragControls 
} from './DragControls';
import space from '../Cover_Assets/cover.hdr';
import observatory from '../Cover_Assets/observatoryvar.glb';

//RENDERER & SCENE
const renderer = new THREE.WebGLRenderer();
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.getElementById("cover").appendChild( renderer.domElement );
const scene = new THREE.Scene();
scene.environment = null;

//CAM
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 0);
const mousePos = new THREE.Vector2();
const rayCast = new THREE.Raycaster();

//OBJECT
const axis = new THREE.AxesHelper(3);
scene.add(axis);
new GLTFLoader().load(observatory, (gltf)=>{
    const observatory = gltf.scene;
    scene.add(observatory);
    observatory.position.set(0, -20, 30);
    observatory.rotateY(Math.PI*0.2);
});
new RGBELoader().load(space, function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});

//Controls
const controls = new DragControls( camera, renderer.domElement );

/*
const floorGeom = new THREE.CircleGeometry(100, 10);
const mirrorCamRenderTarget = new THREE.WebGLCubeRenderTarget(1024, {generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter});
const mirrorCam = new THREE.CubeCamera(1, 100, mirrorCamRenderTarget);
scene.add(mirrorCam);
const floorMat = new THREE.MeshBasicMaterial({envMap: mirrorCam.renderTarget, side: THREE.FrontSide});
const floorMirror = new THREE.Mesh(floorGeom, floorMat);
floorMirror.rotation.set(-0.5*Math.PI, 0, 0.3*Math.PI); //36+72 / 360
floorMirror.position.set(0, -30, 30);
mirrorCam.position.copy(floorMirror.position);
scene.add(floorMirror);	
*/

//CLOCK
const clock = new THREE.Clock();
    // let delta = 0.0;

//ANIMATION FUNC
// window.addEventListener('pointerdown', function(event){
//     console.log("Detecting drag");

//     mousePos.x = event.clientX * 2 / this.window.innerWidth - 1;
//     mousePos.y = event.clientY * -2 / this.window.innerHeight + 1;

//     const cQuat = new THREE.Quaternion();
//     camera.getWorldQuaternion(cQuat);

//     let cEuler = new THREE.Euler();
//     cEuler.setFromQuaternion(cQuat, 'YZX');

//     cEuler.x -= event.movementY * 0.3 * Math.PI / 180; // * delta * 30 frame independence 30 FPS
//     cEuler.y -= event.movementX * 0.3 * Math.PI/180;
    
//     cEuler.x = THREE.MathUtils.clamp(cEuler.x, -90 * Math.PI / 180, 90 * Math.PI / 180);
//     cEuler.y = THREE.MathUtils.clamp(cEuler.y, -3.13, 3.13);

//     camera.setRotationFromEuler(cEuler);
    
// });
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate(time) {
    // delta = clock.getDelta();
    
    /*/mirror
    floorMirror.visible = false;
    mirrorCam.update(renderer, scene);
    floorMirror.visible = true;*/

    rayCast.setFromCamera(mousePos, camera);
    renderer.render(scene, camera);
}

export default 0;