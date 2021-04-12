<template>
  <!-- Home works
    {{count}}
    <van-button @click="increment" type="primary">+1</van-button> -->
  <!-- 头部 banner -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <!-- nav -->
  <van-grid :column-num="5" :gutter="10">
    <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
  </van-grid>
  <!-- active -->
  <div class="active-banner">
    <p>活动</p>
  </div>
  <!-- swapper -->
  <van-swipe :loop="false" :width="300" :height="200">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <!-- tabbar -->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import {
  Button,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Icon
} from "vant";

export default defineComponent({
  name: "Home",
  components: {
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
  },
  setup() {
    const store = useStore();
    console.log(import.meta.env);
    return {
      count: computed(() => store.state.a.count),
      increment: () => store.commit("increment"),
      active: 0,
    };
  },
});
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-grid {
  background: #e4e4e4;
}

.active-banner {
  width: 375px;
  height: 118.5px;
  background: skyblue;
}
</style>