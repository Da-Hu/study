<template>
 <div class="h-content">
      <gm-hignquality-content1></gm-hignquality-content1>
      <gm-hignquality-content2></gm-hignquality-content2>
      <gm-hignquality-content3 :data="data"></gm-hignquality-content3>
      <gm-hignquality-content4></gm-hignquality-content4>
      <gm-hignquality-content5></gm-hignquality-content5>
 </div>
</template>

<script>
import content1 from "./high-quality-content/HContent1"
import content2 from "./high-quality-content/HContent2"
import content3 from "./high-quality-content/HContent3"
import content4 from "./high-quality-content/HContent4"
import content5 from "./high-quality-content/HContent5"
export default {
name:"hignquality-content",
components:{
    "gm-hignquality-content1":content1,
    "gm-hignquality-content2":content2,
    "gm-hignquality-content3":content3,
    "gm-hignquality-content4":content4,
    "gm-hignquality-content5":content5
},
props:["data"]
}
</script>

<style>

</style>