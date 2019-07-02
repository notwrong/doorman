<template>
  <v-toolbar app flat fixed clipped-left>
    <v-toolbar-title ripple class="primary--text">
      <v-btn flat to="/">
        <!-- <span class="primary--text title">Doorman</span>
        <v-icon right large class="primary--text">code</v-icon>-->
        <!-- <img style="width: 130px;" src="../../assets/doorman-logo-alternate.svg" alt> -->
        <DoormanLogo/>
        <!-- i know theres a way to do the fill for these in CSS but it was giving me crap so I didnt waste time haha -->
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="grey" :to="{name:'about'}">About Us</v-btn>
    <v-btn flat v-if="!currentUser" @click="githubLogin" color="grey">
      <span>Login</span>
      <v-icon right>account_circle</v-icon>
    </v-btn>
    <v-btn flat v-else @click="logUser" color="primary">
      <span>Welcome, {{ firstName }}</span>
      <img class="avatar" :src="currentUser.avatar_url" alt="User avatar">
      <img>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import DoormanLogo from "./DoormanLogo.vue";
export default {
  components: {
    DoormanLogo
  },
  methods: {
    ...mapActions(["githubLogin"]),
    logUser() {
      console.log(this.currentUser);
    }
  },
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["firstName"])
  }
};
</script>

<style>
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 24px;
}
</style>