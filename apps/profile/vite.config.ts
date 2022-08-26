// vue3
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";

const packageName = import.meta.env.VITE_PROJECT_NAME;
export default ({ mode }) => {
  const __DEV__ = mode === "development";
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
    base: __DEV__ ? "/" : `//localhost:${port}`,
    plugins: [
      vue(),
      qiankun(packageName, {
        useDevMode: true,
      }),
    ],
  });
};
