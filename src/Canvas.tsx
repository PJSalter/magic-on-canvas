import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
    const geometry = new THREE.BoxGeometry(2, 2, 1, 1);
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

    // Create a sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // Adjust the geometry as needed
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00, // Green color
      metalness: 0.5, // Adjust the metalness (0 to 1, higher value for more metallic)
      roughness: 0.2, // Adjust the roughness (0 to 1, lower value for more shine)
      opacity: 12, // Adjust the opacity (0 to 1)
      side: THREE.DoubleSide, // Render both sides of the geometry
      transparent: true, // Enable transparency
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Position the camera
    camera.position.z = 5;

    // Add a light source
    const light = new THREE.PointLight(0xffffff);
    light.position.set(0, 0, 5);
    scene.add(light);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffff00); // Adjust the color as needed
    scene.add(ambientLight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      sphere.rotation.x += 0.07;
      sphere.rotation.y += 0.07;

      // Update orbit controls
      controls.update();

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
