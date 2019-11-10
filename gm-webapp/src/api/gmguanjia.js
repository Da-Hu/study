import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/gmguanjia`
export default {
    getguanjiabyuseridm(cb){
        fetch("../../static/gmapi/gmguania.json").then(res=>{
          res.json().then(cb)
              //  console.log(data+"ddd")
      })
    }
}