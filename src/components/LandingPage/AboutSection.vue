<template>
  <v-container pa-4 class="secondary darken-1" app>
    <p style="text-align: end" class="display-1 secondary--text text--lighten-1">What do we do?</p>

    <v-layout pa-1 row wrap justify-space-between align-center>
      <v-flex xs12 md6 pa-4>
        <div>
          <p class="headline">You know what we hate?</p>
          <p class="subheading">
            Cosntantly having to accept/deny the
            <span
              class="font-weight-bold primary--text text--lighten-1"
            >EXACT SAME</span> Github invitations
            <span
              class="font-weight-bold primary--text text--lighten-1"
            >EVERY. SINGLE. DAY.</span>
            We think that you should be able to save all of the time you spend every day accepting invites to get some awesome code written!
          </p>
        </div>
        <p class="subheading">
          Simply log in with your GitHub account and specify which users you'd like us to automatically accept or decline invitations from on your behalf. It's as simply as a couple of clicks!
        </p>
        <v-btn style="margin-left: 0;" flat class="secondary outlined">Sign Up</v-btn>
      </v-flex>

      <v-flex xs12 md6 class="imgwrapper">
        <img class="undrawimg" src="../../assets/undraw_reminder_pa79 (1).svg" alt>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: {}
};
</script>

<style scoped>
.undrawimg {
  width: 80%;
  max-width: 500px;
}
.imgwrapper {
  display: flex;
  justify-content: center;
}
</style>


