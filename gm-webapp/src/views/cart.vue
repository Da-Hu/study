<template>
  <div class="cart">
      <gm-cart-header></gm-cart-header>
      <gm-cart-shopping></gm-cart-shopping>
      <gm-cart-footer></gm-cart-footer>
  </div>
</template>

<script>
import cartheader from "../components/cart/cartheader"
import carts from "../components/cart/cartShop"
import cartfooter from "../components/cart/cartfooter"
export default {
name:"cart",
components:{
    "gm-cart-header":cartheader,
    "gm-cart-shopping":carts,
    "gm-cart-footer":cartfooter
}
}
</script>

<style scoped>
@import "../.././public/cart/cart.css";
</style>