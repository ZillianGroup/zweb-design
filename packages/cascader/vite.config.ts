import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import typescript from "@rollup/plugin-typescript"

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
      name: "@zweb-design/cascader",
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
        "@zweb-design/theme",
        "@zweb-design/system",
        "@zweb-design/icon",
        "@zweb-design/input",
        "@zweb-design/trigger",
        "@zweb-design/input-tag",
        "@zweb-design/checkbox",
        "@zweb-design/empty",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@emotion/react": "@emotion/react",
          "@zweb-design/theme": "@zweb-design/theme",
          "@zweb-design/system": "@zweb-design/system",
          "@zweb-design/icon": "@zweb-design/icon",
          "@zweb-design/input": "@zweb-design/input",
          "@zweb-design/trigger": "@zweb-design/trigger",
          "@zweb-design/input-tag": "@zweb-design/input-tag",
          "@zweb-design/checkbox": "@zweb-design/checkbox",
          "@zweb-design/empty": "@zweb-design/empty",
        },
      },
    },
  },
})
