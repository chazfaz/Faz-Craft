import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import {BLOCKS} from './blocks.js';
export function createWorld(scene,blocks){
 const geo=new THREE.BoxGeometry(1,1,1);
 for(let x=-10;x<=10;x++)for(let z=-10;z<=10;z++){
  const type=Math.random()<0.7?'grass':'stone';
  const mat=new THREE.MeshLambertMaterial({color:BLOCKS[type].color});
  const b=new THREE.Mesh(geo,mat);
  b.position.set(x,0,z);
  b.userData.type=type;
  scene.add(b);
  blocks.push(b);
 }
}