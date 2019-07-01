<template>
  <div class="users">
    <h1 class="primary--text">Github Users</h1>

    <v-container class="my-5">
      <v-card class="pa-2 my-3" v-for="(user, i) in users" :key="i">
        <v-layout row justify-space-between>
          <v-flex xs10 md6>
            <v-icon left>Github</v-icon>
            <div class="pt-1">Username: {{user.username}}</div>
          </v-flex>
          <v-flex xs1 md1>
            <v-icon v-if="isAllowed(user)" right class="success--text">check</v-icon>
            <v-icon v-if="isBlocked(user)" right class="error--text">block</v-icon>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authUser: {
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
      users: [
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
      const list = Object.values(this.authUser.allow);
      return Boolean(list.find(u => u.username === user.username));
    },
    isBlocked(user) {
      const list = Object.values(this.authUser.block);
      return Boolean(list.find(u => u.username === user.username));
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