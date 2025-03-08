import esbuild from 'esbuild';
import devServer from 'esbuild-plugin-dev-server';

(async () => {
  await esbuild.build({
    entryPoints: ['./src/index.ts'], // Entry point of your application
    bundle: true, // Bundle all dependencies into one file
    outfile: 'dist/server/bundle.js', // Output file
    platform: 'browser', // Target platform
    format: 'esm', // Output format
    sourcemap: true, // Enable source maps
    minify: false, // Minify the output (set to true for production)
    target: ['esnext'], // JavaScript language target
    loader: { '.ts': 'ts' }, // Handle TypeScript files
    plugins: [devServer({ public: 'dist' })],
  });
})();
