import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

export function setupTouchControls(camera) {
  let yaw = 0, pitch = 0;
  const move = { x: 0, y: 0 };
  let lookTouch = null;

  window.addEventListener('touchstart', e => {
    if (e.touches.length === 1) lookTouch = e.touches[0];
  });

  window.addEventListener('touchmove', e => {
    if (!lookTouch) return;
    const t = e.touches[0];
    yaw -= (t.clientX - lookTouch.clientX) * 0.003;
    pitch -= (t.clientY - lookTouch.clientY) * 0.003;
    pitch = Math.max(-Math.PI/2, Math.min(Math.PI/2, pitch));
    lookTouch = t;
  });

  window.addEventListener('touchend', () => lookTouch = null);

  return () => {
    camera.rotation.set(pitch, yaw, 0);
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();
    camera.position.add(dir.multiplyScalar(0));
  };
}
