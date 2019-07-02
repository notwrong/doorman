<template>
  <v-app id="inspire" dark>
    <AppBar />
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

export default {
  data: () => ({}),
  props: {},
  components: {
    AppBar,
    Footer,
    JumboTron,
    AboutSection,
    PaymentOptions,
    FinalCallToAction
  }
};
</script>