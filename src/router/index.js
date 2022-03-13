import Vue from 'vue'
import Router from 'vue-router'
import HeSuan from '../components/Hesuan/Hesuan'
import Home from './Home'
import Area from '../components/Area/Area'
import fangyi from '../components/fangyi/fangyi'
import ProvinceInfo from '../components/ProvinceInfo/ProvinceInfo'
import Travel from '../components/Travel/Travel'
import SelectCity from '../components/SelectCity/SelectCity'

Vue.use(Router)

export default new Router({
       routes:[
         {
           path: '/',
           component :Home
         },
         {
           path: '/hesuan',
           component :HeSuan
         },
         {
           path: '/area',
           component :Area
         },
         {
           path: '/fangyi',
           component :fangyi
         },
         {
           path: '/province/:name',
           component :ProvinceInfo,
           props: true
         },
         {
           path: '/travel',
           component :Travel,
           props: true
         },
         {
           path:'/selectCity',
           name:'SelectCity',
           component:SelectCity
         }
       ]
})
