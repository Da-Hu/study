<template>
  <div>
       <div v-for="(con,i) in data.shops" :key="i">
         <div class="pp-content1"><img :src=con.pic alt=""></div>
        <div class="pp-c-3">{{con.title}}</div>
        <div class="pp-c-4">{{con.nama}}
        </div>
        <div class="pp-c-5">
            ￥{{con.price}} <del>￥1799</del>
        </div>
        <div class="pp-content6">
          <div><img src="@/../public/product/img2/c-3.png" alt=""><span>节能补贴8%</span></div>
          <div>查看《节能补贴须知》</div>
        </div>
       </div>
  </div>
</template>

<script>
export default {
  name:"productshops",
  props:["data"]

}
</script>

<style scoped>
    .pp-c-4{
      font-size: 0.12rem
    }
</style>