<template>
  <div>
    <!-- Header -->
    <Header></Header>
    <!-- Header End-->
    <!-- navbar -->
    <!-- <div class="flex justify-between ...">
      <div><img class="icon" src="./assets/logo-icon.svg" alt="" /></div>
      <div>
        <ul class="flex p-4">
          <li class="mx-1.5">Home</li>
          <li class="mx-1.5">About</li>
          <li class="mx-1.5">FAQ</li>
        </ul>
      </div>
      <div>
        <ul class="flex p-4">
          <li class="mx-1.5">Login</li>
        </ul>
      </div>
    </div> -->
    <!-- navbar end -->
    <!-- showcase -->
    <div class="banner container">
      <img class="banner-item" src="../assets/banner2.jpg" alt="" />
    </div>
    <!-- showcase end -->
    <!-- Stats -->
    <Stats></Stats>
    <!-- Stats end -->
    <!-- Trusted -->
    <Trusted></Trusted>
    <Modal></Modal>
  </div>
</template>

<script>
import Stats from "./Stats.vue";
import Trusted from "./Trusted.vue";
import Header from "./Header.vue";
import Modal from "./Modal.vue";

export default {
  name: "Home",
  components: {
    Stats,
    Trusted,
    Header,
    Modal,
  },
};
</script>

<style></style>
