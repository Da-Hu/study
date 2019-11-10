import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/shops`
export default {
    getshopsbyuseridm(cb){
        fetch("../../static/gmapi/shops.json").then(res=>{
          res.json().then(cb)
              //  console.log(data+"ddd")
      })
    }
}