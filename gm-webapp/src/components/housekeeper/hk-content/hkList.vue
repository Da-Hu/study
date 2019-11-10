<template>
  <div class="hk-h-content1">
        <div v-for="(con,i) in data" :key="i">
            <img :src=con.pic alt="">
            <p>{{con.tltle}}</p>
        </div>
    </div>
</template>

<script>
export default {
name:"hkList",
props:["data"]
}
</script>

<style>

</style>