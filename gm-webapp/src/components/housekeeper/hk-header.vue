<template>
  <div>
    <div class="hk-header">
        <div class="hk-left">
            <router-link :to="'/'">
            <img src="@/../public/housekeeper/h-img/left.png" alt="">
            </router-link>
        </div>
        <div><p>国美管家服务</p></div>
        <div class="hk-nav" @click="up"><img src="@/../public/housekeeper/h-img/0.png" alt=""></div>
    </div>
    <!-- 导航的弹出框 -->
    <div class="hk-nav-daohang" v-if="show">
        <div>
            <router-link :to="'/'">
            <img src="@/../public/housekeeper/h-img/5.png" alt=""><span>首页</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/main/classify'">
            <img src="@/../public/housekeeper/h-img/4.png" alt=""><span>分类</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/mian/cart'">
            <img src="@/../public/housekeeper/h-img/2.png" alt=""><span>购物车</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/main/my'">
            <img src="@/../public/housekeeper/h-img/3.png" alt=""><span>我的</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"hkheader",
data(){
    return{
        show:false
    }
},
methods:{
    up(){
        this.show=!this.show
    }
}
}
</script>

<style scoped>
   .hk-nav-daohang span{
       color: #A0A0A0;
   }
</style>