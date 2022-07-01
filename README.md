# electron-vite-vue

`Electron` + `Vue` + `Vite`

## Quick Start

```sh
npm run dev
```

## Directory

A `dist` folder will be generated everytime when `dev` or `build` command is executed. File structure of `dist` is identical to the `packages` directory to avoid any potential path calculation errors.

```tree
├── dist                      Will be generated following the structure of "packages" directory
|   ├── main
|   ├── preload
|   └── renderer
|
├── scripts
|   ├── build.mjs             Build script -> npm run build
|   └── watch.mjs             Develop script -> npm run dev
|
├── packages
|   ├── main                  Main-process source code
|   |   └── vite.config.ts
|   ├── preload               Preload-script source code
|   |   └── vite.config.ts
|   └── renderer              Renderer-process source code
|       └── vite.config.ts
```
