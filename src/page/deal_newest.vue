<template>
  <div class="deal_newest">
    <div class="search"><i class="iconfont">&#xe60c;</i> <span>搜索</span></div>
    <!-- 轮播 -->
    <el-carousel indicator-position="outside" height="100px">
      <el-carousel-item >
        <img src="../assets/timg.jpg" alt="" class='imgs' >
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/xiamu2.jpg" alt="" class='imgs'>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/xiamu3.jpeg" alt="" class='imgs'>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/xiamu2.jpg" alt="" class='imgs'>
      </el-carousel-item>
    </el-carousel>

    <DealInner></DealInner>
  </div>
</template>

<script>
import DealInner from '../components/deal_inner'

export default {
  name: 'HelloWorld',
  data () {
    return {
        data:[]
    }
  },
  created(){
    
  },
  components:{
    DealInner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-carousel__indicators{
  display: none
}
.el-carousel__item .imgs{
   width: 92%;
   height: 100%;
   margin-left: 4%;
   border-radius: 0.3rem
  }
  .search{
    width: 90%;
    height: 2rem;
    border:1px solid #ccc;
    border-radius:0.3rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: #aaa;
    box-sizing: border-box;
    padding-left: 0.3rem;
      line-height: 2rem;
    i{
      display: inline-block;
    }
    span{
      float: right;
      margin-right: 16.5rem
    }
  }
  .deal_newest{
    padding-top: 4rem;
  }
</style>
