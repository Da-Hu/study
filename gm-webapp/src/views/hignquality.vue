<template>
  <div class="h-q">
      <gm-hignquality-deader></gm-hignquality-deader>
      <gm-hignquality-content></gm-hignquality-content>
      <gm-hignquality-footer></gm-hignquality-footer>
  </div>
</template>

<script>
import header from "../components/hignquality/Pheader"
import content from "../components/hignquality/Pcontent"
import footer from "../components/hignquality/Pfooter"
export default {
name:"hignquality",
components:{
    "gm-hignquality-deader":header,
    "gm-hignquality-footer":footer,
    "gm-hignquality-content":content
}
}
</script>

<style scoped>
@import "../.././public/hignquality/high-quality.css";
</style>