<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" height="30" />
      </router-link>

      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div class="fs-sm">
          {{ model.categories.map((v) => v.name).join("/") }}
        </div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary"> {{ model.scores.difficult }} </span>
            <span>技能</span>
            <span class="badge bg-blue-1"> {{ model.scores.skills }} </span>
            <span>攻击</span>
            <span class="badge bg-danger"> {{ model.scores.attack }} </span>

            <span>生存</span>
            <span class="badge bg-dark"> {{ model.scores.survive }} </span>
          </div>
          <router-link tag="span" to="/" class="text-grey fs-sm">
            皮肤: 2 &gt;
          </router-link>
        </div>
      </div>
    </div>
    <!-- end  of  top   -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <!-- swier -->
      <swiper>
        <swiper-slide>
          <div>
            <!--  -->
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-bofang"> </i>
                  英雄介绍视频
                </router-link>

                <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-tupian"> </i>
                  英雄介绍视频
                </router-link>
              </div>
            </div>
            <!-- skills -->
          </div>
        </swiper-slide>
        <swiper-slide> </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }

  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style  lang="scss"  >
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>