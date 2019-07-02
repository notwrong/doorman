import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { auth } from "./utils/firebaseConfig";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});

function requireAuth(to, from, next) {
  if (auth.currentUser) {
    next();
  }
  next({
    name: "home",
    replace: true
  });
}
