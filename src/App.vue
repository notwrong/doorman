<template>
  <v-app>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
