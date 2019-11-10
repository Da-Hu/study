<template>
  <div>
      <div class="content2">
        <router-link :to="'/main/housekeeper'" v-for="(list,i) in data.conlist" :key="i">
        <div >          
            <img :src=list.pic alt="">
            <p>{{list.title}}</p>           
        </div>
        </router-link>
</div>
  </div>
</template>

<script>
export default {
name:"vlist3",
props:["data"]
}
</script>

<style scoped>
  .content2 p{
      color: #585858;
  }
</style>