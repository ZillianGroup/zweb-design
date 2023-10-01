import typescript from "@rollup/plugin-typescript"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@zweb-design/modal",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          compilerOptions: {
            rootDir: path.resolve(__dirname, "src"),
            outDir: path.resolve(__dirname, "dist", "types"),
            declaration: true,
          },
          include: path.resolve(__dirname, "src/**"),
          exclude: path.resolve(__dirname, "node_modules/**"),
        }),
      ],
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "framer-motion",
        "@zweb-design/system",
        "@zweb-design/theme",
        "@zweb-design/button",
        "@zweb-design/config-provider",
        "@zweb-design/icon",
        "react-hotkeys-hook",
        "react-focus-lock",
        "@zweb-design/trigger",
        "uuid",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@emotion/react": "@emotion/react",
          "framer-motion": "framer-motion",
          "@zweb-design/system": "@zweb-design/system",
          "@zweb-design/theme": "@zweb-design/theme",
          "@zweb-design/button": "@zweb-design/button",
          "@zweb-design/config-provider": "@zweb-design/config-provider",
          "@zweb-design/icon": "@zweb-design/icon",
          "react-hotkeys-hook": "react-hotkeys-hook",
          "react-focus-lock": "react-focus-lock",
          "@zweb-design/trigger": "@zweb-design/trigger",
          uuid: "uuid",
        },
      },
    },
  },
})
