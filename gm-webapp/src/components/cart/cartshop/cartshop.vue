<template>
   <div class="cart-content-1">
        <div class="shopping-name">
            <div><input type="checkbox"></div>
            <div class="shopping-name-a1"><a href="#">国美自营</a></div>
            <div class="shopping-name-a2"><a href="#">运费说明</a><span>|</span><a href="#" class="cccc">领劵</a></div>
        </div>
        <gm-cart-shopping-shop></gm-cart-shopping-shop>         
    </div>
</template>

<script>
import shoplist from "./cartlist"
export default {
name:"cartshops",
components:{
    "gm-cart-shopping-shop":shoplist
}
}
</script>

<style>

</style>