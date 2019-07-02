<template>
<<<<<<< HEAD
  <v-app id="inspire" dark>
    <AppBar />
    <SearchBar v-if="this.$store.state.currentUser" />
=======
  <div>
>>>>>>> master
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
  </div>
</template>

<script>
import JumboTron from "../components/LandingPage/JumboTron";
import AboutSection from "../components/LandingPage/AboutSection";
import PaymentOptions from "../components/LandingPage/PaymentOptions";
import FinalCallToAction from "../components/LandingPage/FinalCallToAction";
import SearchBar from "../components/Search/SearchBar.vue";

export default {
  data: () => ({}),
  props: {},
  components: {
    JumboTron,
    SearchBar,
    AboutSection,
    PaymentOptions,
    FinalCallToAction
  }
};
</script>