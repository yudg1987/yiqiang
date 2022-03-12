/**
 * 公共的请求存放
 */
const base = {
  //天行数据  查询疫情病毒信息
  host: 'http://api.tianapi.com',
  covInfo: '/ncov/index?key=346d26d4c70d0c5500cbddc007a458d0',
  baseUrl: 'https://yupn.api.storeapi.net',//挖数据---国内疫情
  chinaData: '/api/94/219?format=json&appid=14757&sign=1143076bd612d608ab39cb17e8848e61',//国内疫情接口
  worldData: '/api/94/222?format=json&appid=14757&sign=1143076bd612d608ab39cb17e8848e61',//世界疫情数据
  city: '/api/94/221',//城市接口
  //format=json&appid=6938&city_name=城市名称&sign=md5加密字符串
  allData: '/api/94/222?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7',//全球接口
  swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
  // travel:'http://apis.juhe.cn/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef',
  travel: '/api/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef',
  travelQuery: '/api/springTravel/query?key=171e165a7d991c5f6ecd5194c54778ef',//城市疫情&from=10191&to=10349
  //360接口地址：https://bang.360.cn/aj/getcitycode
  //getcity: '/foo/aj/getcitycode',
}
export default base
