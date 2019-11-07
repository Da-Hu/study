<template>
<div class="home">
  <gm-home-header></gm-home-header>
  <gm-home-content></gm-home-content>
  <gm-home-footer></gm-home-footer>
</div>
</template>

<script>
import header from '../components/home/header'
import footer from '../components/home/footer'
import content from '../components/home/content'
export default {
  name:'vhome',
  components:{
      "gm-home-header":header,
      "gm-home-footer":footer,
      "gm-home-content":content
  }
}
</script>

<style scoped>
@import "../.././public/home/home.css";
</style>