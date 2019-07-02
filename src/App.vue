<template>
  <v-app id="inspire" dark>
    <AppBar />
    <SearchBar v-if="this.$store.state.currentUser" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/common/AppBar";
import Footer from "./components/common/Footer";
import SearchBar from "./components/Search/SearchBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    SearchBar,
    Footer
  }
};
</script>
