let scene, camera, renderer, cube

const DEG_TO_RAD = Math.PI / 100;

function main() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 150, 250);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.shadowMap.enabled = true;

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.4;

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 100, 0);
  directionalLight.lookAt(scene.position);
  directionalLight.intensity = 0.7;
  directionalLight.castShadow = true;
  directionalLight.shadow.radius = 2;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = 100;
  directionalLight.shadow.camera.left = 100;
  directionalLight.shadow.camera.right = 100;

  const floorGeometry = new THREE.PlaneGeometry(200, 200);
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.0 });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -45 * DEG_TO_RAD;
  floor.receiveShadow = true;

  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(floor);

  document.getElementById("canvas").appendChild(renderer.domElement);

  var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

window.onload = main;
