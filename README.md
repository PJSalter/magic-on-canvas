# magic-on-canvas

### "Magic-on-Canvas" is a creative web application built using TypeScript, React, and three.js. It allows users to create imaginative 3D wavy lines by moving their mouse. The project also incorporates a generative art style using Perlin noise, resulting in mesmerizing visual effects.

###### This is art that takes control of itself, molds and transforms as a user would move mouse across page, then beautiful patterns of colourful art will transform with it. :art:

# Art that is controlled by the machine itself

###### This will decide how it will visually look on the page.

### The effect will be growing plant that travels in any direction, constantly growing.

## Features

- Draw imaginative 3D wavy lines with mouse movements.
- Incorporates generative art style using Perlin noise.
- Clear the canvas by clicking on it.
- Responsive design for various screen sizes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and pnpm installed on your system.

## Installation

1. Change to the project directory:

```
cd magic-on-canvas
```

2. Install project dependencies:

```
pnpm install
```

# Usage

To start the development server and run the application, use the following command:

```
pnpm start
```

The application should open in your default web browser. Move your mouse to create imaginative 3D wavy lines. Click on the canvas to clear it and start fresh.

# Customization

You can customize the generative art style by tweaking noise parameters and other visual aspects in the Canvas.tsx file. Experiment with different values to create unique visual effects.

```
// Modify the generative art style here
const x = i * segmentLength - numPoints * segmentLength * 0.5;
const y = noise.noise3D(x * 0.5, time, 0) * 2;
const z = noise.noise3D(x * 0.5, time, 1) * 2;
```
