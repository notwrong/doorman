<template>
  <v-container app>
    <div class="jumbowraper">
      <div class="jumbowrapertop">
        <h1 class="display-4 pa-4 primary--text font-weight-thin grey--text text--darken-1">Doorman</h1>

        <h3
          class="headline pa-4 secondary--text font-weight-thin grey--text text--lighten-3"
        >A personal assistant to manage your github invites</h3>
      </div>
      <div class="jumbowrapperbottom">
        <v-btn large flat class="primary outlined">About</v-btn>
        <v-btn large flat outline class="grey grey--text text--lighten-2">Sign Up</v-btn>
      </div>
      <!-- <img class="github-fork" src="../../assets/githubfork.png" alt="github for"> -->
    </div>
  </v-container>
</template>

<script>
// import octicons from "@primer/octicons";
// console.log(octicons["git-pull-request"].path);

export default {
  data: () => ({}),
  props: {}
};
</script>

<style scoped>
.jumbowraper {
  padding: 8px;
  padding-top: 40px;
  padding-bottom: 80px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.jumbowrapertop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.github-fork {
  width: 150px;
  opacity: 0.1;
}
</style>


