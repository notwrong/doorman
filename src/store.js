import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "./utils/firebaseConfig";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    updateBlocked(state, user) {
      state.currentUser = user;
    },
    updateAllowed(state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    githubLogin({ commit }) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("repo:invite");
      provider.setCustomParameters({
        allow_signup: "false"
      });

      auth
        .signInWithPopup(provider)
        .then(creds => {
          if (creds.additionalUserInfo.isNewUser) {
            const newUser = {
              ...creds.additionalUserInfo.profile,
              creds: {
                ...creds.credential,
                refreshToken: creds.user.refreshToken
              },
              id: `${creds.additionalUserInfo.profile.id}`,
              user_id: creds.user.uid,
              block: {},
              allow: {}
            };
            db.collection("users")
              .doc(`${newUser.id}`)
              .set(newUser)
              .then(() => {
                commit("setCurrentUser", newUser);
              });
          } else {
            db.collection("users")
              .doc(`${creds.additionalUserInfo.profile.id}`)
              .get()
              .then(user => {
                commit("setCurrentUser", user.data());
              });
          }
        })
        .catch(err => console.error({ message: err.message, code: err.code }));
    },
    addBlocked({ commit, state }, user) {
      let updatedUser = state.currentUser;
      console.log("user", user, "updatedUser", updatedUser);

      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id];
      updatedUser.block[user.id] = user;
      db.collection("users")
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit("updateBlocked", updatedUser);
        })
        .catch(err => console.error({ message: err.message, code: err.code }));
    },
    addAllowed({ commit, state }, user) {
      let updatedUser = state.currentUser;

      updatedUser.block[user.id] && delete updatedUser.block[user.id];
      delete updatedUser.block["user"];
      updatedUser.allow[user.id] = user;
      db.collection("users")
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit("updateAllowed", updatedUser);
        })
        .catch(err => console.error({ message: err.message, code: err.code }));
    }
  }
});
