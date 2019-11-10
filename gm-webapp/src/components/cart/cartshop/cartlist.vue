<template>
  <div>
       <div class="shopping-content" v-for="(con,pid) in data" :key="pid">
        <div><input type="checkbox" v-model="con.checked" @change="pselected(sid)"></div>
        <div><img :src=con.pic alt=""></div>
        <div class="shopping-content-xiangqing">
            <p class="shopping-content-xiangqing-p">{{con.title}}</p>
            <div class="shop-brief">
                <span>{{con.weight}}</span>
                <span>{{con.color}}</span>
                <span>{{con.ver}}</span>
            </div> 
            <div class="shop-price">
                <div class="shop-pices">
                    ￥<b class="price">{{con.price}}</b>
                </div>
                <div class="shop-arithmetic">
                    <a class="minus" @click.prevent="addNum(sid,pid,'aa')">-</a> 
                    <!-- prevent阻止他的默认行为 -->
                    <span class="num">{{con.num}}</span>
                    <a class="plus" @click.prevent="addNum(sid,pid,'add')">+</a>
                </div>
            </div>           
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"cartlist",
props:["data","sid"],
methods:{
    pselected(sid){
    this.$emit("pall",sid)
    },
    addNum(sid,pid,flag){
         this.$bus.$emit("num",sid,pid,flag)
        // console.log(sid,pid)
    }
}
}
</script>

<style>

</style>