<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" class="shop-logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  margin-left: 10px;
  margin-right: 10px;
}
.shop-top {
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.shop-logo {
  width: 50px;
  border-radius: 25px;
}
.title {
  padding-left: 15px;
}
.shop-middle {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop-middle-left {
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #eee;
  padding-right: 10px;
}

.info-sells,
.info-goods {
  margin: 10px;
  text-align: center;
}
.sells-text,
.goods-text {
  padding-top: 10px;
}

table td {
  padding: 5px;
}
.score {
  color: #5ea732;
}
.better {
  color: #fff;
  background-color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better-more {
  color: #fff;
  background-color: #f13e3a;
}
.shop-bottom {
  width: 100%;
}
.enter-shop {
  margin: 30px auto;
  width: 150px;
  text-align: center;
  padding: 5px 20px;
  background-color: #eee;
  border-radius: 10px;
}
</style>