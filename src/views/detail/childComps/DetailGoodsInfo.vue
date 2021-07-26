<template>
  <div>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{ detailInfo.desc }}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
      <div class="info-list">
        <img
          v-for="(item, index) in detailInfo.detailImage[0].list"
          :key="index"
          :src="item"
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      // 判断所有图片加载完成进行一次回调就可以
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    datailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-list img {
  width: 100%;
}
</style>