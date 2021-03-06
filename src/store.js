import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db, auth } from './utils/firebaseConfig'
import router from './router'
import axios from 'axios'
import cron from 'node-cron'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    ...vuexfireMutations
  },
  actions: {
    bindCurrentUser: firestoreAction(({ state, bindFirestoreRef }) => {
      return bindFirestoreRef(
        'currentUser',
        db.collection('users').doc(state.currentUser.id)
      )
    }),
    async githubLogin({ commit }) {
      const provider = new firebase.auth.GithubAuthProvider()
      provider.addScope('repo:invite')
      provider.setCustomParameters({
        allow_signup: 'false'
      })

      const creds = await auth.signInWithPopup(provider)

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
          }

          await db
            .collection('users')
            .doc(`${newUser.id}`)
            .set(newUser)
          commit('setCurrentUser', newUser)

          await axios.post(
            'https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/invites',
            {
              user: newUser
            }
          )

          cron.schedule('*/15 * * * *', async () => {
            await axios.post(
              'https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/invites',
              {
                user: newUser
              }
            )
          })
          const idToken = await auth.currentUser.getIdToken(true)
          localStorage.setItem('idToken', idToken)
          router.push('/dashboard')
        } else {
          const userRef = db
            .collection('users')
            .doc(`${creds.additionalUserInfo.profile.id}`)

          await userRef.update({
            creds: {
              ...creds.credential,
              refreshToken: creds.user.refreshToken
            }
          })

          const authedUser = await db
            .collection('users')
            .doc(`${userRef.id}`)
            .get()

          commit('setCurrentUser', authedUser.data())

          await axios.post(
            'https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/invites',
            {
              user: authedUser.data()
            }
          )

          cron.schedule('*/15 * * * *', async () => {
            await axios.post(
              'https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/invites',
              {
                user: authedUser.data()
              }
            )
          })

          const idToken = await auth.currentUser.getIdToken(true)
          localStorage.setItem('idToken', idToken)
          router.push('/dashboard')
        }
      } catch (err) {
        console.error(err)
      }
    },
    addBlocked({ commit, state }, user) {
      let updatedUser = { ...state.currentUser }
      if (!updatedUser.block) updatedUser.block = {}

      // first conditional prevents error from devs if they'd signed in before the block/allow objects were added to the default state object
      // will be removed for production
      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id]
      updatedUser.block[user.id] = user

      db.collection('users')
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit('setCurrentUser', updatedUser)
        })
        .catch(err => console.error({ message: err.message, code: err.code }))
    },
    addAllowed({ commit, state }, user) {
      let updatedUser = { ...state.currentUser }

      if (updatedUser.block && updatedUser.block[user.id])
        delete updatedUser.block[user.id]
      updatedUser.allow[user.id] = user

      db.collection('users')
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit('setCurrentUser', updatedUser)
        })
        .catch(err => console.error({ message: err.message, code: err.code }))
    },
    deleteUserRule({ commit, state }, user) {
      let updatedUser = { ...state.currentUser }

      if (updatedUser.block && updatedUser.block[user.id])
        delete updatedUser.block[user.id]
      if (updatedUser.allow && updatedUser.allow[user.id])
        delete updatedUser.allow[user.id]

      db.collection('users')
        .doc(`${state.currentUser.id}`)
        .update(updatedUser)
        .then(() => {
          commit('setCurrentUser', updatedUser)
        })
        .catch(err => console.error({ message: err.message, code: err.code }))
    }
  },
  getters: {
    blockedAndAllowedList: ({ currentUser: u }) => {
      return (
        u &&
        Object.values(u.allow)
          .concat(Object.values(u.block))
          .sort((a, b) => a.id - b.id)
      )
    },
    blockedList: ({ currentUser: u }) => {
      return u && Object.values(u.block).sort((a, b) => a.id - b.id)
    },
    allowedList: ({ currentUser: u }) => {
      return u && Object.values(u.allow).sort((a, b) => a.id - b.id)
    },

    isAllowed: ({ currentUser: u }) => user => {
      return u.allow.hasOwnProperty(user.id)
    },
    isBlocked: ({ currentUser: u }) => user => {
      return u.block.hasOwnProperty(user.id)
    },
    firstName(state) {
      if (state.currentUser) {
        return state.currentUser.name.split(' ')[0]
      }
    }
  }
})
