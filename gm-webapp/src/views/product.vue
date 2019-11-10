<template>
  <div class="pproduct">
        <gm-product-header></gm-product-header>
        <gm-product-content :data="productinfo"></gm-product-content>
        <gm-product-footer></gm-product-footer>
  </div>
</template>

<script>
import productheader from "../components/product/productHeader"
import productcontent from "../components/product/productContent"
import productfooter from "../components/product/productFooter"
import productapi from "../api/shops"
export default {
name:"pproduct",
data(){
  return{
    productinfo:[]
  }
},
components:{
    "gm-product-header":productheader,
    "gm-product-content":productcontent,
    "gm-product-footer":productfooter
},
methods:{
  gmproduct(){
    productapi.getshopsbyuseridm(data=>{
      // console.log(data)
      this.productinfo = data
    })
  }
},
created(){
  this.gmproduct()
}
}
</script>

<style scoped>
@import "../.././public/product/Product.css";
</style>