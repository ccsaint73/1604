<template>
  <div class="sliders">
      <div class="navs" :id="fixed == true ? 'isFixed' :''">
        <ul id='lists'>
          <li :class="[index==0?'now':'']" @click="change(0)">出售</li>
          <li :class="[index==1?'now':'']" @click="change(1)">求购</li>
          <li :class="[index==2?'now':'']" @click="change(2)">成交</li>
        </ul>
      </div>
      
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Sell classify='sell'></Sell>
              </div>
              <div class="swiper-slide">
                <Sell classify='buy'></Sell>
              </div>
              <div class="swiper-slide">
                <Sell classify='deal'></Sell>
              </div>
          </div>
      </div> 
      

  </div>
</template>

<script>
import Sell from '../components/sell'
import '../../node_modules/swiper/dist/css/swiper.css'
import '../../node_modules/swiper/dist/js/swiper.js'
import Swiper from 'swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:0,
      swiperss:{},
      list:[],
      show:false,
      fixed:false
    }
  },
  created(){
      this.$nextTick(function(){
        this.swipers()
      })
  },
  methods:{
    change(index){
      this.swiperss.slideTo(index,1000)

    },

    swipers(){
      var self = this;
				
				this.swiperss = new Swiper ('.swiper-container', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: false, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
          },
          on: {
            slideChangeTransitionEnd: function(){
              self.index=this.activeIndex
              //回到顶部
              var timer=setInterval(function(){
                  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                  var ispeed=Math.floor(-scrollTop/6);
                  // console.log(ispeed)
                  if(scrollTop==0){
                      clearInterval(timer);
                  }
                  document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
              },30)
              //刷新页面
              var nums=this.activeIndex
              // location.reload()
              // console.log(nums)
            },
          },
			  }) 
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var nav=document.getElementsByClassName('navs')[0].offsetTop-48
      // console.log(scrollTop+'---------'+nav)
      if(scrollTop>nav){
        this.fixed=true
      }else{
        this.fixed=false
      }
    }
  },
  components:{
    Sell:Sell
  },
  beforeRouteEnter (to, from, next) {
    console.log(next)
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.sliders ul{
  overflow: auto;
  width: 50%;
  margin: 0 auto;
  height: 2.5rem;
  background: #fff;
  z-index: 999;
  li{
    width: 33.33%;
    float: left;
    text-align: center;
    line-height: 2.4rem;
    font-size: 0.7rem;
    box-sizing: border-box;
    font-size: 1rem;
  }
}
  .now{
    border-bottom: 1px solid rgb(26, 129, 247);
    color: rgb(26, 129, 247);
  }
  .swiper-container{
    // height: 13rem;
    box-sizing: border-box;
    padding-bottom: 3rem;
  }
  .navs{
    width: 100%;
    height: 2.5rem;
    margin-top: 1rem;
    background: #fff;
    transform: all 0.5s
  }
  #isFixed{
    position: fixed;
    margin-top: 0rem;
    top: 48px;
    transform: all 0.5s;
    z-index: 999
  }
</style>
