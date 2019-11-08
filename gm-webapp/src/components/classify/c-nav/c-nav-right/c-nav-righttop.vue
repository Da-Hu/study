<template>
    <div class="classify-nav-content">
        <div class="nav-content1">
            <p class="nav-content1-p">大家电</p>
            <div class="nav-content1-1">
                <div>
                    <router-link :to="'/main/product'">
                    <img src="@/../public/classify/img-classify/cat10000049.png" alt=""><p>平面电视</p>
                    </router-link>
                </div>
                <div><img src="@/../public/classify/img-classify/cat10000054.png" alt=""><p>冰箱</p></div>
                <div><img src="@/../public/classify/img-classify/cat10000062.png" alt=""><p>壁挂式空调</p></div>
             </div>
        </div>
        <div class="nav-content1">
            <p class="nav-content1-p">数码通讯</p>
            <div class="nav-content1-1">
                <div><img src="@/../public/classify/img-classify/cat10000070.png" alt=""><p>手机</p></div>
                <div><img src="@/../public/classify/img-classify/cat10000092.png" alt=""><p>笔记本电脑</p></div>
                <div><img src="@/../public/classify/img-classify/cat10000145.png" alt=""><p>单反相机</p></div>
            </div>
        </div>
        <div class="nav-content1">
            <p class="nav-content1-p">厨卫生活</p>
            <div class="nav-content1-1">
                <div><img src="@/../public/classify/img-classify/1111.png" alt=""><p>取暖器</p></div>
                <div><img src="@/../public/classify/img-classify/1112.png" alt=""><p>空气净化器</p></div>
                <div><img src="@/../public/classify/img-classify/1113.png" alt=""><p>微波炉</p></div>
            </div>
        </div>
        <div class="nav-content1">
            <p class="nav-content1-p">日用百货</p>
            <div class="nav-content1-1">
                <div><img src="@/../public/classify/img-classify/1114.png" alt=""><p>啤酒</p></div>
                <div><img src="@/../public/classify/img-classify/1115.png" alt=""><p>品牌纸尿裤</p></div>
                <div><img src="@/../public/classify/img-classify/1116.png" alt=""><p>床品件套</p></div>
            </div>
        </div>
        <classify-content-right-footer></classify-content-right-footer>
    </div>
</template>

<script>
import cnavrightfooter from "./c-nav-rightfooter"
export default {
name:"c-nav-right-top",
components:{
    "classify-content-right-footer":cnavrightfooter
}
}
</script>

<style>

</style>