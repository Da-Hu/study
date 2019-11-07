<template>
    <div class="content">
        <gm-home-content-lbt></gm-home-content-lbt>
        <gm-home-content-hcontent7></gm-home-content-hcontent7>
        <gm-home-content-hlist3></gm-home-content-hlist3>
        <gm-home-content-hcontent6></gm-home-content-hcontent6>
        <gm-home-content-hcontent5></gm-home-content-hcontent5>
        <gm-home-content-hcontent4></gm-home-content-hcontent4>
        <gm-home-content-hcontent3></gm-home-content-hcontent3>
        <gm-home-content-hlist2></gm-home-content-hlist2>
        <gm-home-content-hcontenttwo></gm-home-content-hcontenttwo>
        <div class="content10">
            <img src="@/../public/home/img-home/c-20.png" alt="">   
        </div>
        <gm-home-content-hcontent></gm-home-content-hcontent>
        <div class="content12"><img src="@/../public/home/img-home/c-12.png" alt=""></div>
        <gm-home-content-hlist></gm-home-content-hlist>       
        <div class="content14">
            <div>登录 </div>
            
            <div>注册 </div>
            
            <div>更多 </div>
    
            <div>反馈</div>
        </div>
        <gm-home-content-footer></gm-home-content-footer>
    </div>
</template>

<script>
import lbt from "./content-children/lbt"
import hcontent7 from "./content-children/content7"
import list3 from "./content-children/list3"
import hcontent6 from "./content-children/content6"
import hcontent5 from "./content-children/content5"
import hcontent4 from "./content-children/content4"
import hcontent3 from "./content-children/content3"
import list2 from "./content-children/list2"
import hcontent2 from "./content-children/content2"
import hcontent from "./content-children/content1"
import hfooter from "./content-children/hfooter"
import hlist from "./content-children/list"
export default {
name:"vhcontent",
components:{
    "gm-home-content-footer":hfooter,
    "gm-home-content-hlist":hlist,
    "gm-home-content-hcontent":hcontent,
    "gm-home-content-hcontenttwo":hcontent2,
    "gm-home-content-hlist2":list2,
    "gm-home-content-hcontent3":hcontent3,
    "gm-home-content-hcontent4":hcontent4,
    "gm-home-content-hcontent5":hcontent5,
    "gm-home-content-hcontent6":hcontent6,
    "gm-home-content-hlist3":list3,
    "gm-home-content-hcontent7":hcontent7,
    "gm-home-content-lbt":lbt,
}
}
</script>

<style>

</style>