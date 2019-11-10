<template>
  <div class="log-in-from">
        <div class="log-in-from-login"> 
            <a @click="loginA=0,flag=true" :class="{active:loginA===0}">账号密码登录</a>
            <a @click="loginA=1,flag=false" :class="{active:loginA===1}">短信验证码登录</a>
        </div>
        <form action="">
            <div v-if="flag">
                <input type="text" placeholder="手机号/邮箱/用户名/门店会员卡号">
                <input type="password" placeholder="请输入密码">
            </div>
             <div v-else> 
                <input type="text" placeholder="请输入手机号获取验证码">
                <input type="password" placeholder="请输入验证码">
            </div>
            <div><a href="#">手机号快速注册</a><a href="#">找回密码</a></div>
            <input type="submit" value="登录" class="login-btn">
        </form>
    </div>
</template>

<script>
export default {
name:"lfrom",
data(){
    return{
     flag:'true' ,
     loginA:0
    }
}
}
</script>

<style scoped>
.log-in-from-login a.active{
    color: #F20C59;
    border-bottom: 0.02rem solid #F20C59;
  }
</style>