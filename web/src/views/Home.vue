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
        class="swiper-pagination pagination-home text-right
        px-3  pb-1"
        slot="pagination"
      ></div>
    </swiper>
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
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: .125rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
</style>