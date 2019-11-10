import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/gmcart`
export default {
    // getclassifybyuserid(cb){
    //     fetch("http://114.55.26.151/json/classify.json").then(res=>{
    //         res.json.then(cb)
    //     })
    // }
    getcartbyuseridm(cb){
        fetch("../../static/gmapi/cart.json").then(res=>{
          res.json().then(cb)
              //  console.log(data+"ddd")
      })
    }
}