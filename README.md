# Magic-on-Canvas

"Magic-on-Canvas" is a creative web application built using TypeScript and React, with Three.js integration. It allows users to explore and interact with a 3D scene featuring a rotating cube on a colorful background. This project serves as a great starting point for 3D graphics experimentation and exploration.

## Features

- Display a 3D rotating cube on a colorful background.
- Interactive 3D graphics created using Three.js.
- Phong shaded cube with a semi-transparent material.
- Responsive design for various screen sizes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and pnpm installed on your system.

## Installation

1. Clone the project repository:

```
git clone https://github.com/PJSalter/magic-on-canvas.git
cd magic-on-canvas
```

2. Install project dependencies:

```
pnpm install

```

## Usage

To start the development server and run the application, use the following command:

```
pnpm start

```

This application will open in your default web browser, displaying a 3D cube on a colorful background. You can interact with the cube using the mouse to rotate it.

## Customization

You can customize your own projects to explore different 3D graphics and visual effects. Here are some areas you can modify:

#### Background

You can change the background color or create more complex background effects by modifying the fragment shader in the `Canvas.tsx` file:

```
fragmentShader: `
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0); // Customize the background here
  }
`,

```

#### Cube

You can customize the cube's appearance by adjusting its material properties in the `Canvas.tsx` file:

```
const cubeMaterial = new THREE.MeshPhongMaterial({
  color: 0x9932cc, // Change the cube color here
  opacity: 0.5,
  side: THREE.DoubleSide,
  transparent: true,
});

```

#### Cube Animation

You can modify the cube's animation behavior in the `Canvas.tsx` file. For example, changing the rotation speed:

```
cube.rotation.x += 0.02; // Adjust the rotation speed
cube.rotation.y += 0.02;

```

Feel free to experiment and create unique visual effects by tweaking these parameters and exploring the capabilities of Three.js, and have as much fun as I did creating it 🤩🚀.
