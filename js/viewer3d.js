// =============================================
// 3D MOLECULAR VIEWER USING THREE.JS
// =============================================

class MolecularViewer3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.animationId = null;
    this.moleculeGroup = null;
    this.isAnimating = false;
    this.animPhase = 'reactants'; // 'reactants' | 'transition' | 'products'
    this.autoRotate = true;
    this.mouseDown = false;
    this.lastMouse = { x: 0, y: 0 };
    this.rotationSpeed = 0.006;
    this.currentData = null;
    this.animProgress = 0;
    this.init();
  }

  init() {
    // SCENE
    this.scene = new THREE.Scene();

    // CAMERA — fallback to reasonable defaults if container has zero dimensions
    const w = this.container.clientWidth || 400;
    const h = this.container.clientHeight || 260;
    this.camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    this.camera.position.set(0, 0, 8);

    // RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    // LIGHTING
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0x4488ff, 1.2);
    dir1.position.set(5, 5, 5);
    this.scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x8855ff, 0.8);
    dir2.position.set(-5, -3, 3);
    this.scene.add(dir2);

    const point = new THREE.PointLight(0x06b6d4, 1.5, 15);
    point.position.set(0, 3, 4);
    this.scene.add(point);

    // Grid helper (subtle)
    const grid = new THREE.GridHelper(12, 20, 0x1a2a4a, 0x0d1a30);
    grid.position.y = -3;
    grid.material.opacity = 0.3;
    grid.material.transparent = true;
    this.scene.add(grid);

    // Event listeners
    this.renderer.domElement.addEventListener('mousedown', e => {
      this.mouseDown = true;
      this.autoRotate = false;
      this.lastMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });
    window.addEventListener('mousemove', e => {
      if (!this.mouseDown || !this.moleculeGroup) return;
      const dx = e.clientX - this.lastMouse.x;
      const dy = e.clientY - this.lastMouse.y;
      this.moleculeGroup.rotation.y += dx * 0.012;
      this.moleculeGroup.rotation.x += dy * 0.012;
      this.lastMouse = { x: e.clientX, y: e.clientY };
    });

    // Touch support
    this.renderer.domElement.addEventListener('touchstart', e => {
      this.autoRotate = false;
      this.lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });
    this.renderer.domElement.addEventListener('touchmove', e => {
      if (!this.moleculeGroup) return;
      const dx = e.touches[0].clientX - this.lastMouse.x;
      const dy = e.touches[0].clientY - this.lastMouse.y;
      this.moleculeGroup.rotation.y += dx * 0.012;
      this.moleculeGroup.rotation.x += dy * 0.012;
      this.lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    // Resize
    this._resizeHandler = () => this.resize();
    window.addEventListener('resize', this._resizeHandler);

    // Scroll-based zoom
    this.renderer.domElement.addEventListener('wheel', e => {
      this.camera.position.z += e.deltaY * 0.01;
      this.camera.position.z = Math.max(4, Math.min(16, this.camera.position.z));
    });

    this.animate();
  }

  resize() {
    if (!this.container || !this.renderer) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  clearScene() {
    if (this.moleculeGroup) {
      this.scene.remove(this.moleculeGroup);
      this.moleculeGroup.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
    }
    this.moleculeGroup = new THREE.Group();
    this.scene.add(this.moleculeGroup);
  }

  getAtomColor(symbol) {
    const colors = {
      'C': 0x555566, 'H': 0xddddcc, 'O': 0xff3333,
      'N': 0x3366ff, 'Br': 0xbb5500, 'Cl': 0x33bb33,
      'F': 0x66ffcc, 'S': 0xffcc00, 'P': 0xff8800,
      'Mg': 0x00cc88, 'Na': 0xaa44cc, 'K': 0x9900cc,
      'Li': 0xcc3344, 'I': 0x990099, 'Zn': 0x7d80b0,
      'Al': 0x8a9999, 'Ag': 0xc0c0c0, 'Cr': 0x8a99c7, 'Fe': 0xe06633
    };
    return colors[symbol] || 0x888888;
  }

  getAtomRadius(symbol) {
    const radii = {
      'C': 0.30, 'H': 0.18, 'O': 0.28, 'N': 0.27,
      'Br': 0.38, 'Cl': 0.34, 'F': 0.23, 'S': 0.35,
      'P': 0.35, 'Mg': 0.40, 'Na': 0.44, 'I': 0.45,
      'Zn': 0.42, 'Al': 0.41, 'Ag': 0.46, 'Cr': 0.42, 'Fe': 0.41
    };
    return radii[symbol] || 0.30;
  }

  buildMolecule(atoms, bonds) {
    const group = new THREE.Group();
    const atomMeshes = [];

    atoms.forEach((atom, i) => {
      const radius = this.getAtomRadius(atom.symbol);
      const geo = new THREE.SphereGeometry(radius, 32, 32);
      const mat = new THREE.MeshPhongMaterial({
        color: this.getAtomColor(atom.symbol),
        shininess: 120,
        specular: 0x444466,
        emissive: new THREE.Color(this.getAtomColor(atom.symbol)).multiplyScalar(0.08)
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(atom.x, atom.y, atom.z || 0);
      group.add(mesh);
      atomMeshes.push(mesh);

      // Atom label sprite
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0,0,64,64);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px Inter,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(atom.symbol, 32, 32);
      const tex = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.9 });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.45, 0.45, 1);
      sprite.position.set(atom.x, atom.y + radius + 0.25, (atom.z || 0));
      group.add(sprite);
    });

    // Bonds
    bonds.forEach(([a, b]) => {
      if (a >= atomMeshes.length || b >= atomMeshes.length) return;
      const posA = atomMeshes[a].position;
      const posB = atomMeshes[b].position;
      const dir = new THREE.Vector3().subVectors(posB, posA);
      const len = dir.length();
      const mid = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);

      const geo = new THREE.CylinderGeometry(0.06, 0.06, len, 12);
      const mat = new THREE.MeshPhongMaterial({
        color: 0x99aacc,
        shininess: 80,
        transparent: true,
        opacity: 0.85
      });
      const bond = new THREE.Mesh(geo, mat);
      bond.position.copy(mid);
      bond.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.normalize()
      );
      group.add(bond);
    });

    return group;
  }

  showReactants(data) {
    this.currentData = data;
    this.animPhase = 'reactants';
    this.clearScene();
    if (!data || !data.reactants) return;
    const mol = this.buildMolecule(data.reactants, data.bonds || []);
    this.moleculeGroup.add(mol);
  }

  showProducts(data) {
    this.currentData = data;
    this.animPhase = 'products';
    this.clearScene();
    if (!data || !data.products) return;
    const mol = this.buildMolecule(data.products, data.productBonds || []);
    this.moleculeGroup.add(mol);
  }

  playReactionAnimation(data) {
    if (!data || !data.reactants) return;
    this.currentData = data;
    this.animPhase = 'animating';
    this.animProgress = 0;
    this.autoRotate = true;
    this._runAnimation(data);
  }

  _runAnimation(data) {
    if (this.transitionId) clearInterval(this.transitionId);
    let step = 0;
    const totalSteps = 90;

    // Start with reactants
    this.showReactants(data);

    this.transitionId = setInterval(() => {
      step++;
      const t = step / totalSteps;

      if (!this.moleculeGroup) { clearInterval(this.transitionId); return; }

      // Lerp atoms from reactant to product positions
      if (t < 0.4) {
        // Phase 1: expand/shake reactants
        const shake = Math.sin(t * Math.PI * 12) * 0.05 * (t / 0.4);
        this.moleculeGroup.position.x = shake;
        this.moleculeGroup.rotation.z = shake * 0.3;
      } else if (t >= 0.4 && t < 0.45) {
        // Mid - flash then rebuild
        this.clearScene();
        // Add glow sphere at transition
        const geo = new THREE.SphereGeometry(1.5, 32, 32);
        const mat = new THREE.MeshBasicMaterial({
          color: 0x06b6d4,
          transparent: true,
          opacity: (0.45 - t) / 0.05
        });
        const flash = new THREE.Mesh(geo, mat);
        this.moleculeGroup.add(flash);
      } else if (t >= 0.45 && t < 0.5) {
        // Build products
        this.clearScene();
        const mol = this.buildMolecule(data.products || data.reactants, data.productBonds || data.bonds || []);
        this.moleculeGroup.add(mol);
      } else if (t >= 0.5) {
        // Float product upward
        const phase2t = (t - 0.5) / 0.5;
        const bounce = Math.sin(phase2t * Math.PI) * 0.3;
        this.moleculeGroup.position.y = bounce;
        this.moleculeGroup.position.x = 0;
      }

      if (step >= totalSteps) {
        clearInterval(this.transitionId);
        this.moleculeGroup.position.set(0, 0, 0);
        this.animPhase = 'products';
      }
    }, 30);
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (this.moleculeGroup && this.autoRotate) {
      this.moleculeGroup.rotation.y += this.rotationSpeed;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.transitionId) clearInterval(this.transitionId);
    if (this._resizeHandler) window.removeEventListener('resize', this._resizeHandler);
    if (this.renderer && this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
  }
}
