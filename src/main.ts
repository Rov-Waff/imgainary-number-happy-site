import * as THREE from "three";
import texture_img from "./1752218241054.png"

const main = () => {
  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a geometry and a material
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: new THREE.TextureLoader().load(
      texture_img
    ),
  });

  // Create a mesh
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(0, 0, 5).normalize();
  scene.add(light);
  cube.rotation.x += 0.4;
  // Animation loop
  const animate = (time:number) => {
    requestAnimationFrame(animate);
    cube.position.y=Math.sin(time/1000)/2
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
};
main();
