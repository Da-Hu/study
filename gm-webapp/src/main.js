import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import 'swiper/css/swiper.css'

Vue.use(VueRouter)

Vue.config.productionTip = false
let bus = new Vue();
Vue.prototype.$bus = bus;
new Vue({
  // el:"#app",
  render: h => h(App),
  router,
}).$mount('#app')
