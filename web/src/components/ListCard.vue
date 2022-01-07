<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === i }"
        v-for="(categorie, i) in categories"
        :key="i"
        @click="active = i"
      >
        <div class="nav-link">{{categorie.name}}</div>
      </div>
    </div>
    <div class="pt-2">
      <swiper>
        <swiper-slide v-for="m in 5" :key="m">
          <div class="py-2" v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>元歌皮肤设计大赛精彩创意赏析第四期</span>
            <span>06/02</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0,
    }
  }
}
</script>

<style>
</style>