import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import UUID from "vue-uuid";
import "./assets/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(UUID);
app.use(Toast);
app.mount("#app");
