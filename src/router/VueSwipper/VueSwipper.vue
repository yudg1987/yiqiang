<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for=" (item ,index ) in swipperArray" :key="index">
        <img  :src="item.image" width="100%"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list">
      <li v-for=" (item ,index ) in swipperArray" :key="index" :class="{active : index === num}"
      @click="change(index)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>


<script>
import api from '../../api'
export default {
  name: 'carrousel',
  data() {
    //接收this
    let that=this;
    return {
      swipperArray:[],
      num: 0,
      //以下都是swipper的配置
      swiperOptions: {
        loop : true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // https://www.swiper.com.cn/usage/animate/index.html
        // 轮播切换监听切换到第几个
        on:{
          slideChangeTransitionEnd: function(){
            //alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            console.log('---轮播切换了--',this.activeIndex)
            //改变Num值 num 0,1,2,3,4 有loop播放 activeIndex 6,1,2,3,4,5,6
            //that.num=this.activeIndex-1;
            //判断：第二次播放 需要特殊判断
            if(this.activeIndex == that.swipperArray.length+1){
              that.num =0;
            }else{
              that.num = this.activeIndex-1;
            }

          },
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    //切換到第三个
    //this.swiper.slideTo(3, 1000, false)
    api.getSwiperBanner().then(res=>{
      console.log('轮播图数据',res.data.result)
      let result=res.data.result
      let swipperArray=[]
      result.forEach(ele=>{
        let object={}
        object.image=ele.image;
        object.title=ele.title;
        swipperArray.push(object);
      })
      console
      this.swipperArray=swipperArray
    })
  },
  methods:{
    change(index){
      this.num=index;
      this.swiper.slideTo(index+1, 1000, false)
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  li{
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .active{
    background: blue;
  }
}
</style>
