let scene, camera, renderer, cube

function init() {
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({ antialias: true }); // , alpha: true
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.shadowMap.enabled = true;

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // const texture = new THREE.TextureLoader().load('textures/bvbb.jpg');
  // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

  // const texture = new THREE.TextureLoader().load('textures/syrocon.jpg');
  // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

  const loader = new THREE.CubeTextureLoader();
  loader.setPath('textures/');
  // const textureCube = loader.load([
  //   'mira-1.jpg',
  //   'mira-2.jpg',
  //   'mira-3.jpg',
  //   'mira-4.jpg',
  //   'mira-5.jpg',
  //   'mira-6.jpg'
  // ]);
  const textureCube = loader.load([
    'flower-1.jpg',
    'flower-2.jpg',
    'flower-3.jpg',
    'flower-4.jpg',
    'flower-5.jpg',
    'flower-6.jpg'
  ]);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube });

  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
}

function animate() {
  requestAnimationFrame(animate);  // call 'animate' function again and again
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
