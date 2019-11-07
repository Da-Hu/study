<template>
<div class="my">
   <gm-my-header></gm-my-header>
   <gm-my-name></gm-my-name>
   <div class="m-content">
    <gm-my-order></gm-my-order>
   <div class="m-c-3"><img src="@/../public/my/img1/5.jpg" alt=""></div>
   <gm-my-list></gm-my-list>
   </div>
</div>
</template>

<script>
import mheader from "../components/my/mheader"
import mname from "../components/my/mname"
import morder from "../components/my/morder"
import mlist from "../components/my/mlist"
export default {
name:"my",
components:{
    "gm-my-header":mheader,
    "gm-my-name":mname,
    "gm-my-order":morder,
    "gm-my-list":mlist
}
}
</script>

<style>
@import "../.././public/my/my.css";
</style>