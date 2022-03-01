import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)
Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'

import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL: "http://localhost:3000/web/api"
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
