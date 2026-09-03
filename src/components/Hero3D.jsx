import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check width - disable on small screens for performance
    if (window.innerWidth < 768) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold main objects
    const group = new THREE.Group();
    scene.add(group);

    // Outer Tech Icosahedron Wireframe
    const geometry = new THREE.IcosahedronGeometry(1.8, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosahedron = new THREE.Mesh(geometry, wireframeMaterial);
    group.add(icosahedron);

    // Inner Glowing Core Sphere
    const coreGeometry = new THREE.IcosahedronGeometry(1.0, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // Floating Particles Array
    const particlesCount = 80;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Mouse Movement Reaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle rotation
      icosahedron.rotation.x = elapsedTime * 0.15;
      icosahedron.rotation.y = elapsedTime * 0.2;

      coreMesh.rotation.x = -elapsedTime * 0.2;
      coreMesh.rotation.y = -elapsedTime * 0.25;

      particles.rotation.y = elapsedTime * 0.05;

      // Smooth inertia mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 1.5;
      group.rotation.x = targetY * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Technology Icon Badges Overlaid */}
      <div className="relative z-10 pointer-events-none w-full h-full flex items-center justify-center">
        {/* Java Badge */}
        <div className="absolute top-[15%] left-[10%] px-3.5 py-1.5 rounded-xl glass-card text-xs font-mono font-semibold text-amber-400 border border-amber-500/30 flex items-center gap-2 animate-float shadow-glow-purple">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>☕ Java 21</span>
        </div>

        {/* Spring Boot Badge */}
        <div className="absolute top-[20%] right-[8%] px-3.5 py-1.5 rounded-xl glass-card text-xs font-mono font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-2 animate-float [animation-delay:1.5s] shadow-glow-cyan">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>🍃 Spring Boot</span>
        </div>

        {/* MySQL Badge */}
        <div className="absolute bottom-[25%] left-[12%] px-3.5 py-1.5 rounded-xl glass-card text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/30 flex items-center gap-2 animate-float [animation-delay:3s]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>🐬 MySQL DB</span>
        </div>

        {/* React Badge */}
        <div className="absolute bottom-[20%] right-[10%] px-3.5 py-1.5 rounded-xl glass-card text-xs font-mono font-semibold text-blue-400 border border-blue-500/30 flex items-center gap-2 animate-float [animation-delay:4.5s] shadow-glow-blue">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>⚛️ React.js</span>
        </div>
      </div>
    </div>
  );
};
export default Hero3D;
