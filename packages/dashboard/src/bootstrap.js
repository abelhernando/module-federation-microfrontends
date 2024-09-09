import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// mount function to start up the app
function mount(element) {
  const app = createApp(Dashboard);
  app.mount(element);
}

// If dev and isolation call immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container and we should export mount function
export { mount };
