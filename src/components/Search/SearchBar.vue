<template>
  <v-toolbar dark color="teal">
    <v-toolbar-title>Select User</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="GitHub username"
      solo-inverted
    ></v-autocomplete>
    <!-- <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>-->
  </v-toolbar>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.getUserNames(val);
    }
  },
  methods: {
    async getUserNames(v) {
      try {
        const url = `https://api.github.com/search/users?q=${v}`;
        const token = this.$store.state.currentUser.creds.accessToken;

        const users = await axios({
          method: "GET",
          url,
          headers: {
            Authorization: `token ${token}`
          }
        });

        this.items.push(...users.data.items);
      } catch (error) {
        console.log("AXIOS ERROR:", error);
      }
    }
  }
};
</script>

<style>
</style>
