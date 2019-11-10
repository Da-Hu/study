<template>
  <div class="hk-h-content">
      <gm-housekeeper-content-lbt :data="data.lbo"></gm-housekeeper-content-lbt>
      <gm-housekeeper-content-list :data="data.list"></gm-housekeeper-content-list>
      <gm-housekeeper-content1></gm-housekeeper-content1>
      <gm-housekeeper-content2></gm-housekeeper-content2>
      <gm-housekeeper-content3></gm-housekeeper-content3>
      <gm-housekeeper-shops :data="data.products"></gm-housekeeper-shops>
      <div class="hk-h-content7">
        <p>以爱情的名义，过世俗的日子</p>
      </div>
  </div>
</template>

<script>
import khlbt from "./hk-content/hkLbt"
import khlist from "./hk-content/hkList"
import khcontent1 from "./hk-content/hkContent1"
import khcontent2 from "./hk-content/hkContent2"
import khcontent3 from "./hk-content/hkContent3"
import khshops from "./hk-content/hkShops"
export default {
name:"hkcontent",
components:{
    "gm-housekeeper-content-lbt":khlbt,
    "gm-housekeeper-content-list":khlist,
    "gm-housekeeper-content1":khcontent1,
    "gm-housekeeper-content2":khcontent2,
    "gm-housekeeper-content3":khcontent3,
    "gm-housekeeper-shops":khshops
},
props:["data"]
}
</script>

<style>

</style>