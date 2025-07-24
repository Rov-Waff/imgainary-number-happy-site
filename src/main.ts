import * as THREE from "three";

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
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.5,
    roughness: 0.1,
    map: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/crate.gif"
    ),
  });

  // Create a mesh
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
};
main();
