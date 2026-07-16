import * as THREE from 'https://unpkg.com/three@0.179/build/three.module.js';

import {OrbitControls} from 'https://unpkg.com/three@0.179/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xece8e2);

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/window.innerHeight,
0.1,
100
);

camera.position.set(6,5,8);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.shadowMap.enabled=true;

document
.getElementById("scene")
.appendChild(renderer.domElement);

const controls=new OrbitControls(
camera,
renderer.domElement
);

controls.enableDamping=true;
