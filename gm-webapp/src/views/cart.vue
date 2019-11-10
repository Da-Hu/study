<template>

    <div class="cart" v-if="cartinfo.shops">
      <gm-cart-header></gm-cart-header>
      <div class="cart-content-11">
      <gm-cart-shopping :data="shop" :sid="sid" @sAll="sSelectAll" 
             :key="sid" v-for="(shop,sid) in cartinfo.shops" @pall="productsAll">
      </gm-cart-shopping>
      </div>
     <gm-cart-footer :data="cartinfo" v-if="cartinfo.shops" @shopAll="shopsAll"></gm-cart-footer>
   </div>
  <gm-loading v-else></gm-loading>
  
</template>

<script>
 import loading from "../components/loading"
import cartheader from "../components/cart/cartheader"
import carts from "../components/cart/cartshop/cartshop"
import cartfooter from "../components/cart/cartfooter"
import cartapi from "../api/gmcart"
export default {
name:"cart",
data(){
  return{
    flag : true,
    cartinfo:[]
  }
},
components:{
    "gm-cart-header":cartheader,
    "gm-cart-shopping":carts,
    "gm-cart-footer":cartfooter,
     "gm-loading":loading
  },
  methods:{
    initcart(){ //页面初始化加载
      cartapi.getcartbyuseridm(data=>{
        //  console.log(data)
        this.cartinfo = data
      })
    },
    shopsAll(){  //自定义事件 购物车全选 底部点击触发
      // console.log(111)
      let checked = this.cartinfo.checked;
      this.cartinfo.shops.forEach((shop,sid) => {
          shop.checked = checked
        shop.products.forEach((product,pid)=>{
          product.checked = checked;
        })
      });
    },
    sSelectAll(sid){ //店铺全选
      let checked = this.cartinfo.shops[sid].checked;
      // console.log(sid)
       this.cartinfo.shops[sid].products.forEach((product, pid) => {
            product.checked = checked;
        })
    },
    //单选状态改变
    productsAll(sid){
        let checked = this.cartinfo.shops[sid].products.every((product,pid)=>{
            return product.checked == true
        })
        this.cartinfo.shops[sid].checked = checked;

        let schecked = this.cartinfo.shops.every((shop,sid)=>{
            return shop.checked == true
        })
        this.cartinfo.checked = schecked;
    },
    //商品加减
    updataNum(sid,pid,flag){
      if(flag == "add"){
        this.cartinfo.shops[sid].products[pid].num++
      }else{
        if(this.cartinfo.shops[sid].products[pid].num<=1){
          this.cartinfo.shops[sid].products[pid].num=1
        }else{
          this.cartinfo.shops[sid].products[pid].num--
        }
      }
    },
    _count(){   //统计购物车的总价格
          let total = 0
             this.cartinfo.shops.forEach((shop,sid)=>{
            shop.products.forEach((product,pid)=>{
              if(product.checked){
                   total += product.price * product.num
              }
            })
        })
        return total
    }

  },
  created(){
    this.initcart()
  },
  mounted(){
    this.$bus.$on("num",this.updataNum)
  },
  watch:{
    cartinfo:{
      handler(n,o){
        let total = this._count()
        // console.log(total)
        if(total>=9999 && this.flag){
          this.flag = false //判断是否大于9999只需触发一次
          alert("支付并获得小礼品一份")
        }
      },
      deep:true
    }
  }
}
</script>
<style scoped>
@import "../.././public/cart/cart.css";
</style>