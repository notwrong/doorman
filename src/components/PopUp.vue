<template>
  <v-dialog max-width="600px" v-model="dialog">
    <slot slot="activator"></slot>
    <v-card>
      <v-card-title>
        <h2>Current User: {{currentUser.login}}</h2>
        <br />
        <h2>Edit {{selectedUser.login}}</h2>
      </v-card-title>
      <v-card-text>This user is currently either blocked/allowed/neither. Edit permissions?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          flat
          class="success"
          @click="addBlocked(selectedUser), dialog=false"
        >Yes, block this user</v-btn>
        <v-btn
          flat
          class="success"
          @click="addAllowed(selectedUser), dialog=false"
        >Yes, whitelist this user</v-btn>
        <v-btn flat class="error" @click="dialog=false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["selectedUser"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions({ addBlocked: "addBlocked", addAllowed: "addAllowed" })
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style scoped>
</style>