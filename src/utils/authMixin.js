import { mapState, mapMutations } from "vuex";
import axios from "axios";
import router from "../router";
import { db } from "./firebaseConfig";

export default {
  created() {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) router.push("/");

    console.log("in mixin", this.currentUser);
    if (this.currentUser === null) {
      console.log("no user");
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
            const userId = res.data.firebase.identities["github.com"][0];
            console.log("working in .then", userId);

            const user = await db
              .collection("users")
              .doc(`${userId}`)
              .get();

            console.log("user from collection: ", user.data());
            console.log(this.$store);
            this.setCurrentUser(user.data());
          } else {
            router.push("/");
          }
        })
        .catch(err => {
          console.log("error", err);
          //   router.push("/");
        });
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    ...mapMutations(["setCurrentUser"])
  }
};
