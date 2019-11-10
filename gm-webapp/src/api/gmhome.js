import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/gmhome`
export default {
    gethomebyuseridm(cb){
        fetch("../../static/gmapi/home.json").then(res=>{
          res.json().then(cb)
              //  console.log(data+"ddd")
      })
    }
}