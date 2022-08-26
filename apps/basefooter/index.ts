export async function bootstrap() {
  console.log("trigger base footer bootstrap", arguments);
}

export async function mount(props) {
  console.log("trigger base footer mount", arguments);
}

export async function unmount(porps) {
  console.log("trigger base footer unmount", arguments);
}

export async function update(props) {
  console.log("trigger only with loadMicroApp");
  console.log("trigger base footer update", arguments);
}
