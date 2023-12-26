import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import { createI18n } from "vue-i18n";
import ru from "./locales/ru";
import kz from "./locales/kz";

// Import the router configuration
import router from "./router/index";

const i18n = createI18n({
  locale: "kz",
  messages: {
    kz,
    ru,
  },
});

// Language switch logic
i18n.beforeCreate = function () {
  this.$root.$on("changeLocale", (newLocale) => {
    localStorage.setItem("userLocale", newLocale);
    this.$i18n.locale = newLocale; // Update the locale dynamically
  });
};

// Create the Vue app and use the router and i18n
const app = createApp(App);
app.use(router);
app.use(i18n);

// Mount the app to the #app element
app.mount("#app");
