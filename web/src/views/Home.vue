<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/banner1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/banner2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/banner3.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
    </swiper>
    <!--  end  of  swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>

        <div class="nav-item mb-3">
          <i class="sprite sprite-gushi"></i>
          <div class="py-2">故事站</div>
        </div>
        <!--  -->
        <div class="nav-item mb-3">
          <i class="sprite sprite-shangcheng"></i>
          <div class="py-2">周边商城</div>
        </div>
        <!--  -->
        <div class="nav-item mb-3">
          <i class="sprite sprite-tiyan"></i>
          <div class="py-2">体验服</div>
        </div>
        <!--  -->
        <div class="nav-item mb-3">
          <i class="sprite sprite-xingren"></i>
          <div class="py-2">新人专区</div>
        </div>
        <!--  -->
        <div class="nav-item mb-3">
          <i class="sprite sprite-chuancheng"></i>
          <div class="py-2">荣耀传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-yindi"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gongzong"></i>
          <div class="py-2">公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-banben"></i>
          <div class="py-2">版本介绍</div>
        </div>
      </div>

      <div class=".bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end  of  nav-icons -->
    <!-- <i class="iconfont icon-cc-menu-circle  fs-sm  text-primary"></i> -->

    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{ news.categoryName }}]</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.data }}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="精彩视频"></m-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
  </div>
</template>

<script>
// import Swiper, { Pagination, Navigation } from 'swiper'
// Swiper.use([Pagination, Navigation])
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.pagination-home',

          clickable: true,
        },
        // Some Swiper option/callback...
      },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: "元歌皮肤设计大赛精彩创意赏析第四期",
            data: '06/01'
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '新闻',
            title: "元歌皮肤设计大赛精彩创意赏析第四期",
            data: '06/01'
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: "元歌皮肤设计大赛精彩创意赏析第四期",
            data: '06/01'
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: "元歌皮肤设计大赛精彩创意赏析第四期",
            data: '06/01'
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: "元歌皮肤设计大赛精彩创意赏析第四期",
            data: '06/01'
          }))
        },

      ]
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.125rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;

    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
    // other   method
    // border-left: 1px solid $border-color;
    // &:nth-child(4n + 1) {
    //   border-left: none;
    // }
  }
}
</style>