<template>
   <div class="swiper-container carousel hk-carousel" >
      <div class="swiper-wrapper">                   
          <div class="swiper-slide"><img src="@/../public/housekeeper/h-img/lbt.jpg" alt=""></div>
          <div class="swiper-slide"><img src="@/../public/housekeeper/h-img/111.jpg" alt=""></div>
          <div class="swiper-slide"><img src="@/../public/housekeeper/h-img/123.jpg" alt=""></div>
          <div class="swiper-slide"><img src="@/../public/housekeeper/h-img/122.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
    name:"hkLbt",
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination:{
            el:'.swiper-pagination'
        }
     })        
    }
}
</script>

<style>

</style>