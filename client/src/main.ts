import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";
import App from "./App.vue";
import { db } from "./config/Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(VueFire, {
  db,
  modules: [VueFireAuth()],
});

app.mount("#app");
