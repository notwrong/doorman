import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";

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
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: requireAuth
    }
  ]
});

function requireAuth(to, from, next) {
  const idToken = localStorage.getItem("idToken");
  if (!idToken) next({ name: "home", replace: true });
  axios
    .get(
      "https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/auth",
      {
        headers: {
          authorization: idToken
        }
      }
    )
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        next();
        return;
      }
      next({
        name: "home",
        replace: true
      });
    });
}
