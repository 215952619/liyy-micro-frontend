import { createApp, App } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import AppRoot from "./App.vue";
import routes from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

let instance: App | null;
let router: Router | null;
renderWithQiankun({
  mount(props: QiankunProps) {
    storeTest(props);
    render(props);
    instance && instance.config.globalProperties.$onGlobalStateChange =
      props.onGlobalStateChange;
      instance && instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  },
  bootstrap() {
    console.log(
      "%c ",
      "color: green;",
      "sub-vite2-vue3 app bootstraped",
      arguments
    );
  },
  unmount(props: QiankunProps) {
    instance && instance.unmount();
    instance && instance._container.innerHTML = "";
    instance = null;
    router = null;
  },
  update(props: QiankunProps) {
    console.log("update", arguments);
  },
});

function render(props: QiankunProps = {}) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory(
      !qiankunWindow.__POWERED_BY_QIANKUN__ ? "/sub-vite2-vue3" : "/"
    ),
    routes,
  });

  instance = createApp(AppRoot);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
