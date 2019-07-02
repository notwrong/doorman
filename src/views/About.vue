
<template>
  <v-app id="about" dark>
    <AppBar />
    <Team />
    <Contact />
    <Footer />
  </v-app>
</template>


<script>
import AppBar from "../components/LandingPage/AppBar";
import Team from "../components/AboutPage/Team";
import Contact from "../components/AboutPage/Contact";
import Footer from "../components/LandingPage/Footer";

export default {
  data() {},

  components: {
    AppBar,
    Team,
    Contact,
    Footer
  }
};
</script>
