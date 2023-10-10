import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);

    // Create a colorful background
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
        }
      `,
    });
    const background = new THREE.Mesh(geometry, material);
    scene.add(background);

    // Create a clock to control the rotation
    const clock = new THREE.Clock();

    // Function to update the rotation
    function animateBackground() {
      const elapsedTime = clock.getElapsedTime();
      background.rotation.z = elapsedTime; // Rotate around the z-axis
      renderer.render(scene, camera);
      requestAnimationFrame(animateBackground);
    }

    // Call the animateBackground function to start the animation
    animateBackground();

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x9932cc,
      opacity: 0.5,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Position the camera
    camera.position.z = 2;

    // Add a light source
    const light = new THREE.PointLight(0x00ff00);
    light.position.set(40, 30, 40);
    scene.add(light);

    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Clean up
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <div className="canvas-container" ref={canvasRef}></div>;
};

export default Canvas;
