<template>
  <div id="home" class="home">
    <!-- 1. 疫情图片 -->
    <img src="../assets/images/logo.png" width="100%" alt="" />
    <!--2.疫情信息-->
    <Covinfo :covDesc="covDesc" :news="news"></Covinfo>
    <!-- 3. 疫情-小导航 -->
    <div class="list">
      <div @click="$router.push('/area')">
<!--         <router-link to="/area">-->
          <img src="../assets/images/1.jpg" alt="" />
          <div>风险地区</div>
<!--          </router-link>-->
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="../assets/images/2.png" alt="" />
          <div>核算检测</div>
        </router-link>
      </div>
      <div @click="$router.push('/fangyi')">
        <img src="../assets/images/3.png" alt="" />
        <div>防疫物资</div>
      </div>
      <div>
        <img src="../assets/images/4.png" alt="" />
        <div>出行政策</div>
      </div>
    </div>
    <!-- 4. 数据统计 -->
    <CovNumber :covData="covData" />
    <!--中国地图-->
    <china-map></china-map>
    <!--世界地图-->
    <world-map></world-map>
  </div>

</template>

<script>
import  Covinfo from '../components/Covinfo/Covinfo'
import CovNumber from '../components/Covinfo/CovNumber'
import api from '../api/index'
import Area from '../components/Area/Area'
import ChinaMap from '../components/ChinaMap/ChinaMap'
import WorldMap from '../components/WorldMap/WorldMap'
export default {
  name: 'App',
  components: {Covinfo,CovNumber,Area,ChinaMap,WorldMap},
  data(){
    return  {
      covDesc:{},
      news:[],
      covData: {}//全国数据统计
    }
  },
  created () {
    //请求病毒接口-----------------
    api.getCovInfo().then((res) => {
      console.log('疫情数据',res.data.newslist[0]);
      let desc =res.data.newslist[0].desc
      this.covDesc ={
        note1:desc.note1,
        note2:desc.note2,
        note3:desc.note3,
        remark1:desc.remark1,
        remark2:desc.remark2,
        remark3:desc.remark3
      }
      console.log('处理好的疫情数据',this.covDesc);
      //2 疫情热点数据
      this.news =res.data.newslist[0].news;

      //3. 全国疫情的数据统计信息---
      this.covData = {
        currentConfirmedCount: desc.currentConfirmedCount,
        confirmedCount: desc.confirmedCount,
        suspectedCount: desc.suspectedCount,
        curedCount: desc.curedCount,
        deadCount: desc.deadCount,
        seriousCount: desc.seriousCount,
        suspectedIncr: desc.suspectedIncr,
        currentConfirmedIncr: desc.currentConfirmedIncr,
        confirmedIncr: desc.confirmedIncr,
        curedIncr: desc.curedIncr,
        deadIncr: desc.deadIncr,
        seriousIncr: desc.seriousIncr,
        modifyTime: desc.modifyTime,
      };

    });
  }
}
</script>

<style lang="less">
.logo {
  position: relative;
  .select {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
}
.list {
  display: flex;
  padding-bottom: 0.2rem;
  > div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>

