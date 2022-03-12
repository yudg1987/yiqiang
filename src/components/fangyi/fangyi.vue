<template>
<div class="wuzi">
  <img src="../../assets/images/wuzi.png" width="100%">
  <div class="wrapper">
    <!-- vant库-tabs标签 -->
    <van-tabs v-model="active" animated>
      <van-tab v-for="(item,index) in arr" :title="item.title">
        <img :src="item.img" width="100%">
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
import jiujing from '../../assets/images/jiujing.png'
import kouzhao from  '../../assets/images/kouzhao.png'
export default {
  name: 'fangyi',
  data() {
    return {
      active: 0,
      arr:[
        {img:jiujing,title:'酒精'},{img:kouzhao,title:'口罩'}
      ]
    };
  }
}
</script>

<style lang="less" >
.wuzi {
  background: #3343ff;
}
.wrapper {
  background: #3343ff;
  padding: 0.2rem;
}
</style>
