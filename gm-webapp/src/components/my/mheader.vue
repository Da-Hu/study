<template>
  <div>
      <div class="m-header">
            <div class="m-left"><img src="@/../public/my/img1/left.png" alt=""></div>
            <div class="m-input">我的国美</div>
            <div class="m-nav" @click="up"><img src="@/../public/my/img1/0.png" alt=""></div>
        </div>
        <div class="m-nav-daohang" v-if="show">
            <div>
                <router-link :to="'/'" class="c-h-skip">
                <img src="@/../public/my/img1/51.png" alt=""><span>首页</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/main/classify'" class="c-h-skip">
                <img src="@/../public/my/img1/41.png" alt=""><span>分类</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/main/cart'" class="c-h-skip">
                <img src="@/../public/my/img1/21.png" alt=""><span>购物车</span>
                </router-link>
            </div>
            <div>
                <router-link :to="'/main/my'" class="c-h-skip">
                <img src="@/../public/my/img1/31.png" alt=""><span>我的</span>
                </router-link>
            </div>
        </div>
  </div>
</template>
    
<script>
    export default {
    name:"mheader",
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

<style>

</style>