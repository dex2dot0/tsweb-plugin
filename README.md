# tsweb-plugin

Example web plugin using the typed SSF declarations and esbuild for plugin bundling.

## Overview

This project serves as an example of how to use the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/elliemae__em-ssf-guest) typed package for SSF to add TypeScript support for web plugins and handle bundling for typescript files. This is necessary as the SSF package does not currently publish its own types, nor is there an exposed mechanism for bundling. The example demonstrates how to keep plugin logic separate while bundling to a single file in either development or production mode. With production mode, the output bundle will be minified and optimized for performance.

## Prerequisites

- [PNPM](https://pnpm.io/) It is recommended to use PNPM as the package manager for this project and assumed that it is installed. If you do not have PNPM installed, you can install it by running visiting the [PNPM installation page](https://pnpm.io/installation).
- [@types/elliemae\_\_em-ssf-guest](https://www.npmjs.com/package/@types/elliemae__em-ssf-guest) This package provides the typed declarations for the SSF package and is what provides type support for SSF. It is assumed that this package is installed in your project. If you do not have this package installed, you can install it by running `pnpm add @types/elliemae__em-ssf-guest -D`.

## Setup

Clone the repository:

```bash
git clone https://github.com/dex2dot0/tsweb-plugin.git
cd tsweb-plugin
```

Install dependencies:

```bash
pnpm install
```

## Scripts

**Bundles**

The minified bundles are more performant while it is recommended to use the development bundle for debugging purposes. The development bundle is unminified and easier to debug. The production bundles are minified and optimized for performance. However as with all things, there are trade-offs. The production bundle is more difficult to debug due to minification but generates source maps for the single file bundle that can be used for debugging purposes. If you have a fairly simple plugin, the unminifed development bundle is likely sufficient for your needs but the decision is ultimately up to you.

### **Development Bundles**

#### Single File Development Bundle

In your terminal, run:

```bash
pnpm run build
```

This will bundle the plugin in to a single file in the `dist/dev` directory. The output will be a single file that can be loaded as your plugin in EM Web. The bundle will be unminified for easier debugging.

#### Separate File Development Bundle

In your terminal, run:

```bash
pnpm run build:split
```

This will bundle the plugin in to separate files in the `dist/dev-split/plugins` directory. The output will be multiple files that can be loaded as your plugin in Web. The bundle will be unminified for easier debugging.

### **Minified Builds**

#### Single File Production Bundle

In your terminal, run:

```bash
pnpm run build:prod
```

This will bundle the plugin in to a single file in the `dist/prod` directory. The output will be a single file that can be loaded as your plugin in EM Web. The bundle will be minified and optimized for performance. This is the recommended build for production use. In addition, a sourcemap file will be generated that can be used to help with debugging in production scenarios if needed.

#### Separate File Production Bundle

In your terminal, run:

```bash
pnpm run build-split:prod
```

This will bundle the plugin in to separate files in the `dist/prod-split/plugins` directory. The output will be multiple files that can be loaded as your plugin in Web. The bundle will be minified and optimized for performance. This is the recommended build for production use.

:warning: This build does not generate source maps for the separate files. If you need source maps for debugging, use the single file production bundle.

### **Type Checking**:

Run TypeScript type checking:

```bash
pnpm run typecheck
```

## Disclaimer

:warning: This is an example of how to support Typescript for web plugins and does not constitute official guidance. Use of this example is at your own risk and provided as-is. The example may not be maintained or updated in the future.
