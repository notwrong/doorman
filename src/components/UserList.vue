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
            <PopUp :selected-user="user">
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
      dummyUser: {
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
          login: "TomHessburg",
          id: 44884308,
          node_id: "MDQ6VXNlcjQ0ODg0MzA4",
          avatar_url: "https://avatars3.githubusercontent.com/u/44884308?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TomHessburg",
          html_url: "https://github.com/TomHessburg",
          followers_url: "https://api.github.com/users/TomHessburg/followers",
          following_url:
            "https://api.github.com/users/TomHessburg/following{/other_user}",
          gists_url: "https://api.github.com/users/TomHessburg/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TomHessburg/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TomHessburg/subscriptions",
          organizations_url: "https://api.github.com/users/TomHessburg/orgs",
          repos_url: "https://api.github.com/users/TomHessburg/repos",
          events_url:
            "https://api.github.com/users/TomHessburg/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TomHessburg/received_events",
          type: "User",
          site_admin: false,
          score: 83.04401
        },
        {
          login: "GannonDetroit",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          login: "ajb85",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        },
        {
          login: "ryanboris",
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
      return Boolean(this.currentUser.allow && this.currentUser.allow[user.id]);
    },
    isBlocked(user) {
      return Boolean(this.currentUser.block && this.currentUser.block[user.id]);
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  }
};
</script>

<style scoped>
.username {
  text-align: center;
}
</style>