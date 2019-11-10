<template>
  <div class="footer">
          <div> 
          <router-link :to="'/'">
           <img src="@/../public/home/img-home/footer (4).png" alt=""><p>首页</p>
          </router-link>
          </div>
          <div>
            <router-link :to="'/main/classify'">
           <img src="@/../public/home/img-home/footer (5).png" alt=""><p>分类</p>
            </router-link>
          </div>
          <div>
            <router-link :to="'/main/hignquality'">
           <img src="@/../public/home/img-home/footer (3).png" alt=""><p>优选</p>
           </router-link>
          </div>
          <div>
            <router-link :to="'/main/cart'">
           <img src="@/../public/home/img-home/footer (2).png" alt=""><p>购物车</p>
           </router-link>
          </div>
          <div>
            <router-link :to="'/main/my'">
           <img src="@/../public/home/img-home/footer (1).png" alt=""><p>我的</p>
          </router-link>
          </div>

  </div>
</template>

<script>
export default {
name:"vhheader"
}
</script>

<style>

</style>