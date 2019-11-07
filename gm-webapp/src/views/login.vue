<template>
  <div class="log-in">
        <gm-log-in-header></gm-log-in-header>
        <gm-log-in-logo></gm-log-in-logo>
        <gm-log-in-from></gm-log-in-from>
        <gm-log-in-footer></gm-log-in-footer>
  </div>
</template>

<script>
import lheader from "../components/login/Lheader"
import llogo from "../components/login/Llogo"
import lfrom from "../components/login/Lfrom"
import lfooter from "../components/login/Lfooter"
export default {
name:"login",
components:{
    "gm-log-in-header":lheader,
    "gm-log-in-logo":llogo,
    "gm-log-in-from":lfrom,
    "gm-log-in-footer":lfooter
}
}
</script>
 
<style>
@import "../.././public/login/log-in.css";
</style>