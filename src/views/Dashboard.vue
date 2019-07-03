<template>
  <div>
    <v-container>
      <v-card class="pa-3">
        <v-card>
          <div class="primary--text text-xs-center ma-2 display-2 font-weight-bold">Dashboard</div>
          <v-card-text class="subheading font-weight-medium text-xs-center">
            Here you'll find all the users you've selected to automatically
            <span
              class="success--text font-weight-bold"
            >accept</span> and
            <span class="error--text font-weight-bold">decline</span> Github invitations from. Click the
            <span class="primary--text font-weight-bold">EDIT</span> button to change this permission or remove them from your list entirely.
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
    <UserList />
  </div>
</template>

<script>
import UserList from "../components/DashBoard/UserList";
export default {
  components: {
    UserList
  }
};
</script>

<style lang="scss" scoped>
</style>