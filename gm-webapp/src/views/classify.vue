<template>
  <div class="classify">
   <gm-classify-header></gm-classify-header>
   <gm-classify-content></gm-classify-content>
  </div>
</template>

<script>
import cheader from "../components/classify/header"
import classifycontent from "../components/classify/content"
export default {
  name:'vclassify',
  components:{
      "gm-classify-header":cheader,
      "gm-classify-content":classifycontent
  }
}
</script>

<style>
@import "../.././public/classify/classify.css";
</style>