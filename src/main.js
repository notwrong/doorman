import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./utils/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserTimes, faUserCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faUserTimes, faUserCheck);
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.devtools = true;
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
