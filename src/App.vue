<template >
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  components: { MainTabBar },
  name: "App",
};
</script>
<style>
@import "./assets/css/base.css";
</style>
