<template>
  <div class="header">
         <div class="logo"><img src="@/../public/home/img-home/logo.png" alt=""></div>
         <div class="ss"><img src="../../.././public/home/img-home/1.png" alt="">
              <input type="text" placeholder='请输入您需要搜索的商品'>
         </div>
         <div class="h-1"><img src="../../.././public/home/img-home/2.png" alt=""></div>
         
         <div class="h-2">
              <router-link :to="'/login'">
              <img src="../../.././public/home/img-home/3.png" alt="">
               </router-link>
          </div>
         
    </div>
</template>

<script>
export default {
 name:"vhheader",
}
</script>

<style scoped>

</style>