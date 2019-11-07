<template>
   <div>
       <div class="header">
           <div class="left"><img src="@/../public/classify/img-classify/left.png" alt=""></div>
           <div class="input"><input type="text" placeholder="5G新品抢先购"><img src="@/../public/classify/img-classify/1.png" alt=""></div>
           <div class="nav" @click="up"><img src="@/../public/classify/img-classify/0.png" alt=""></div>
       </div>
       <div class="nav-daohang" v-if="show">
            <div>
                <router-link :to="'/'" class="c-h-skip">
                <img src="@/../public/classify/img-classify/5.png" alt=""><span>首页</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/classify'" class="c-h-skip">
                <img src="@/../public/classify/img-classify/4.png" alt=""><span>分类</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/main/cart'" class="c-h-skip">
                <img src="@/../public/classify/img-classify/2.png" alt=""><span>购物车</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/main/my'" class="c-h-skip">
                <img src="@/../public/classify/img-classify/3.png" alt=""><span>我的</span>
                </router-link>
            </div>
       </div>
   </div>
</template>

<script>
export default {
name:"cheader",
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
.c-h-skip{
    color: grey;
}
</style>