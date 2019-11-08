<template>
  <div>
      <div class="pp-header">
        <div class="pp-left">
          <router-link :to="'/'">
          <img src="@/../public/product/img2/left.png" alt="">
          </router-link>
        </div>
        <div class="pp-input"><a href="#">商品</a><a href="#">详情</a><a href="#">评价</a></div>
        <div class="pp-nav" @click="up"><img src="@/../public/product/img2/0.png" alt=""></div>
    </div>
    <div class="pp-nav-daohang" v-if="show">
        <div>
          <router-link :to="'/'">
          <img src="@/../public/product/img2/51.png" alt=""><span>首页</span>
          </router-link>
        </div>
        <div>
          <router-link :to="'/main/classify'">
          <img src="@/../public/product/img2/41.png" alt=""><span>分类</span>
          </router-link>
        </div>
        <div>
          <router-link :to="'/main/cart'">
          <img src="@/../public/product/img2/21.png" alt=""><span>购物车</span>
          </router-link>
        </div>
        <div>
          <router-link :to="'/main/my'">
          <img src="@/../public/product/img2/31.png" alt=""><span>我的</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"ppheader",
data(){
  return{
    show:false
  }
},
methods:{
  up(){
    this.show =! this.show
  }
}
}
</script>

<style scoped>
.pp-nav-daohang span{
  color: #6E6E6E;
}
  
</style>