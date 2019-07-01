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
        <v-btn flat class="primary outlined">About</v-btn>
        <v-btn flat outline class="grey grey--text text--lighten-2">Sign Up</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: {}
};
</script>

<style scoped>
.jumbowraper {
  padding: 8px;
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
</style>


