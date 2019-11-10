<template>
    <div class="classify-nav-content">
        
        <div v-for="(item,i) in data.list" :key=i class="nav-content1">
            <p class="nav-content1-p">{{item.title}}</p>
            <div class="nav-content1-1">
                <div v-for="(con,i) in item.list" :key="i">
                    <router-link :to="'/main/product'">
                    <img :src=con.url alt=""><p>{{con.name}}</p>
                    </router-link>
                </div>
                
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
},
props: ["data"]
}
</script>

<style>

</style>