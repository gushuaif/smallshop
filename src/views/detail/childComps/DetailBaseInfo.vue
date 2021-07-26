<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-left: 10px;
  margin-right: 10px;
}
.info-title {
  margin-top: 20px;
  color: #000;
  font-size: 19px;
}
.info-price {
  height: 50px;
  line-height: 50px;
}
.info-price span {
  padding-right: 5px;
}
.n-price {
  font-size: 26px;
  color: #f09095;
}
.o-price {
  text-decoration: line-through;
}
.info-price .discount {
  position: relative;
  top: -7px;
  padding: 1px;
  border-radius: 9px;
  background-color: #fe6773;
  font-size: 18px;
  color: #fff;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  height: 45px;
  line-height: 30px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.info-services {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.info-services img {
  width: 13px;
}
</style>