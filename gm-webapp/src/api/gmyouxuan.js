import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/gmhome`
export default {
    getyuxuanbyuseridm(cb){
        fetch("../../static/gmapi/youxuan.json").then(res=>{
          res.json().then(cb)
              //  console.log(data+"ddd")
      })
    }
}