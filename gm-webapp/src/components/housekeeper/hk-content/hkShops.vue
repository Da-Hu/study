<template>
    <div>
      <div class="hk-h-content5" v-for="(con,i) in data" :key="i">
       <div class="hk-h-content5-1">
        <div><p>{{con.tltle}}</p></div>
        <div>更多<img src="@/../public/housekeeper/h-img/right.png" alt=""></div>
       </div>
       <div class="hk-h-content5-2" >
        <div v-for="(p,i) in con.pro" :key="i">
            <img :src=p.pic alt="">
            <p>{{p.name}}</p>
            <span>{{p.pirce}}元/台</span>
        </div>
        </div>
        <div class="hk-h-content5-2" >
        <div v-for="(p,i) in con.pro1" :key="i">
            <img :src=p.pic alt="">
            <p>{{p.name}}</p>
            <span>{{p.pirce}}元/台</span>
        </div>
        </div>
        <div class="hk-h-content5-2" >
        <div v-for="(p,i) in con.pro2" :key="i">
            <img :src=p.pic alt="">
            <p>{{p.name}}</p>
            <span>{{p.pirce}}元/台</span>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
name:"shops",
components:{
},
props:["data"]
}
</script>

<style>


</style>