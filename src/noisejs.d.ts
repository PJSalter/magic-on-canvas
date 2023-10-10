declare module "noisejs" {
  export class Noise {
    noise3D(x: number, y: number, z: number): number;
    // Add other methods if needed
  }

  // If SimplexNoise is also used, add declarations for it as well
  export class SimplexNoise {
    // Add methods and properties
  }
}
