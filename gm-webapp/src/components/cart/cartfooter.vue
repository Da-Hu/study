<template>
   <div class="cart-footer">
        <div class="cart-footer-all">
            <input type="checkbox" v-model="data.checked" @change="selectAll">
            <span>全选</span>
        </div>
        <div class="cart-price">合计:￥<span>{{data | countPrice}}</span></div>
        <div class="cart-sum">去结算( <span>{{data | countnum}}</span> )</div>
    </div>
</template>

<script>
export default {
name:"cartfooter",
props: ["data","sid"],
methods:{
    selectAll(){
        this.$emit("shopAll")
    }
},
filters:{  //过滤器
    countPrice(cartinfo){
        let total = 0; //便利店铺 和商品 每个商品的数量乘单价
        // if(cartinfo.products){
        cartinfo.shops.forEach((shop,sid)=>{
            shop.products.forEach((product,pid)=>{
                if(product.checked){
                     total +=product.price * product.num
                }
                    
            })
        })
        return total
    },
    countnum(cartinfo){
        let nums = 0;
        cartinfo.shops.forEach((shop,sid)=>{
            shop.products.forEach((product,pid)=>{
                if(product.checked){
                    nums += product.num
                }
            })
        })
        return nums
    }
}
}
</script>

<style scoped>

</style>