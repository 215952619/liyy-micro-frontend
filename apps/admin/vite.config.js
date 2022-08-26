// react
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import reactRefresh from "@vitejs/plugin-react-refresh";

// useDevMode 开启时与热更新插件冲突
const useDevMode = true;
const port = 7701;
const packageName = require("./package.json").name;
export default ({ mode }) => {
  const __DEV__ = mode === "development";
  return defineConfig({
    server: {
      port: port,
      origin: `//localhost:${port}`,
    },
    base: __DEV__ ? "/" : `//localhost:${port}`,
    plugins: [
      ...(useDevMode ? [] : [reactRefresh()]),
      qiankun(packageName, {
        useDevMode: true,
      }),
    ],
  });
};
