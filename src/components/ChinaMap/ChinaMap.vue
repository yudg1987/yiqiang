<template>

  <div>
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <van-tabs v-model="active" animated @change='change'>
      <van-tab title="现存确诊">
        <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
//import echarts from 'echarts'
import api from '../../api'
export default {
  name: 'ChinaMap',
  data() {
    return {
      active: 0
    };
  },
  mounted () {
    console.log('this',this)
    //this.$myChart.line('main');
    //this.$myChart.chinaMap('main')
      this.getChinaData();
    /*// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);*/
  },
  methods:{
    getChinaData(){
      //获取疫情数据-----------------------------------------------
      api.getChinaData().then((res) => {
        console.log("-------", res.data);
        //获取省份数据
        let citys = res.data.retdata;
        if(!citys){
          this.$myChart.chinaMap("nowMain", []);
          return;
        }
        let arr = []; //累计
        let nowArr = []; //现存
        for (let i = 0; i < citys.length; i++) {
          let obj = {};
          obj.name = citys[i].xArea;
          obj.value = citys[i].confirm; //累计确诊人数   curConfirm现在确诊人数
          let now = {};
          now.name = citys[i].xArea;
          now.value = citys[i].curConfirm;
          arr.push(obj);
          nowArr.push(now);
        }
        this.arr = arr;
        console.log("省份的数据", arr);
        //vue里面 等待延迟加载
        this.$nextTick(()=>{
          //显示累计地图
          // this.$myChart.chinaMap("main", arr);
          //显示现存地图
          this.$myChart.chinaMap("nowMain", nowArr);
        })
      });
      //显示地图  data=[{ name: '内蒙古', value: 200 },{name:'',value:''}]
      // this.$myChart.chinaMap('main',[{ name: '内蒙古', value: 200 }])
    },

    change(title){
      console.log("-----", title);
      if (title === '现存确诊') {
        this.$nextTick(() => {
          this.$myChart.chinaMap("nowMain", this.arr);
        });
      }else{
        this.$nextTick(() => {
          this.$myChart.chinaMap("main", this.arr);
        });
      }
    }

  }
}
</script>

<style lang="less" >

</style>
