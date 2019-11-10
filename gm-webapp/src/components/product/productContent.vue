<template>
  <div class="pp-p-content">
       <gm-product-content-shops :data="data"></gm-product-content-shops>
       <gm-product-content1></gm-product-content1>
       <gm-product-content-site></gm-product-content-site>
  </div>
</template>

<script>
import productshop from "./product-shops/productshops"
import productcontent from "./product-shops/productcontent1"
import productsite from "./product-shops/productsite"
export default {
name:"ppcontent",
components:{
    "gm-product-content-shops":productshop,
    "gm-product-content1":productcontent,
    "gm-product-content-site":productsite
},
props:["data"]
}
</script>

<style>

</style>