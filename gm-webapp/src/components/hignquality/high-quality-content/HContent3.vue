<template>
  <div>
       <gm-highquality-content-list-title></gm-highquality-content-list-title>
       <gm-highquality-content-list></gm-highquality-content-list>
       <gm-highquality-content-list-title></gm-highquality-content-list-title>
       <gm-highquality-content-list></gm-highquality-content-list>
       <gm-highquality-content-list-title></gm-highquality-content-list-title>
       <gm-highquality-content-list></gm-highquality-content-list>
  </div>
</template>

<script>
import hlisttitle from "./h-list/list-title"
import hshops from "./h-list/h-shops"
export default {
name:"hcontent3",
components:{
    "gm-highquality-content-list-title":hlisttitle,
    "gm-highquality-content-list":hshops
}
}
</script>

<style>

</style>