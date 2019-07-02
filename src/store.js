import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import { db, auth } from "./utils/firebaseConfig";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    updateCurrentUser(state, { updatedUser, scope }) {
      if (scope.includes("block"))
        state.currentUser = {
          ...state.currentUser,
          block: { ...updatedUser.block }
        };

      if (scope.includes("allow"))
        state.currentUser = {
          ...state.currentUser,
          allow: { ...updatedUser.allow }
        };
    }
  },
  actions: {
    async githubLogin({ commit }) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("repo:invite");
      provider.setCustomParameters({
        allow_signup: "false"
      });

      const creds = await auth.signInWithPopup(provider);

      try {
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

          await db
            .collection("users")
            .doc(`${newUser.id}`)
            .set(newUser);

          commit("setCurrentUser", newUser);
          router.push("/dashboard");
        } else {
          const userRef = db
            .collection("users")
            .doc(`${creds.additionalUserInfo.profile.id}`);

          await userRef.update({
            creds: {
              ...creds.credential,
              refreshToken: creds.user.refreshToken
            }
          });

          const authedUser = await db
            .collection("users")
            .doc(`${userRef.id}`)
            .get();

          commit("setCurrentUser", authedUser.data());
          router.push("/dashboard");
        }
      } catch (err) {
        console.error(err);
      }
    },
    async addBlocked({ commit, state }, user) {
      let updatedUser = state.currentUser;

      // first conditional prevents error from devs if they'd signed in before the block/allow objects were added to the default state object
      // will be removed for production
      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id];
      updatedUser.block[user.id] = user;

      try {
        await db
          .collection("users")
          .doc(`${state.currentUser.id}`)
          .update(updatedUser);

        commit("updateCurrentUser", { updatedUser, scope: ["block"] });
      } catch (err) {
        console.error(err);
      }
    },
    async addAllowed({ commit, state }, user) {
      let updatedUser = state.currentUser;

      if (updatedUser.block && updatedUser.block[user.id])
        delete updatedUser.block[user.id];
      updatedUser.allow[user.id] = user;
      try {
        await db
          .collection("users")
          .doc(`${state.currentUser.id}`)
          .update(updatedUser);

        commit("updateCurrentUser", { updatedUser, scope: ["allow"] });
      } catch (err) {
        console.error(err);
      }
    },
    async deleteUserRule({ commit, state }, user) {
      let updatedUser = state.currentUser;

      if (updatedUser.block && updatedUser.block[user.id])
        delete updatedUser.block[user.id];
      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id];

      try {
        await db
          .collection("users")
          .doc(`${state.currentUser.id}`)
          .update(updatedUser);

        commit("updateCurrentUser", { updatedUser, scope: ["block", "allow"] });
      } catch (err) {
        console.error(err);
      }
    }
  },
  getters: {
    blockedAndAllowed: ({ currentUser: u }) => {
      return (
        u &&
        Object.values(u.allow)
          .concat(Object.values(u.block))
          .sort((a, b) => a.id - b.id)
      );
    },
    firstName(state) {
      if (state.currentUser) {
        return state.currentUser.name.split(" ")[0];
      }
    }
  }
});
