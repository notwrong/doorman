<template>
  <v-app>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import UserList from "./components/UserList";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    UserList,
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
