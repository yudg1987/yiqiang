<template>
  <div>
    <div class="title">{{name}}疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="provinceNowMain" style="width: 7.5rem; height: 7rem"></div>


  </div>
</template>

<script>
import api from '../../api'
export default {
  name: 'ProvinceInfo',
  props:['name'],
  data(){
    return {
      arr:[]
    }
  },
  mounted () {
    api.getProvince(this.name).then(res =>{
      console.log('---城市数据--',res.data);
      let result=res.data.retdata.subList;
      let arr =[];
      result.forEach(ele => {
        let obj = {};
        // obj.name = ele.city + "市";
        //名称处理-- 和地图数据对应起来
        //处理当前的ele.city的名称的最后一个标识：盟 州 区 旗  否则补字段+'市'
        if ( ele.city.endsWith("区") ||ele.city.endsWith("州") ||ele.city.endsWith("盟")||ele.city.endsWith("旗")) {
          obj.name = ele.city;
        } else {
          obj.name = ele.city + "市";
        }
        obj.value = ele.confirm; //累计确诊
        arr.push(obj);
      });
      this.arr=arr;
      this.$nextTick(() => {
        this.$myChart.cityMap('provinceNowMain',this.name,this.arr)
      })

    })

  }
}
</script>

<style lang="less" >

</style>
