<template>
  <div class="c-content">
   <classify-content-nav-left></classify-content-nav-left>
   <classify-content-right :data="data"></classify-content-right>
  </div>
</template>

<script>
import classifynavleft from "./c-nav/CnavLeft"
import classifynavright from "./c-nav/CnavRight"
export default {
  name:"ccontent",
  components:{
    "classify-content-nav-left":classifynavleft,
    "classify-content-right":classifynavright
  },
  props: ["data"]
}
</script>

<style>

</style>