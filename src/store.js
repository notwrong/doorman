import Vue from 'vue';
import Vuex from 'vuex';
import { db, auth } from './utils/firebaseConfig';
import firebase from 'firebase';
import axios from 'axios';

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
    githubLogin({ commit, state }) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo:invite');
      provider.setCustomParameters({
        allow_signup: 'false'
      });

      auth.signInWithPopup(provider).then(creds => {
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
          db.collection('users')
            .doc(`${newUser.id}`)
            .set(newUser)
            .then(() => {
              return commit('setCurrentUser', newUser);
            })
            .then(() => {
              firebase
                .auth()
                .currentUser.getIdToken(true)
                .then(idToken => {
                  return axios.get(
                    'http://localhost:5001/not-wrong-doorman/us-central1/invites',
                    {
                      headers: {
                        Authorization: idToken
                      }
                    }
                  );
                })
                .catch(err => {
                  console.error({ code: err.code, message: err.message });
                });
            });
        } else {
          db.collection('users')
            .doc(`${creds.additionalUserInfo.profile.id}`)
            .get()
            .then(user => {
              return commit('setCurrentUser', user.data());
            })
            .then(() => {
              axios
                .post('http://localhost:5001/not-wrong-doorman/us-central1/invites', {
                  currentUser: state.currentUser
                })
                .then(response => console.log(response.data))
                .catch(err => console.error({ code: err.code, message: err.message }));
            })
            .catch(err => console.error({ code: err.code, message: err.message }));
        }
      });
    },
    addBlocked({ commit, state }, user) {
      let updatedUser = state.currentUser;

      // first conditional prevents error from devs if they'd signed in before the block/allow objects were added to the default state object
      // will be removed for production
      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id];
      updatedUser.block[user.id] = user;

      db.collection('users')
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit('updateBlocked', updatedUser);
        })
        .catch(err => console.error({ message: err.message, code: err.code }));
    },
    addAllowed({ commit, state }, user) {
      let updatedUser = state.currentUser;

      if (updatedUser.block && updatedUser.block[user.id])
        delete updatedUser.block[user.id];
      updatedUser.allow[user.id] = user;

      db.collection('users')
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit('updateAllowed', updatedUser);
        })
        .catch(err => console.error({ message: err.message, code: err.code }));
    }
  }
});
