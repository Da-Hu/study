<template>
     <div class="hk-h-content5">
       <gm-housekeeper-content-shops-title></gm-housekeeper-content-shops-title>
       <gm-housekeeper-content-shopz-title></gm-housekeeper-content-shopz-title>
       
    </div>
</template>

<script>
import hkshop from "./hk-shop/hk-shop"
import hktitle from "./hk-shop/hk-title"
export default {
name:"shops",
components:{
    "gm-housekeeper-content-shops-title":hktitle,
    "gm-housekeeper-content-shopz-title":hkshop
}
}
</script>

<style>

</style>