import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCZsVW_CBi7UsbMeFW2Bh7AgsbmuIe9PXw",
    },
  })
  .mount("#app");

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
