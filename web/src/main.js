import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
import './assets/scss/style.scss'
import router from './router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
