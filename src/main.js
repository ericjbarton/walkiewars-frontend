import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "APIKEY,
    },
  })
  .mount("#app");

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
