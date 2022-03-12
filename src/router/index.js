import Vue from 'vue'
import Router from 'vue-router'
import HeSuan from '../components/Hesuan/Hesuan'
import Home from './Home'
import Area from '../components/Area/Area'
import fangyi from '../components/fangyi/fangyi'

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
       ]
})
