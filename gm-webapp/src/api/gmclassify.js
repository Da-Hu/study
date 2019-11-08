import {BASEURL} from "../commons/Config"
const CALSSIFYURL = `${BASEURL}/api/gmclassify`
export default {
    // getclassifybyuserid(cb){
    //     fetch("http://114.55.26.151/json/classify.json").then(res=>{
    //         res.json.then(cb)
    //     })
    // }
    getclassifybyuserid(cb){
        fetch("../gmapi/classify.json").then(res=>{
          res.json().then(cb)
            //   console.log(data)
      })
    }
}