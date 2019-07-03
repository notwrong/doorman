<template>
  <v-app id="inspire" dark>
    <AppBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/common/AppBar";
import Footer from "./components/common/Footer";

import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
    Footer
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>
