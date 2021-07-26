<template>
  <div class="wrapper">
    <ul class="content">
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
      <li>222</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: sandybrown;
  overflow: hidden;
}
</style>