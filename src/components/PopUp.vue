<template>
  <v-dialog max-width="600px" v-model="dialog">
    <slot slot="activator"></slot>
    <v-card>
      <v-card-title>
        <h2>Edit user</h2>
      </v-card-title>
      <v-card-text>This user is currently either blocked/allowed/neither. Edit permissions?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat class="success" @click="emitPermission('block')">Yes, block this user</v-btn>
        <v-btn flat class="success" @click="emitPermission('allow')">Yes, whitelist this user</v-btn>
        <v-btn flat class="error" @click="dialog=false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    emitPermission(val) {
      this.$emit("editPermission", val);
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
</style>