import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { auth } from "./utils/firebaseConfig";
import UserList from "./components/UserList.vue";

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
    },
    //user-list route will eventually be replaced by the dashboard view
    {
      path: "/user-list",
      name: "user-list",
      component: UserList,
      beforeEnter: requireAuth
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
