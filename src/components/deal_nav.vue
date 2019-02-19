<template>
    <div class="deal_classify">
      <ul>
        <li><router-link to='/deal/newest' active-class='deal_navs'>最新</router-link></li>
        <li><router-link to='/deal/rmb' active-class='deal_navs'>纪念币</router-link></li>
        <li><router-link to='/deal/porcelain' active-class='deal_navs'>瓷器</router-link></li>
        <li><router-link to='/deal/stamp' active-class='deal_navs'>邮票</router-link></li>
        <li><router-link to='/deal/draw' active-class='deal_navs'>古画</router-link></li>
        <li><router-link to='/deal/coin' active-class='deal_navs'>古币</router-link></li>
        <li><router-link to='/deal/stone' active-class='deal_navs'>古玩</router-link></li>
      </ul>
      <i class="iconfont">&#xe64d;</i>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        // classify:[]
    }
  },
  props:{
    classify: Array,
    required: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.deal_classify{
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.125rem;
  background: #222;
  margin-bottom: 0.3rem;
  z-index: 999;
  ul{
  white-space: nowrap;
  overflow-x: scroll;
  width: 90%;
  float: left;
   -webkit-tap-highlight-color:rgba(0,0,0,0);
    li{
      display: inline-block;
      line-height: 3.125rem;
      padding: 0 0.8rem;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      a{
      display: inline-block;
      color: #c2c2c2;
      text-decoration: none;
      width:100%;
      height: 100%;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      }
    }
  }
  i{
    float: right;
    color: #c2c2c2;
    line-height: 3.125rem;
    width: 10%;
    text-align: center
  }
}
.deal_classify .deal_navs{
  color: rgb(236, 12, 12);
  border-bottom: 1px solid rgb(236, 12, 12);
}
::-webkit-scrollbar{width:0px;height:0px;} 
</style>
