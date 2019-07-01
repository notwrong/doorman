<template>
  <div class="users">
    <h1 class="primary--text text-xs-center mt-5">Github Users</h1>

    <v-container class="my-5">
      <v-card class="pa-3 my-3" v-for="(user, i) in dummyUsers" :key="i">
        <v-layout row justify-space-between>
          <v-flex xs6>
            <div class="pt-1">Username: {{user.username}}</div>
          </v-flex>
          <v-flex xs6 class="mr-2 text-xs-right">
            <v-icon large v-if="isAllowed(user)" right class="success--text">check</v-icon>
            <v-icon large v-if="isBlocked(user)" right class="error--text">block</v-icon>
            <PopUp @editPermission="val => read(val)">
              <v-btn class="primary">Edit</v-btn>
            </PopUp>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import PopUp from "./PopUp.vue";

export default {
  components: { PopUp },
  data() {
    return {
      currentUser: {
        username: "DaftBeowulf",
        creds: { token: "token" },
        allow: {
          12345: {
            username: "nickcannariato"
          },
          27734: {
            username: "GannonDetroit"
          }
        },
        block: {
          28768: {
            username: "TomHessburg"
          }
        },
        user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
      },
      dummyUsers: [
        {
          username: "nickcannariato",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          username: "TomHessburg",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          username: "GannonDetroit",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          username: "ajb85",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          username: "ryanboris",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        }
      ]
    };
  },
  methods: {
    isAllowed(user) {
      const allowed = Object.values(this.currentUser.allow);
      return Boolean(allowed.find(u => u.username === user.username));
    },
    isBlocked(user) {
      const blocked = Object.values(this.currentUser.block);
      return Boolean(blocked.find(u => u.username === user.username));
    },
    read(val) {
      console.log(val);
    }
  },
  computed: {}
};
</script>

<style scoped>
.username {
  text-align: center;
}
</style>