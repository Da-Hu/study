import Vue from 'vue'
import VueRouter from 'vue-router'
import main from "../views/main"
import home from "../views/home"
import classify from "../views/classify"
import hignquality from "../views/hignquality"
import cart from '../views/cart'
import my from '../views/my'
import login from "../views/login"
import housekeeper from "../views/housekeeper"
import product from "../views/product"

Vue.use(VueRouter)

let router = new VueRouter({
   routes:[
       {path:"/",component:home},
       {path:"/login",component:login},
       {path:'/main',component:main,
        children:[
            {path:'/main/classify',component:classify},
            {path:'/main/hignquality',component:hignquality},
            {path:'/main/cart',component:cart},
            {path:'/main/my',component:my},
            {path:'/main/housekeeper',component:housekeeper},
            {path:'/main/product',component:product}
        ]
       },
       
   ]
})
export default router