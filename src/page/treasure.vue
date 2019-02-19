<template>
 <div>
  <el-carousel :interval="4000" type="card" height="8rem">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3><img src="../assets/星系运转.gif" alt=""></h3>
      </el-carousel-item>
    </el-carousel>

    <ul class="nav">
      <li><router-link to="/treasure/new" active-class="active">最新</router-link></li>
      <li><router-link to="/treasure/hot" active-class="active">最热</router-link></li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
 export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-carousel{
  padding-top: 2rem;
  background: url(../assets/jianbao.jpg) no-repeat;
  background-position: -15px 0px
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
    height:100%;
    
  }
  img{
    height: 100%;
    width: 100%;
  }
  .el-carousel__item{
     width: 6rem;
     margin-left: 3rem;
    border-radius:0.5rem; 
  }
  .el-carousel__arrow{
    display: none;
  }
  .el-carousel__indicator{
    width: 0.5rem;
    height: 0.5rem;
  }
  .el-carousel__button{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .is-active .el-carousel__button{
    background: rgb(47, 170, 241);
  }
  .nav{
    width: 30%;
    height: 2rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .nav li a{
    display: inline-block;
    text-decoration: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: #666;
  }
  .nav li{
    
    height: 100%;
    float: left;
    width: 50%;
    text-align: center;
    line-height: 2rem;
    
  }
    .nav li .active{
      border-bottom:0.1rem solid rgb(243, 103, 9); 
    }
    .content{
      width: 100%;
    }

</style>
