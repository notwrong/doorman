<template>
  <v-dialog max-width="600px" v-model="dialog">
    <slot slot="activator"></slot>
    <v-card>
      <v-card-title class="title">
        <h2>
          Edit
          <span class="primary--text">{{selectedUser.login}}</span>
        </h2>
      </v-card-title>
      <v-card-text class="title">
        This Github user is currently
        <span
          v-if="!blocked"
        >whitelisted and any requests from them will be automatically accepted.</span>
        <span v-else>blacklisted and any requests from them will be automatically refused.</span>
        Change this rule?
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <div class="button-group mb-2">
          <v-btn
            v-if="!blocked"
            flat
            class="success flex-btn px-4"
            @click="addBlocked(selectedUser), dialog=false"
          >Yes, block this user</v-btn>
          <v-btn
            v-else
            flat
            class="success flex-btn px-4"
            @click="addAllowed(selectedUser), dialog=false"
          >Yes, whitelist this user</v-btn>
          <v-btn
            flat
            class="primary flex-btn px-4"
            width="100%"
            @click="deleteUser(selectedUser), dialog=false"
          >Delete all rules for user</v-btn>
          <v-btn flat class="error flex-btn px-4" @click="dialog=false">Cancel</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: { selectedUser: Object, blocked: Boolean },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions({
      addBlocked: "addBlocked",
      addAllowed: "addAllowed",
      deleteUser: "deleteUserRule"
    })
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style scoped>
.button-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
@media (max-width: 600px) {
  .button-group {
    flex-direction: column;
  }

  .button-group .flex-btn {
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    margin: 5px auto;
  }
}
</style>