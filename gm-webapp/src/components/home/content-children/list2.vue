<template>
    <div>
        <div class="content7" >
        <div v-for="(img,i) in data" :key="i"><img :src= img.pic></div>
        <!-- <div><img src="@/../public/home/img-home/c-7 (5).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (11).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (1).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (7).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (9).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (8).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (4).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (2).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (10).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (12).jpg" alt=""></div>
        <div><img src="@/../public/home/img-home/c-7 (3).jpg" alt=""></div> -->
    </div>
    </div>
</template>

<script>
export default {
name:"list2",
props:["data"]
}
</script>

<style>

</style>