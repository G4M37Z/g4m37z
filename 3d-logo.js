// 3D Logo Creation with Three.js
let logoScene, logoCamera, logoRenderer;
let logoMesh;

function init3DLogo() {
    const container = document.getElementById('logoCanvas');
    if (!container) return;

    // Scene setup
    logoScene = new THREE.Scene();
    logoScene.background = new THREE.Color(0x0a0e27);

    // Camera setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    logoCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    logoCamera.position.z = 2.5;

    // Renderer setup
    logoRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    logoRenderer.setSize(width, height);
    logoRenderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(logoRenderer.domElement);

    // Create 3D Cube Logo
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    
    // Create gradient canvas for texture
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, '#ff006e');
    gradient.addColorStop(0.5, '#8338ec');
    gradient.addColorStop(1, '#3a86ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G4', 128, 100);
    ctx.fillText('M', 128, 170);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({ 
        map: texture,
        emissive: 0xff006e,
        emissiveIntensity: 0.3,
        shininess: 100
    });

    logoMesh = new THREE.Mesh(geometry, material);
    logoScene.add(logoMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    logoScene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff006e, 1, 100);
    pointLight.position.set(5, 5, 5);
    logoScene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x3a86ff, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    logoScene.add(pointLight2);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        logoMesh.rotation.x += 0.005;
        logoMesh.rotation.y += 0.008;
        logoRenderer.render(logoScene, logoCamera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        logoCamera.aspect = newWidth / newHeight;
        logoCamera.updateProjectionMatrix();
        logoRenderer.setSize(newWidth, newHeight);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init3DLogo);
