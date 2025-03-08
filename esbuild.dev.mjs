import * as esbuild from 'esbuild';

await esbuild
  .build({
    entryPoints: ['./src/index.ts'], // Entry point of your application
    bundle: true, // Bundle all dependencies into one file
    outfile: './dist/dev/bundle.js', // Output file
    platform: 'browser', // Target platform
    format: 'esm', // Output format
    sourcemap: false, // Enable source maps
    minify: false, // Minify the output (set to true for production)
    target: ['esnext'], // JavaScript language target
    loader: { '.ts': 'ts' }, // Handle TypeScript files
  })
  .catch(() => process.exit(1));
