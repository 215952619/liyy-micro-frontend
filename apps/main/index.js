import { registerMicroApps, loadMicroApp, start } from "qiankun";

registerMicroApps([
  {
    name: "react app",
    entry: "//localhost:5173",
    container: "#reactRoot",
    activeRule: "/admin",
  },
  {
    name: "vue app",
    entry: {
      scripts: ["//localhost:3000/main.js"],
    },
    container: "#vueRoot",
    activeRule: "/",
  },
]);

loadMicroApp({
  name: "basefooter",
  entry: "//localhost:7710",
  container: "#basefooter",
});

start();
