<template>
  <div class="pproduct">
        <gm-product-header></gm-product-header>
        <gm-product-content></gm-product-content>
        <gm-product-footer></gm-product-footer>
  </div>
</template>

<script>
import productheader from "../components/product/productHeader"
import productcontent from "../components/product/productContent"
import productfooter from "../components/product/productFooter"
export default {
name:"pproduct",
components:{
    "gm-product-header":productheader,
    "gm-product-content":productcontent,
    "gm-product-footer":productfooter
}
}
</script>

<style scoped>
@import "../.././public/product/Product.css";
</style>