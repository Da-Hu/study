<template>
  <div class="housekeeper">
      <gm-housekeeper-header></gm-housekeeper-header>
      <gm-housekeeper-content></gm-housekeeper-content>
  </div>
</template>

<script>
import header from "../components/housekeeper/hk-header"
import content from "../components/housekeeper/hk-content"
export default {
name:"housekeeper",
components:{
    "gm-housekeeper-header":header,
    "gm-housekeeper-content":content
}
}
</script>

<style scoped>
    @import "../.././public/housekeeper/housekeeper.css";
</style>