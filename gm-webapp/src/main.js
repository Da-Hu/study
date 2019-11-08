import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import 'swiper/css/swiper.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router,
}).$mount('#app')