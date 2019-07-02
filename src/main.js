import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./utils/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

let app = null;

// Wait for firebase auth to init before creating the app
auth.onAuthStateChanged(() => {
  // init app if not already created
  if (!app) {
    app = new Vue({
      created() {
        AOS.init();
      },
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
