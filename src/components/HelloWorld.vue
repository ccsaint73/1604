<template>
  <div class="hello">
    <router-view></router-view>
    <div class="foot">
      <dl>
        <router-link to='/deal' active-class='active_change' >
          <dt><i class="iconfont">&#xe67f;</i></dt>
          <dd>交易</dd>
        </router-link>
      </dl>
      <dl>
        <router-link to='/consult' active-class='active_change'>
          <dt><i class="iconfont">&#xe609;</i></dt>
          <dd>资讯</dd>
        </router-link>
      </dl>
      <dl>
        <router-link to='/news' active-class='active_change'>
          <dt><i class="iconfont">&#xe6a5;</i></dt>
          <dd>消息</dd>
        </router-link>
      </dl>
      <dl>
        <router-link to='/treasure' active-class='active_change'>
          <dt><i class="iconfont">&#xe61f;</i></dt>
          <dd>鉴宝</dd>
        </router-link>
      </dl>
      <dl>
        <router-link to='/self' active-class='active_change'>
          <dt><i class="iconfont">&#xe621;</i></dt>
          <dd>我的</dd>
        </router-link>
      </dl>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
.foot{
  width: 100%;
  height: 3rem;
  background: #222;
  position: fixed;
  bottom: 0;
  margin-top: 3.5rem;
  z-index: 999;
  dl{
    float: left;
    width: 20%;
    text-align: center;
    dd{
      font-size: 0.7rem;
      line-height: 1.2rem
    }
    dt{
      padding-top: 0.2rem
    }
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

.active_change dt,.active_change dd{
    color: rgb(236, 12, 12)
}
</style>
