<template>
  <div class="content-right">
    <classify-content-right-top :data="data"></classify-content-right-top>

  </div>
</template>

<script>
import cnavrighttop from "./c-nav-right/c-nav-righttop"
export default {
name:"cnavright",
components:{
    "classify-content-right-top":cnavrighttop
},
props: ["data"]
}
</script>

<style>

</style>