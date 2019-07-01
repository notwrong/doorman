import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#FF7043",
    success: "#3cd1c2",
    info: "#ffaa2c",
    error: "#f83e70"
  }
});
