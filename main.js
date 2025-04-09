AOS.init({
    duration: 800,
    once: true
  });
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  const particles = new THREE.BufferGeometry();
  const count = 500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  let hue = 185;
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: new THREE.Color(`hsl(${hue}, 100%, 60%)`)
  });
  const points = new THREE.Points(particles, particleMaterial);
  scene.add(points);
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
    hue = (hue + 0.05) % 360;
    particleMaterial.color.setHSL((180 + Math.sin(hue * 0.02) * 20) / 360, 1, 0.6);
    points.rotation.y += 0.0015;
    points.rotation.x += 0.001;
    renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  