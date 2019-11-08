<template>
  <div class="classify">
   <gm-classify-header></gm-classify-header>
   <gm-classify-content></gm-classify-content>
  </div>
</template>

<script>
import cheader from "../components/classify/header"
import classifycontent from "../components/classify/content"
import classifyApi from ".././api/gmclassify"
export default {
  name:'vclassify',
  components:{
      "gm-classify-header":cheader,
      "gm-classify-content":classifycontent
  },
  methods:{ 
    initdata(){
      classifyApi.getclassifybyuserid(data=>{
        console.log(data);
      })
    },
    created(){
    this.initdata()
  },
  }
}
</script>

<style scoped>
@import "../.././public/classify/classify.css";
</style>