import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";

import router from "./router/index";
createApp(App).use(router).mount("#app");
