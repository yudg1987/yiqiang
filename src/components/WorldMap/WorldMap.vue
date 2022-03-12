<template>
  <div>
    <div class="title">世界疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <van-tabs v-model="active" animated @change='change'>
      <van-tab title="现存确诊">
        <div id="worldNowMain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="worldMain" style="width: 7.5rem; height: 7rem"></div>
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
    this.getWorldData()
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
    getWorldData(){
      //获取疫情数据-----------------------------------------------
      api.getWorldData().then((res) => {
        console.log("---世界的数据----", res.data.retdata.globalList);
        //获取世界数据
        let globalList = res.data.retdata.globalList;
        if(!globalList){
          return;
        }
        let arr = []; //累计
        let nowArr = []; //现存
        for(let k=0;k<globalList.length;k++){
          let subList=globalList[k].subList;
          for (let i = 0; i < subList.length; i++) {
            let obj = {};
            obj.name = subList[i].country;
            obj.value = subList[i].confirm; //累计确诊人数   curConfirm现在确诊人数
            let now = {};
            now.name = subList[i].country;
            now.value = subList[i].curConfirm;
            arr.push(obj);
            nowArr.push(now);
          }
        }

        this.arr = arr;
        console.log("处理好的世界的数据", arr);
        //vue里面 等待延迟加载
        this.$nextTick(()=>{
          //显示累计地图
          // this.$myChart.chinaMap("main", arr);
          //显示现存地图
          this.$myChart.worldMap("worldNowMain", nowArr);
        })
      });
      //显示地图  data=[{ name: '内蒙古', value: 200 },{name:'',value:''}]
      // this.$myChart.chinaMap('main',[{ name: '内蒙古', value: 200 }])
    },

    change(title){
      console.log("--title---", title);
      //alert(title)
      if (title === 0) {
        this.$nextTick(() => {
          this.$myChart.worldMap("worldNowMain", this.arr);
        });
      }else{
        this.$nextTick(() => {
          this.$myChart.worldMap("worldMain", this.arr);
        });
      }
    }

  }
}
</script>

<style lang="less" >
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px solid #eee;
}
.title::before {
  content: "";
  border-left: 0.1rem solid rgb(9, 60, 202);
  font-size: 0.26rem;
  margin-right: 0.1rem;
}
#main,#nowMain{
  background: #f5f5f5;
}
</style>
