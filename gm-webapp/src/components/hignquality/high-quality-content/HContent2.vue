<template>
  <div class="h-content-nav">
        <ul>
            <li @click="loginA=0" :class="{active:loginA===0}">低价提前枪</li>
            <li @click="loginA=1" :class="{active:loginA===1}">红包返不停</li>
            <li @click="loginA=2" :class="{active:loginA===2}">领劵立减</li>
            <li @click="loginA=3" :class="{active:loginA===3}">大屏畅享</li>
            <li @click="loginA=4" :class="{active:loginA===4}">智能电视</li>
            <li @click="loginA=5" :class="{active:loginA===5}">OLED电视</li>
            <li @click="loginA=6" :class="{active:loginA===6}">高端奢享</li>
            <li @click="loginA=7" :class="{active:loginA===7}">必备优选</li>
            <li @click="loginA=8" :class="{active:loginA===8}">品类会场</li>
        </ul>
    </div>
</template>

<script>
export default {
name:"hcontent2",
data(){
    return{
        loginA:0
    }
}
}
</script>

<style scoped>
.h-content-nav ul li.active{
    color: #F20C59;
    border-bottom: 0.02rem solid #F20C59;
  }
</style>