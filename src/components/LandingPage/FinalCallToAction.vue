<template>
  <v-container app class="secondary darken-2 mb-4">
    <p class="headline">All of that sound good?</p>
    <p style="width: 80%; text-align: left;">
      We would love to have you! :)
      <br />Click sign up and we'll get you all set up!
    </p>
    <v-btn @click="githubLogin" flat class="primary">sign up</v-btn>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["githubLogin"])
  }
};
</script>

<style scoped>
</style>


