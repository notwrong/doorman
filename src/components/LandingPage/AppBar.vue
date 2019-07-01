<template>
  <v-toolbar app flat fixed clipped-left>
    <v-toolbar-title ripple class="primary--text">Doorman</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="primary">
      <span v-if="!this.$store.state.currentUser" @click="login">Login</span>
      <span v-else @click="logUser">Welcome, {{ getFirstName() }}</span>
      <v-icon right>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("githubLogin");
    },
    logUser() {
      console.log(this.$store.state.currentUser);
    },
    getFirstName() {
      return this.$store.state.currentUser.name.split(" ")[0];
    }
  }
};
</script>

