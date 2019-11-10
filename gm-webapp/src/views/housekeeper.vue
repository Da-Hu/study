<template>
  <div class="housekeeper">
      <gm-housekeeper-header></gm-housekeeper-header>
      <gm-housekeeper-content :data="gmguanjia"></gm-housekeeper-content>
  </div>
</template>

<script>
import header from "../components/housekeeper/hk-header"
import content from "../components/housekeeper/hk-content"
import gmguanjiaApi from "../api/gmguanjia"
export default {
name:"housekeeper",
data(){
    return{
        gmguanjia:[]
    }
},
components:{
    "gm-housekeeper-header":header,
    "gm-housekeeper-content":content
},
methods:{
    gmguanjiain(){
        gmguanjiaApi.getguanjiabyuseridm(data=>{
            // console.log(data)
            this.gmguanjia = data
        })
    }
},
created(){
    this.gmguanjiain()
}
}
</script>

<style scoped>
    @import "../.././public/housekeeper/housekeeper.css";
</style>