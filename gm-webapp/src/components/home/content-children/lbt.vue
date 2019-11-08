<template>
            <div class="swiper-container carousel" >
                <div class="swiper-wrapper">                   
                    <div class="swiper-slide"><img src="@/../public/home/img-home/l-8.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="@/../public/home/img-home/l-7.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="@/../public/home/img-home/l-5.jpg" alt=""></div>
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
// import swiper from "../../../../../node_modules/swiper/js/swiper.min.js"
import Swiper from "swiper"
export default {
name:"lbt",
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

<style scoped>
.swiper-wrapper img{
    width: 100%;
    height: 100%;
}
</style>