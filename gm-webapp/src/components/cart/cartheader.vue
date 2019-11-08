<template>
  <div>
    <div class="cart-header">
        <div class="cart-header-left">
            <router-link :to="'/main/product'">
            <img src="@/../public/cart/img-cart/left.png" alt="">
            </router-link>
        </div>
        <div class="cart-header-cart"><p>购物车</p><img src="@/../public/cart/img-cart/111.png" alt=""></div>
        <div class="cart-header-bianji">编辑</div>
        <div class="cart-header-nav" @click="up"><img src="@/../public/cart/img-cart/0.png" alt=""></div>
    </div>
    <div class="nav-daohang" v-if="show">
        <div>
            <router-link :to="'/'">
            <img src="@/../public/cart/img-cart/5.png" alt=""><span>首页</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/main/classify'">
            <img src="@/../public/cart/img-cart/4.png" alt=""><span>分类</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/main/cart'">
            <img src="@/../public/cart/img-cart/2.png" alt=""><span>购物车</span>
            </router-link>
        </div>
        <div>
            <router-link :to="'/main/my'">
            <img src="@/../public/cart/img-cart/3.png" alt=""><span>我的</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"cartheader",
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
.nav-daohang span{
  color: #6E6E6E;
}
</style>