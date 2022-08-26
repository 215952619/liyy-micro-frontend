import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";

const port = 7710;
const packageName = require("./package.json").name;
export default ({ mode }) => {
  const __dev__ = mode === "development";
  return defineConfig({
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    server: {
      port: port,
      origin: `//localhost:${port}`,
    },
    base: __dev__ ? "/" : `//localhost:${port}`,
    plugins: [
      qiankun(packageName, {
        useDevMode: true,
      }),
    ],
  });
};
