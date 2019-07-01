<template>
  <div class="users">
    <h1 class="primary--text text-xs-center mt-5">Github Users</h1>

    <v-container class="my-5">
      <v-card class="pa-3 my-3" v-for="(user, i) in dummyUsers" :key="i">
        <v-layout row justify-space-between>
          <v-flex xs6>
            <div class="pt-1">Username: {{user.login}}</div>
          </v-flex>
          <v-flex xs6 class="mr-2 text-xs-right">
            <v-icon large v-if="isAllowed(user)" right class="success--text">check</v-icon>
            <v-icon large v-if="isBlocked(user)" right class="error--text">block</v-icon>
            <PopUp @editPermission="val => read(val)" v-bind:selected-user="user">
              <v-btn class="primary">Edit</v-btn>
            </PopUp>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PopUp from "./PopUp.vue";

export default {
  components: { PopUp },
  created() {
    this.login();
  },
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
          login: "nickcannariato",
          id: 434063,
          node_id: "MDQ6VXNlcjQzNDA2Mw==",
          avatar_url: "https://avatars3.githubusercontent.com/u/434063?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nickcannariato",
          html_url: "https://github.com/nickcannariato",
          followers_url:
            "https://api.github.com/users/nickcannariato/followers",
          following_url:
            "https://api.github.com/users/nickcannariato/following{/other_user}",
          gists_url:
            "https://api.github.com/users/nickcannariato/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nickcannariato/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nickcannariato/subscriptions",
          organizations_url: "https://api.github.com/users/nickcannariato/orgs",
          repos_url: "https://api.github.com/users/nickcannariato/repos",
          events_url:
            "https://api.github.com/users/nickcannariato/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nickcannariato/received_events",
          type: "User",
          site_admin: false,
          score: 136.3673
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
    ...mapActions({
      login: "githubLogin"
    }),
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