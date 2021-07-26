<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </nav-bar>
    <tab-control
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
      ref="TabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <swiper>
        <swiper-slide v-for="item in banners" :key="item.title">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad" />
          </a>
        </swiper-slide>
      </swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
        ref="TabControl2"
        class="tab-control"
      />

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "common/utils";
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  components: {
    RecommendView,
    FeatureView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    Swiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: true,
      isLoad: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    //

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200);
    },
    contentScroll(postion) {
      // 判断回到顶部图标是否显示
      this.isShowBackTop = -postion.y > 1000;
      // 是否吸顶效果
      this.isTabFixed = -postion.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    imageLoad() {
      if (!this.isLoad) {
        // 获取tabcontrol的offsettop
        // 所有组件都有属性$el 获取组件中的元素
        this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop;

        this.isLoad = true;
      }
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    // 2.请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
};
</script>
<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.swiper-slide img {
  width: 100%;
}

/* .content {
  height: calc(100% - 93px);
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>