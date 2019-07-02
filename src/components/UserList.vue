<template>
  <div class="users">
    <h1 class="primary--text text-xs-center mt-5">Github Users</h1>

    <v-container v-if="blockedAndAllowed.length>0" class="my-5">
      <v-card class="pa-3 my-3" v-for="(user, i) in blockedAndAllowed" :key="i">
        <v-layout row justify-space-between>
          <v-flex xs6>
            <div class="pt-1">Username: {{user.login}}</div>
          </v-flex>
          <v-flex xs6 class="mr-2 text-xs-right">
            <v-icon large v-if="isAllowed(user)" right class="success--text">check</v-icon>
            <v-icon large v-if="isBlocked(user)" right class="error--text">block</v-icon>
            <PopUp :selected-user="user">
              <v-btn class="primary">Edit</v-btn>
            </PopUp>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container v-if="!blockedAndAllowed.length">
      <h3>Sorry, looks like you haven't blocked or whitelisted anybody yet!</h3>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import PopUp from "./PopUp.vue";

export default {
  components: { PopUp },
  created() {
    this.login();
  },
  methods: {
    ...mapActions({
      login: "githubLogin"
    })
  },
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["blockedAndAllowed", "isAllowed", "isBlocked"])
  }
};
</script>

<style scoped>
.username {
  text-align: center;
}
</style>