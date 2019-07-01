<template>
  <div class="users">
    <h1 class="primary--text">Github Users</h1>

    <v-container class="my-5">
      <v-card class="pa-2">
        <v-layout row justify-space-between>
          <v-flex xs10 md6>
            <div class="pt-1">Username</div>
          </v-flex>
          <v-flex xs1 md1>
            <v-icon right class="error--text">block</v-icon>
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
      user: {
        username: "DaftBeowulf",
        creds: { token: "token" },
        allow: {},
        block: {},
        user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
      },
      users: [
        {
          username: "nickcannariato",
          creds: { token: "token" },
          allow: {},
          block: {},
          user_id: "FK_TO_FIREBASE_USER_AUTH_COLLECTION"
        }
      ]
    };
  }
};
</script>

<style scoped>
.username {
  text-align: center;
}
</style>