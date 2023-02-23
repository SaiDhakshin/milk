import { defineStore } from "pinia";

import { auth, userCollection } from "../includes/firebase";
import useCounterStore from "./counter";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async Register(values) {
      console.log(values);

      let userCred = null;

      userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      console.log(userCred);

      await userCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      await userCred.user.updateProfile({
        displayName: values.name,
      });

      this.userLoggedIn = true;
    },
    async authenticate(values) {
      console.log(values.email, values.password);
      let userCred = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );

      this.userLoggedIn = true;
    },
    async signOut() {
      await auth.signOut();
      this.userLoggedIn = false;
    },
  },
});
