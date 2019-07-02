<template>
  <v-app class="users-list" dark>
    <v-container v-if="blockedAndAllowed.length>0" class="my-5">
      <v-card class="pa-3 my-3 secondary" v-for="(user, i) in blockedAndAllowed" :key="i">
        <v-layout row justify-space-between>
          <v-flex xs3>
            <v-card
              :href="user.html_url"
              target="_blank"
              class="py-1 text-xs-left username primary--text"
              width="200"
            >
              <v-avatar class="mr-4 ml-2">
                <img :src="user.avatar_url" />
              </v-avatar>
              {{user.login}}
            </v-card>
          </v-flex>
          <v-flex xs6 class="mr-2 text-xs-right">
            <v-icon
              large
              v-if="Boolean(currentUser.allow[`${user.id}`])"
              right
              class="success--text"
            >check</v-icon>
            <v-icon large v-else right class="error--text">block</v-icon>
            <PopUp :selected-user="user" :blocked="Boolean(currentUser.block[`${user.id}`])">
              <v-btn class="primary secondary--text">Edit</v-btn>
            </PopUp>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container v-else>
      <h3>Sorry, looks like you haven't blocked or whitelisted anybody yet!</h3>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import PopUp from "./PopUp.vue";
import { db } from "../utils/firebaseConfig";

export default {
  components: { PopUp },
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["blockedAndAllowed"])
  }
};
</script>

<style scoped>
.username {
  font-size: 16px;
  font-weight: 600;
}
.success--text,
.error--text {
  height: 15px;
}
</style>