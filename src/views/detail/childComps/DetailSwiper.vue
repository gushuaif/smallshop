<template>
  <swiper>
    <swiper-slide v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped >
.swiper-slide {
  height: 300px;
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
}
</style>
