import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from '../three/RGBELoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive'; //Consider interaction library might be faster

import { RenderCategoriesUI } from '../wiki/wiki.js';

//* Setup ----------------------------------------------

const renderer = new THREE.WebGLRenderer();
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.getElementById("cover").appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 0);
const controls = new OrbitControls(camera, renderer.domElement );

const scene = new THREE.Scene();
scene.environment = null;

const interactionManager = new InteractionManager(renderer, camera, renderer.domElement);

//* Objects -----------------------------------------

const wikiModuleHTML = import.meta.glob('../wiki/wiki.html', {query: '?raw', import: 'default', eager: true})['../wiki/wiki.html'];

const redwaterBook = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshBasicMaterial()
);
scene.add(redwaterBook);
interactionManager.add(redwaterBook);
redwaterBook.addEventListener('mouseover', (event) => {

});
redwaterBook.addEventListener('mouseout', (event) => {

});
redwaterBook.addEventListener('mousedown', (event) => {
    // Play animation in 3D wait for it to finish
    // Play 2D animation and fade out
    // Set overlay to visible

    const bookOverlayEl = document.createElement("div");
    bookOverlayEl.classList.add('book-overlay');

    bookOverlayEl.innerHTML = wikiModuleHTML
    document.body.appendChild(bookOverlayEl);
    RenderCategoriesUI(`${import.meta.env.BASE_URL}/wikis/RETICLE2/`);

    renderer.setAnimationLoop(null);
});
redwaterBook.addEventListener('mouseup', (event) => {
    redwaterBook.removeEventListener('mouseover');
    redwaterBook.removeEventListener('mouseout');
    redwaterBook.removeEventListener('mousedown');
})

new GLTFLoader().load(`${import.meta.env.BASE_URL}/glb/observatoryvar.glb`, (gltf) => {
    const observatory = gltf.scene;
    scene.add(observatory);
    observatory.position.set(0, -20, 30);
    observatory.rotateY(Math.PI * 0.2);
});
new RGBELoader().load(`${import.meta.env.BASE_URL}/hdr/cover.hdr`, function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});


//* Program ---------------------------

window.addEventListener('resize', function () {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
   animate();
});

function animate(time) {
    renderer.render(scene, camera);
    interactionManager.update();
}

export default 0;