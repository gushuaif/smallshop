<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-user-comment></detail-user-comment>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailUserComment from "./childComps/DetailUserComment.vue";
import Scroll from "components/common/scroll/Scroll";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  UserComment,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailUserComment,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      paramInfo: {},
      detailInfo: {},
      userComment: {},
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDetail(this.iid).then((res) => {
      // 获取轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;
      console.log(data);
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // 商品详细信息
      this.detailInfo = data.detailInfo;
      // 参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 用户评价
      this.userComment = new UserComment(
        data.rate.list[0].user,
        data.rate.list[0].style,
        data.rate.list[0].content,
        data.rate.list[0].created
      );
    });
  },
  methods: {
    imageLoad() {
      this.$ref.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>