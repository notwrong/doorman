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

export default {
  name: "App",
  components: {
    AppBar,
    Footer
  }
};
</script>
