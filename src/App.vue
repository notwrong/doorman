<template>
  <v-app id="inspire" dark>
    <AppBar />
    <v-content>
      <SearchBar v-if="currentUser" />
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/common/AppBar";
import Footer from "./components/common/Footer";
import SearchBar from "./components/Search/SearchBar.vue";

import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
    SearchBar,
    Footer
  },
  computed: {
    ...mapState(["currentUser"])

  }
};
</script>
