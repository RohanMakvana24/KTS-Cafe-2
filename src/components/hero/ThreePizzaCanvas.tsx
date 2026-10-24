import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export interface ThreePizzaCanvasProps {
  onLoaded?: () => void;
  interactive?: boolean;
}

export const ThreePizzaCanvas: React.FC<ThreePizzaCanvasProps> = ({
  onLoaded,
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let frameId: number = 0;
    let isDisposed = false;

    // Detect software WebGL as per Three.js directives
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50);
    camera.position.set(0, 3.2, 5.2);
    camera.lookAt(0, 0, 0);

    // 3. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = !isSoftwareGl;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL init failed:', e);
      setHasError(true);
      return;
    }

    // 4. Studio Lighting Rig
    // Warm key light
    const keyLight = new THREE.DirectionalLight(0xfff1cf, 2.8);
    keyLight.position.set(3.5, 6, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 1;
      keyLight.shadow.camera.far = 12;
      keyLight.shadow.camera.left = -3;
      keyLight.shadow.camera.right = 3;
      keyLight.shadow.camera.top = 3;
      keyLight.shadow.camera.bottom = -3;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    // Cool fill light
    const fillLight = new THREE.HemisphereLight(0xffffff, 0x1f2430, 1.2);
    fillLight.position.set(0, 6, 0);
    scene.add(fillLight);

    // Signature KT's Yellow Rim Light
    const rimLight = new THREE.DirectionalLight(0xffdd17, 2.2);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // Warm Accent Red Rim Light for appetizing contrast
    const accentRim = new THREE.DirectionalLight(0xe01e25, 1.5);
    accentRim.position.set(3, 1, -4);
    scene.add(accentRim);

    // 5. Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d')!;
    const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(5, 7, 8, 0.7)');
    grad.addColorStop(0.4, 'rgba(5, 7, 8, 0.4)');
    grad.addColorStop(0.8, 'rgba(5, 7, 8, 0.1)');
    grad.addColorStop(1, 'rgba(5, 7, 8, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);

    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.42;
    scene.add(shadowMesh);

    // 6. Master Pizza Group
    const pizzaGroup = new THREE.Group();
    scene.add(pizzaGroup);

    // --- Part A: Wooden Pizza Peel / Board ---
    const boardGeo = new THREE.CylinderGeometry(2.15, 2.15, 0.1, 48);
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x1e1915,
      roughness: 0.75,
      metalness: 0.05,
    });
    const boardMesh = new THREE.Mesh(boardGeo, boardMat);
    boardMesh.position.y = -0.12;
    boardMesh.receiveShadow = !isSoftwareGl;
    pizzaGroup.add(boardMesh);

    // Peel Handle
    const handleGeo = new THREE.BoxGeometry(0.35, 0.08, 1.4);
    const handleMesh = new THREE.Mesh(handleGeo, boardMat);
    handleMesh.position.set(0, -0.12, 2.7);
    pizzaGroup.add(handleMesh);

    // --- Part B: Pizza Crust (Wood-Fired Outer Ring) ---
    // Procedural procedural torus for crust
    const crustGeo = new THREE.TorusGeometry(1.7, 0.22, 24, 64);
    // Procedural crust texture with blistered golden-brown wood-fired marks
    const crustCanvas = document.createElement('canvas');
    crustCanvas.width = 512;
    crustCanvas.height = 256;
    const cCtx = crustCanvas.getContext('2d')!;
    cCtx.fillStyle = '#C68032';
    cCtx.fillRect(0, 0, 512, 256);
    // Add wood-fired charred spots
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const r = 2 + Math.random() * 8;
      cCtx.fillStyle = Math.random() > 0.4 ? 'rgba(60, 30, 10, 0.75)' : 'rgba(230, 160, 60, 0.5)';
      cCtx.beginPath();
      cCtx.arc(x, y, r, 0, Math.PI * 2);
      cCtx.fill();
    }
    const crustTexture = new THREE.CanvasTexture(crustCanvas);
    crustTexture.colorSpace = THREE.SRGBColorSpace;

    const crustMat = new THREE.MeshStandardMaterial({
      map: crustTexture,
      roughness: 0.88,
      metalness: 0.04,
    });
    const crustMesh = new THREE.Mesh(crustGeo, crustMat);
    crustMesh.rotation.x = Math.PI / 2;
    crustMesh.position.y = 0.02;
    crustMesh.castShadow = !isSoftwareGl;
    crustMesh.receiveShadow = !isSoftwareGl;
    pizzaGroup.add(crustMesh);

    // --- Part C: Pizza Bed (Sauce & Bubbly Mozzarella) ---
    const bedGeo = new THREE.CylinderGeometry(1.68, 1.68, 0.08, 48);
    // Canvas texture for sauce streaks and mozzarella melt
    const cheeseCanvas = document.createElement('canvas');
    cheeseCanvas.width = 512;
    cheeseCanvas.height = 512;
    const chCtx = cheeseCanvas.getContext('2d')!;
    // Cheese base
    chCtx.fillStyle = '#FFE682';
    chCtx.fillRect(0, 0, 512, 512);
    // Tomato sauce swirls (#B71C1C & #E01E25)
    for (let i = 0; i < 40; i++) {
      const x = 256 + (Math.random() - 0.5) * 360;
      const y = 256 + (Math.random() - 0.5) * 360;
      const r = 15 + Math.random() * 35;
      const sGrad = chCtx.createRadialGradient(x, y, 0, x, y, r);
      sGrad.addColorStop(0, '#C62828');
      sGrad.addColorStop(0.6, '#E01E25');
      sGrad.addColorStop(1, 'rgba(255, 230, 130, 0)');
      chCtx.fillStyle = sGrad;
      chCtx.beginPath();
      chCtx.arc(x, y, r, 0, Math.PI * 2);
      chCtx.fill();
    }
    // Melted golden spots
    for (let i = 0; i < 60; i++) {
      const x = 256 + (Math.random() - 0.5) * 380;
      const y = 256 + (Math.random() - 0.5) * 380;
      chCtx.fillStyle = 'rgba(235, 140, 20, 0.65)';
      chCtx.beginPath();
      chCtx.arc(x, y, 3 + Math.random() * 7, 0, Math.PI * 2);
      chCtx.fill();
    }
    const cheeseTexture = new THREE.CanvasTexture(cheeseCanvas);
    cheeseTexture.colorSpace = THREE.SRGBColorSpace;

    const bedMat = new THREE.MeshStandardMaterial({
      map: cheeseTexture,
      roughness: 0.45,
      metalness: 0.08,
    });
    const bedMesh = new THREE.Mesh(bedGeo, bedMat);
    bedMesh.position.y = 0.01;
    bedMesh.receiveShadow = !isSoftwareGl;
    pizzaGroup.add(bedMesh);

    // --- Part D: Gourmet Toppings (Organically Distributed) ---
    // 1. Cherry Tomato Halves (Accent Red #E01E25)
    const tomatoMat = new THREE.MeshStandardMaterial({
      color: 0xd32f2f,
      roughness: 0.25,
      metalness: 0.1,
    });
    const tomatoGeo = new THREE.SphereGeometry(0.16, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);

    const tomatoPositions = [
      [-0.7, 0.6],
      [0.8, 0.5],
      [-0.4, -0.9],
      [0.5, -0.7],
      [-1.0, -0.2],
      [1.1, -0.3],
      [0.1, 0.95],
      [-0.1, -0.3],
    ];

    tomatoPositions.forEach(([x, z], i) => {
      const tomato = new THREE.Mesh(tomatoGeo, tomatoMat);
      tomato.position.set(x, 0.06, z);
      tomato.rotation.y = i * 0.8;
      tomato.castShadow = !isSoftwareGl;
      pizzaGroup.add(tomato);
    });

    // 2. Fresh Basil Leaves (Vegetarian Green #00843D)
    const basilMat = new THREE.MeshStandardMaterial({
      color: 0x00843d,
      roughness: 0.4,
      metalness: 0.02,
      side: THREE.DoubleSide,
    });
    // Create petal-like curved leaf shape
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(0.18, 0.15, 0.12, 0.35);
    leafShape.quadraticCurveTo(0, 0.45, -0.12, 0.35);
    leafShape.quadraticCurveTo(-0.18, 0.15, 0, 0);
    const leafGeo = new THREE.ShapeGeometry(leafShape);

    const basilPositions = [
      [0.2, 0.2, 0.4],
      [-0.5, 0.1, -0.6],
      [0.5, -0.2, 1.2],
      [-0.2, -0.6, -1.8],
      [0.9, -0.8, 2.3],
      [-0.8, 0.8, -0.9],
      [0.6, 0.9, 0.8],
    ];

    basilPositions.forEach(([x, z, rot]) => {
      const leaf = new THREE.Mesh(leafGeo, basilMat);
      leaf.position.set(x, 0.08, z);
      leaf.rotation.x = -Math.PI / 2 + 0.1;
      leaf.rotation.z = rot;
      leaf.scale.set(0.9, 0.9, 0.9);
      leaf.castShadow = !isSoftwareGl;
      pizzaGroup.add(leaf);
    });

    // 3. Bell Pepper Rings (Yellow #FFDD17 & Green)
    const pepperYellowMat = new THREE.MeshStandardMaterial({
      color: 0xffdd17,
      roughness: 0.35,
      metalness: 0.05,
    });
    const pepperGeo = new THREE.TorusGeometry(0.2, 0.035, 8, 20, Math.PI * 1.4);

    const pepperCoords = [
      [0.3, 0.5, 0.5],
      [-0.6, -0.4, 1.8],
      [0.8, -0.4, -1.2],
      [-0.7, 0.4, -0.4],
      [0.1, -0.8, 2.6],
    ];

    pepperCoords.forEach(([x, z, rot]) => {
      const pepper = new THREE.Mesh(pepperGeo, pepperYellowMat);
      pepper.position.set(x, 0.07, z);
      pepper.rotation.x = Math.PI / 2;
      pepper.rotation.z = rot;
      pizzaGroup.add(pepper);
    });

    // 4. Black Olives (Dark rings)
    const oliveMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.5,
      metalness: 0.2,
    });
    const oliveGeo = new THREE.TorusGeometry(0.09, 0.04, 8, 16);

    const olivePositions = [
      [0.0, 0.6],
      [-0.3, 0.35],
      [0.55, 0.15],
      [-0.75, -0.7],
      [0.35, -0.45],
      [-0.9, 0.1],
      [0.9, 0.35],
      [-0.2, -0.9],
    ];

    olivePositions.forEach(([x, z]) => {
      const olive = new THREE.Mesh(oliveGeo, oliveMat);
      olive.position.set(x, 0.07, z);
      olive.rotation.x = Math.PI / 2;
      pizzaGroup.add(olive);
    });

    // Initial orientation: slightly tilted forward so camera sees toppings in all their beauty
    pizzaGroup.rotation.x = 0.32;
    pizzaGroup.position.y = -0.05;

    // 7. Interactive Mouse / Touch Parallax Tracking
    let targetRotY = 0;
    let targetRotX = 0.32;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const onPointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotY += (nx * 0.15 - targetRotY) * 0.05;
      targetRotX = 0.32 + ny * 0.12;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        onPointerMove(e);
        return;
      }
      const deltaX = e.clientX - previousPointerX;
      const deltaY = e.clientY - previousPointerY;
      targetRotY += deltaX * 0.01;
      targetRotX = Math.max(0.1, Math.min(0.65, targetRotX + deltaY * 0.008));
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousPointerX;
      const deltaY = e.touches[0].clientY - previousPointerY;
      targetRotY += deltaX * 0.012;
      targetRotX = Math.max(0.1, Math.min(0.65, targetRotX + deltaY * 0.008));
      previousPointerX = e.touches[0].clientX;
      previousPointerY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 8. Responsive Canvas Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    if (onLoaded) {
      onLoaded();
    }

    // 9. Animation Loop with Exponential Damping & Floating Motion
    const clock = new THREE.Clock();
    let isVisible = true;

    const animate = () => {
      if (isDisposed || !isVisible) return;
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Slow, appetizing background rotation when not dragging
      if (!isDragging) {
        targetRotY += delta * 0.22;
      }

      // Smooth damping interpolation (no snapping)
      pizzaGroup.rotation.y = THREE.MathUtils.damp(pizzaGroup.rotation.y, targetRotY, 8, delta);
      pizzaGroup.rotation.x = THREE.MathUtils.damp(pizzaGroup.rotation.x, targetRotX, 8, delta);

      // Subtle natural vertical floating
      pizzaGroup.position.y = -0.05 + Math.sin(elapsed * 1.4) * 0.06;

      renderer.render(scene, camera);
    };

    // Pause WebGL rendering when offscreen to conserve GPU/CPU
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!wasVisible && isVisible && !isDisposed) {
          clock.start();
          animate();
        } else if (!isVisible) {
          cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    animate();

    // 10. Clean Resource Disposal on unmount
    return () => {
      isDisposed = true;
      cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();

      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      resizeObserver.disconnect();

      // Dispose Geometries
      shadowGeo.dispose();
      boardGeo.dispose();
      handleGeo.dispose();
      crustGeo.dispose();
      bedGeo.dispose();
      tomatoGeo.dispose();
      leafGeo.dispose();
      pepperGeo.dispose();
      oliveGeo.dispose();

      // Dispose Textures
      shadowTexture.dispose();
      crustTexture.dispose();
      cheeseTexture.dispose();

      // Dispose Materials
      shadowMat.dispose();
      boardMat.dispose();
      crustMat.dispose();
      bedMat.dispose();
      tomatoMat.dispose();
      basilMat.dispose();
      pepperYellowMat.dispose();
      oliveMat.dispose();

      // Clear DOM
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, onLoaded]);

  if (hasError) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      <div
        ref={mountRef}
        className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]"
      />

      {/* Subtle Drag Hint Overlay */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#050708]/80 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-neutral-300 pointer-events-none transition-opacity duration-300 ${
          isInteracting ? 'opacity-0' : 'opacity-80'
        }`}
      >
        ✦ Drag or touch to rotate pizza
      </div>
    </div>
  );
};
