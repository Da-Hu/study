<template>
    <div>
       <div class="shopping-name">
        <div><input type="checkbox" 
            v-model="data.checked" 
            @change="shopscheched(sid)" />
         </div>
        <div class="shopping-name-a1"><a href="#">{{data.shopName}}</a></div>
        <div class="shopping-name-a2"><a href="#">运费说明</a><span>|</span><a href="#" class="cccc">领劵</a></div>
    </div>
    <gm-cart-shop-list :data="data.products" v-if="data.products" :sid="sid" @pall ="pall"></gm-cart-shop-list>
    </div>
  
</template>
 
<script>
import cartlist from "./cartlist"
// import { emit } from 'cluster'
export default {
name:"cartshops",
components:{
"gm-cart-shop-list":cartlist
},
props: ["data","sid"],
methods:{
    shopscheched(sid){
        this.$emit("sAll",sid)
    },
    pall(sid){
        this.$emit("pall",sid)
    }
  }
}
</script>

<style>

</style>