<template>
  <v-toolbar dark color="teal">
    <v-toolbar-title>State selection</v-toolbar-title>
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
      label="What state are you from?"
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
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
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      const url = `https://api.github.com/search/users?q=${v}`;
      const token = this.$store.state.currentUser.creds.accessToken;

      axios({
        method: "GET",
        url,
        headers: {
          Authorization: `token ${token}`
        }
      })
        .then(users => {
          console.log("RESOLVED PROMISE", users.data.items);
          const names = users.data.items.map(data => data.login);
          this.items = [...names];
          // this.items = [...users.data.items];
        })
        .catch(error => console.log(error));

      this.loading = false;
    }
  }
};
</script>