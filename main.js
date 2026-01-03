import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import {createWorld} from './world.js';
import {Inventory} from './inventory.js';
import {setupInteraction} from './interaction.js';

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x87ceeb);
const cam=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
cam.position.set(0,5,10);

const r=new THREE.WebGLRenderer();
r.setSize(innerWidth,innerHeight);
document.body.appendChild(r.domElement);

scene.add(new THREE.AmbientLight(0xffffff,0.7));
const sun=new THREE.DirectionalLight(0xffffff,0.6);
sun.position.set(10,20,10);
scene.add(sun);

const blocks=[];
createWorld(scene,blocks);

const inv=new Inventory();
setupInteraction(cam,scene,blocks,inv);

function anim(){
 requestAnimationFrame(anim);
 r.render(scene,cam);
}
anim();