<template>
  <div class="h-q">
      <gm-hignquality-deader></gm-hignquality-deader>
      <gm-hignquality-content :data="youxuaninfo"></gm-hignquality-content>
      <gm-hignquality-footer></gm-hignquality-footer>
  </div>
</template>

<script>
import header from "../components/hignquality/Pheader"
import content from "../components/hignquality/Pcontent"
import footer from "../components/hignquality/Pfooter"
import youxuanapi from "../api/gmyouxuan"
export default {
name:"hignquality",
data(){
    return{
      youxuaninfo:[]
    }
},
components:{
    "gm-hignquality-deader":header,
    "gm-hignquality-footer":footer,
    "gm-hignquality-content":content
},
methods:{
  youxuanin(){
    youxuanapi.getyuxuanbyuseridm(data=>{
      // console.log(data)
      this.youxuaninfo = data
    })
  }
},
created(){
  this.youxuanin()
}
}
</script>

<style scoped>
@import "../.././public/hignquality/high-quality.css";
</style>