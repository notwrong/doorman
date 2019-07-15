import { mapState, mapMutations } from "vuex";
import axios from "axios";
import router from "../router";
import { db } from "./firebaseConfig";

export default {
  created() {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) {
      // user needs to log into app to get new token
      router.push("/");
    } else {
      if (this.currentUser === null) {
        // gets user id from cloud function and sets the user data on currentUser in store
        axios
          .get(
            "https://us-central1-not-wrong-doorman.cloudfunctions.net/server/api/auth",
            {
              headers: {
                authorization: idToken
              }
            }
          )
          .then(async res => {
            if (res.status === 200) {
              const [userId] = res.data.firebase.identities["github.com"];

              const user = await db
                .collection("users")
                .doc(`${userId}`)
                .get();

              this.setCurrentUser(user.data());
            } else {
              router.push("/");
            }
          })
          .catch(err => {
            console.error(err);
            router.push("/");
          });
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    ...mapMutations(["setCurrentUser"])
  }
};
