<template>
    <div class="content13">
        <div v-for="(con,i) in data " :key="i">
            <img :src= con.pic alt="">
            <p class="products-description">&nbsp;&nbsp;<span>自营</span>{{con.title}}</p>
            <p class="content13-1"><span>赠</span></p>
            <p class="commodity-price">￥{{con.price}} <span>看相似</span></p>
        </div>
    </div>

</template>

<script>
export default {
name:"vlist",
props:["data"]
}
</script>

<style>

</style>