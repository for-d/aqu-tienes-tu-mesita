import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.179/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.179/examples/jsm/controls/OrbitControls.js";

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

const ambient=new THREE.AmbientLight(0xffffff,1.5);

scene.add(ambient);

const sun=new THREE.DirectionalLight(0xffffff,2);

sun.position.set(4,8,6);

sun.castShadow=true;

scene.add(sun);

const floor=new THREE.Mesh(

new THREE.PlaneGeometry(20,20),

new THREE.MeshStandardMaterial({

color:0xd7d2cc

})

);

floor.rotation.x=-Math.PI/2;

floor.receiveShadow=true;

scene.add(floor);

const wood=new THREE.MeshStandardMaterial({

color:0x8b5a2b

});

const top=new THREE.Mesh(

new THREE.CylinderGeometry(2.2,2.2,0.15,64),

wood

);

top.position.y=2;

top.castShadow=true;

scene.add(top);

function leg(x,z){

const l=new THREE.Mesh(

new THREE.BoxGeometry(.18,2,.18),

wood

);

l.position.set(x,1,z);

l.castShadow=true;

scene.add(l);

}

leg(1.7,1.7);

leg(-1.7,1.7);

leg(1.7,-1.7);

leg(-1.7,-1.7);

const bowl=new THREE.Mesh(

new THREE.CylinderGeometry(.9,1.1,.6,64),

new THREE.MeshStandardMaterial({

color:0xf5b5c8

})

);

bowl.position.y=2.4;

bowl.castShadow=true;

scene.add(bowl);

function cookie(x,z){

const c=new THREE.Mesh(

new THREE.CylinderGeometry(.28,.28,.12,32),

new THREE.MeshStandardMaterial({

color:0xc58a45

})

);

c.rotation.x=Math.PI/2;

c.position.set(x,2.7,z);

scene.add(c);

}

for(let i=0;i<20;i++){

const a=Math.random()*Math.PI*2;

const r=Math.random()*0.6;

cookie(

Math.cos(a)*r,

Math.sin(a)*r

);

}

function animate(){

requestAnimationFrame(animate);

controls.update();

renderer.render(scene,camera);

}

animate();

window.addEventListener('resize',()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});

