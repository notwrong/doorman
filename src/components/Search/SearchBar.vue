<template>
  <v-toolbar dark color="secondary">
    <v-toolbar-title :style="{ margin: '0 15px 0 0' }">Add Users</v-toolbar-title>
    <v-autocomplete
      :style="{ width: '50%' }"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      color="blue-grey lighten-2"
      label="Username"
      item-text="login"
      item-value="login"
      solo-inverted
      flat
      hide-no-data
      hide-details
    >
      <template v-slot:selection="data">{{ data.item.name }}</template>
      <template v-slot:item="data">
        <template>
          <v-list-tile inactive>
            <v-list-tile-avatar>
              <img :src="data.item.avatar_url" />
            </v-list-tile-avatar>
            <v-list-tile-content
              :style="{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }"
            >
              {{data.item.login}}
              <font-awesome-icon
                @click="addAllowed(data.item)"
                :icon="['fas', 'user-check']"
                :class="currentUser.allow && currentUser.allow[data.item.id] ? 'buttonIcon allow active':'buttonIcon allow'"
              />
              <font-awesome-icon
                @click="addBlocked(data.item)"
                :icon="['fas', 'user-times']"
                :class="currentUser.block && currentUser.block[data.item.id] ? 'buttonIcon block active':'buttonIcon block'"
              />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </template>
    </v-autocomplete>
    <div class="divider" />
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

<style>
.buttonIcon {
  cursor: pointer;
  color: grey;
}
.allow {
  margin: 0 5px 0 20px;
}
.block {
  margin: 0 5px;
}
.allow.active {
  color: #3cd1c2;
}
.block.active {
  color: #f83e70;
}
.divider {
  width: 20%;
  height: 1px;
}
</style>