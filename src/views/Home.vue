<template>
  <div>
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
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-delay="90"
      data-aos-duration="750"
    />
    <FinalCallToAction
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-delay="90"
      data-aos-duration="600"
    />
  </div>
</template>

<script>
import JumboTron from "../components/LandingPage/JumboTron";
import AboutSection from "../components/LandingPage/AboutSection";
import PaymentOptions from "../components/LandingPage/PaymentOptions";
import FinalCallToAction from "../components/LandingPage/FinalCallToAction";

export default {
  data: () => ({}),
  props: {},
  components: {
    JumboTron,
    AboutSection,
    PaymentOptions,
    FinalCallToAction
  }
};
</script>