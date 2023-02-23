<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { auth } from "./includes/firebase";
import useUserStore from "./stores/user";
import Home from "./components/Home.vue";
export default {
  components: {
    Home,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
      console.log("Logged in:" + this.userLoggedIn + auth.currentUser.email);
    }
  },
};
</script>

<style></style>
