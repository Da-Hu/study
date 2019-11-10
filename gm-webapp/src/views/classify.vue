<template>
  <div class="classify">
   <gm-classify-header></gm-classify-header>
   <gm-classify-content :data="classifyinfo"></gm-classify-content>
  </div>
</template>

<script>
import cheader from "../components/classify/header"
import classifycontent from "../components/classify/content"
import classifyapi from "../api/gmclassify"
export default {
  name:'vclassify',
  components:{
      "gm-classify-header":cheader,
      "gm-classify-content":classifycontent
  },
  data(){
    return {
      classifyinfo:[] 
    }
  },
  methods:{
    initclass(){
      classifyapi.getclassifybyuseridm(data=>{
        
        this.classifyinfo = data;
        // console.log(this.classifyinfo)
      })
    }
  },
  created(){
    this.initclass()
  }
}
</script>

<style scoped>
@import "../.././public/classify/classify.css";
</style>