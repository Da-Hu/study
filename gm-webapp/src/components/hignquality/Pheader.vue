<template>
  <div>
    <div class="h-header">
        <div class="h-left">
            <router-link :to="'/'">
            <img src="@/../public/hignquality/img-high-quality/left.png" alt="">
            </router-link>
        </div>
        <div><p>电视品类站</p></div>
        <div class="h-nav" @click="up"><img src="@/../public/hignquality/img-high-quality/0.png" alt=""></div>
    </div>
        <!-- 导航的弹出框 -->
    <div class="h-nav-daohang" v-if="show">
        
    <div>
        <router-link :to="'/'" class="c-h-skip">
        <img src="@/../public/hignquality/img-high-quality/5.png" alt=""><span>首页</span>
        </router-link>
    </div>
    <div>
        <router-link :to="'/main/classify'" class="c-h-skip">
        <img src="@/../public/hignquality/img-high-quality/4.png" alt=""><span>分类</span>
        </router-link>
    </div>
    <div>
        <router-link :to="'/main/cart'" class="c-h-skip">
        <img src="@/../public/hignquality/img-high-quality/2.png" alt=""><span>购物车</span>
        </router-link>
    </div>
    <div>
        <router-link :to="'/main/my'" class="c-h-skip">
        <img src="@/../public/hignquality/img-high-quality/3.png" alt=""><span>我的</span>
        </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name:"hignquality-header",
data(){
    return{
      show:false
    }
},
methods:{
    up(){
        this.show = !this.show
    }
  }
}
</script>

<style>

</style>