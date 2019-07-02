<template>
  <v-app id="inspire" dark>
    <AppBar />
    <SearchBar v-if="this.$store.state.currentUser" />
    <JumboTron />
    <AboutSection />
    <PaymentOptions />
    <FinalCallToAction />
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "../components/LandingPage/AppBar";
import Footer from "../components/LandingPage/Footer";
import JumboTron from "../components/LandingPage/JumboTron";
import AboutSection from "../components/LandingPage/AboutSection";
import PaymentOptions from "../components/LandingPage/PaymentOptions";
import FinalCallToAction from "../components/LandingPage/FinalCallToAction";
import SearchBar from "../components/Search/SearchBar.vue";

export default {
  data: () => ({}),
  props: {},
  components: {
    AppBar,
    SearchBar,
    Footer,
    JumboTron,
    AboutSection,
    PaymentOptions,
    FinalCallToAction
  }
};
</script>