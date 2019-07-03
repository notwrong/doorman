<template>
  <v-app class="users-list" dark>
    <v-container class="my-5">
      <v-btn-toggle v-if="currentUser && returnFilter.length>0" v-model="filter">
        <v-btn flat value="all" class="primary secondary--text">All</v-btn>
        <v-btn flat value="allow" class="primary secondary--text">Accepted</v-btn>
        <v-btn flat value="block" class="primary secondary--text">Declined</v-btn>
      </v-btn-toggle>
      <v-card class="pa-3 my-3 secondary userlist" v-for="(user, i) in returnFilter" :key="i">
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
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import PopUp from "./PopUp.vue";

export default {
  components: { PopUp },
  data() {
    return {
      filter: "all"
    };
  },
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["blockedAndAllowedList", "blockedList", "allowedList"]),
    returnFilter() {
      switch (this.filter) {
        case "all":
          return this.blockedAndAllowedList;
        case "block":
          return this.blockedList;
        case "allow":
          return this.allowedList;
        default:
          return [];
      }
    }
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