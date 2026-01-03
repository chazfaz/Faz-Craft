import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
export function setupInteraction(camera,scene,blocks,inventory){
 const ray=new THREE.Raycaster();
 window.addEventListener('click',()=>{
  ray.setFromCamera({x:0,y:0},camera);
  const hits=ray.intersectObjects(blocks);
  if(hits.length){
   const b=hits[0].object;
   inventory.add(b.userData.type);
   scene.remove(b);
   blocks.splice(blocks.indexOf(b),1);
  }
 });
}