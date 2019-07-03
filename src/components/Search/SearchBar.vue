<template>
  <v-toolbar dark color="secondary">
    <v-toolbar-title>Add Users</v-toolbar-title>
    <v-autocomplete
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      box
      chips
      color="blue-grey lighten-2"
      label="Username"
      item-text="login"
      item-value="login"
    >
      <template v-slot:selection="data">{{ data.item.name }}</template>
      <template v-slot:item="data">
        <template>
          <v-list-tile inactive>
            <v-list-tile-avatar>
              <img :src="data.item.avatar_url" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              {{data.item.login}}
              <font-awesome-icon
                @click="addAllowed(data.item)"
                :icon="['fas', 'user-check']"
                :style="currentUser.allow && currentUser.allow[data.item.id] ? { color: 'white', margin: '0 5px 0 10px' } : { color: 'grey', margin: '0 5px 0 10px' }"
              />
              <font-awesome-icon
                @click="addBlocked(data.item)"
                :icon="['fas', 'user-times']"
                :style="currentUser.block && currentUser.block[data.item.id] ? { color: 'white', margin: '0 5px' } : { color: 'grey', margin: '0 5px' }"
              />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </template>
    </v-autocomplete>
  </v-toolbar>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
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
          // console.log("RESOLVED PROMISE", users.data.items);
          // const names = users.data.items.map(data => data.login);
          // this.items = [...names];
          this.items = [...users.data.items];
        })
        .catch(error => console.log(error));

      this.loading = false;
    },
    ...mapActions(["addBlocked", "addAllowed"])
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>