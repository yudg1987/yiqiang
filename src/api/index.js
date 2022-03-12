/**
 * 所有接口请求方法
 * @type {{}}
 */
import axios  from 'axios'
import  base from './base'
import md5 from 'md5-js/md5'
const  api={
  getCovInfo(){
      return axios.get(base.host+base.covInfo)
   },

  /**
   * 获取国内疫情
   */
  getChinaData() {
    return axios.get(base.baseUrl + base.chinaData);
  },
  //国内疫情接口
  getChina(){
    return axios.get('http://localhost:8888/api/94/219')
  },
  /**
   * 世界疫情
   */
  getWorldData() {
    return axios.get(base.baseUrl + base.worldData)
  },
  /**
   * 获取城市接口
   * 参数：format=json&appid=6938&city_name=城市名称&sign=md5加密字符串
   */
  getProvince(city_name) {
    //md5加密规则：sign = MD5( appid1formatjsontime1545829466密钥) 查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
    //步骤：1. 安装 npm i md5-js -S  2. 引入md5模块  3. 使用加密处理
    let sign = md5('appid14757city_name' + city_name + 'formatjson79a475459f1e1c910fabbb8bf21a207d');
    let canshu = 'format=json&appid=14757&city_name=' + city_name + '&sign=' + sign;
    console.log('---SIGN--',sign)
    return axios.get(base.baseUrl + base.city + '?' + canshu);
  },
  /**
   * 全球数据获取
   */
  getAllData() {
    return axios.get(base.baseUrl + base.allData)
  },
  /***
   * 轮播数据接口
   */
  getSwiperBanner() {
    return axios.get(base.swiperBanner)
  },
  /**
   * 出行城市
   */
  getTravel() {
    return axios.get(base.travel)
  },
  /**
   * 城市的出行政策疫情
   * &from=10191&to=10349
   * axios.get('url?xx=xx&xx=xx')
   * axios.get('url',{
   *      params:{
   *          参数：xx,
   *          ...
   *      }
   * })
   */
  getTravelQuery(params) {//params={from:'',to:''}
    return axios.get(base.travelQuery,{
      params
    })
  },
  /**
   * 城市选择
   */
  getCity(){
    return axios.get(base.getcity)
  }
}
export default api;
