
<template>
  <v-app id="about" dark>
    <Team />
    <Contact />
  </v-app>
</template>


<script>
import Team from "../components/AboutPage/Team";
import Contact from "../components/AboutPage/Contact";

export default {
  components: {
    Team,
    Contact
  }
};
</script>
