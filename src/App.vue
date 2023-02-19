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
      <img class="banner-item" src="./assets/banner2.jpg" alt="" />
    </div>
    <!-- showcase end -->
    <!-- Stats -->
    <Stats></Stats>
    <!-- Stats end -->
    <!-- Trusted -->
    <Trusted></Trusted>
  </div>
</template>

<script>
import Stats from "./components/Stats.vue";
import Trusted from "./components/Trusted.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Stats,
    Trusted,
    Header,
  },
};
</script>

<style></style>
