<template>
  <div>
       <div class="h-content2" >
        <img src="@/../public/hignquality/img-high-quality/c-3.jpg" alt="">
       </div>
      <div class="ha-content13">
        <div v-for="(img,i) in data.you" :key="i">
            <img :src=img.pic alt="">
            <p class="products-description">&nbsp;&nbsp;<span>自营</span>&nbsp;{{img.name}}</p>
            <p class="h-content13-1"><span>{{img.title}}</span></p>
            <p class="h-commodity-price">￥{{img.price}}</p>
        </div>
     </div>
     <div class="h-content2">
        <img src="@/../public/hignquality/img-high-quality/c-5.jpg" alt="">
      </div>
       <div class="ha-content13">
        <div v-for="(img,i) in data.xuan" :key="i">
            <img :src=img.pic alt="">
            <p class="products-description">&nbsp;&nbsp;<span>自营</span>&nbsp;{{img.name}}</p>
            <p class="h-content13-1"><span>{{img.title}}</span></p>
            <p class="h-commodity-price">￥{{img.price}}</p>
        </div>
     </div>
       <div class="h-content2">
        <img src="@/../public/hignquality/img-high-quality/c-11.jpg" alt="">
      </div>
       <div class="ha-content13">
        <div v-for="(img,i) in data.shang" :key="i">
            <img :src=img.pic alt="">
            <p class="products-description">&nbsp;&nbsp;<span>自营</span>&nbsp;{{img.name}}</p>
            <p class="h-content13-1"><span>{{img.title}}</span></p>
            <p class="h-commodity-price">￥{{img.price}}</p>
        </div>
     </div>
       <div class="h-content2">
        <img src="@/../public/hignquality/img-high-quality/c-13.jpg" alt="">
      </div>
       <div class="ha-content13">
        <div v-for="(img,i) in data.cheng" :key="i">
            <img :src=img.pic alt="">
            <p class="products-description">&nbsp;&nbsp;<span>自营</span>&nbsp;{{img.name}}</p>
            <p class="h-content13-1"><span>{{img.title}}</span></p>
            <p class="h-commodity-price">￥{{img.price}}</p>
        </div>
     </div>
  </div>
</template>

<script>

export default {
name:"hcontent3",
components:{
},
props:["data"]
}
</script>

<style>

</style>