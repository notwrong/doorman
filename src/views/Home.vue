<template>
  <v-app id="inspire" dark>
    <AppBar />
    <JumboTron
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-delay="180"
      data-aos-duration="1500"
    />
    <AboutSection
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-delay="180"
      data-aos-duration="1200"
    />
    <PaymentOptions
      data-aos="slide-right"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      data-aos-duration="1500"
    />
    <FinalCallToAction
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="180"
      data-aos-duration="1200"
    />
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