// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/js/phone'
// 引入css初始化
import './assets/css/base.css'
//引入css初始化
import './assets/css/base.css'
//引入vant库
import    './plugin/vant'
//Vue.use(vant)

//引入echarts图标插件
import  echarts from './plugin/echarts'
Vue.use(echarts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
