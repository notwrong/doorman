<template>
  <v-container pa-4 class="secondary darken-1" app>
    <p class="display-1 secondary--text text--lighten-1">What do we do?</p>

    <v-layout pa-1 row wrap justify-space-between align-center>
      <v-flex xs12 md6 pa-4>
        <p
          class="subheading"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro reiciendis atque laboriosam ipsa. Id expedita eveniet nulla fugit, saepe asperiores quaerat vel eos quisquam eaque dolores veniam sequi nisi deserunt?</p>
        <p
          class="subheading"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro reiciendis atque laboriosam ipsa. Id expedita eveniet nulla fugit, saepe asperiores quaerat vel eos quisquam eaque dolores veniam sequi nisi deserunt?</p>
      </v-flex>

      <v-flex xs12 md6 class="imgwrapper">
        <img class="undrawimg" src="../../assets/undraw_reminder_pa79.svg" alt>
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


