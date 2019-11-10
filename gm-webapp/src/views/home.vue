<template>
<div class="home">
  <gm-home-header></gm-home-header>
  <gm-home-content :data="homeinfo"></gm-home-content>
  <gm-home-footer></gm-home-footer>
</div>
</template>

<script>
import header from '../components/home/header'
import footer from '../components/home/footer'
import content from '../components/home/content'
import homeapi from "../api/gmhome"
export default {
  name:'vhome',
  data(){
      return{
        homeinfo:[]
      }
  },
  components:{
      "gm-home-header":header,
      "gm-home-footer":footer,
      "gm-home-content":content
  },
  methods:{
    homeapidata(){
      homeapi.gethomebyuseridm(data=>{
        // console.log(data)
        this.homeinfo = data
      })
    }
  },
  created(){
    this.homeapidata()
  }
}
</script>

<style scoped>
@import "../.././public/home/home.css";
</style>