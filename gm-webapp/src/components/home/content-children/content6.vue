<template>

    <div class="content3"  >
    <div v-for="(img,i) in data" :key="i"><img :src=img.pic></div>
    <!-- <div><img src="@/../public/home/img-home/T1BnAyBQ_T1RCvBVdK.gif" alt=""></div> -->
</div>

</template>

<script>
export default {
name:"hcontent6",
props:["data"]
}
</script>

<style>

</style>