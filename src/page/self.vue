<template>
  <div class="deal">
    <div class="head">
        
        <div class="user">
            <img :src="data.user_image" alt="" @click="change()">
            <ul>
              <li>{{data.user_name}}</li>
              <li>ID:{{data.user_id}}</li>
            </ul>
        </div>
    </div>
    <div class="function" v-for="(data,index) in deal" :key="index">
        <h2>我的{{data.deal}}单<p>查看所有{{data.deal}}单></p></h2>
        <dl  v-for="(item,index) in data.deal_detail" :key="index">
          <dt><img :src="item.img" alt=""></dt>
          <dd>{{item.name}}</dd>
        </dl>
    </div>
    <div class="leg">
      <ul>
        <li><i class="iconfont">&#xe636;</i>我的订单<p><i class="iconfont">&#xe65e;</i></p></li>
        <li><i class="iconfont">&#xe60b;</i>我的评论<p><i class="iconfont">&#xe65e;</i></p></li>
        <li><i class="iconfont">&#xe75f;</i>物流查询<p><i class="iconfont">&#xe65e;</i></p></li>
      </ul>
    <span @click="out()">退出当前账号</span>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
        data:[],
        deal:[],
    }
  },
  created() {
    var obj={
      key:localStorage.getItem('userid')
    }
    obj=qs.stringify(obj)
    this.$axios.post('GK/getcollect_user',obj).then((res)=>{
      this.data=res.data
      localStorage.setItem('name',res.data.user_name)
    })

     this.$axios.get('GK/getuser_deal').then((res)=>{
        for(var i=0;i<res.data.length;i++){
          res.data[i].deal_detail=JSON.parse(res.data[i].deal_detail)
        }
      this.deal=res.data
    })
  },
  methods:{
    out(){
      console.log(1)
      localStorage.removeItem('userid')
      this.$router.push('/deal')
    },
    change(){
      this.$router.push('/user_img')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.head{
height: 10rem;
border-bottom: 0.1rem solid #ccc;
}
.user{
  height: 6rem;
  background-image: url(../assets/bac.png);
  background-size:100% 100%; 
  position: relative;
  img{
    position: absolute;
    bottom: -2rem;
    width: 4rem;
    height: 4rem;
    border-radius:50%; 
    float: left;
    margin-left: 1rem;
    background-image: url(../assets/user.jpg);
    background-size: 100% 100%;
  }
  ul{
    position: absolute;
    bottom: -3rem;
    margin-left: 5.5rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #000;
    li:nth-child(1){
      font-size: 1.1rem;
    }
    li:nth-child(2){
      margin-top: 0.1rem
    }
  }
}
.nav li{
  float: left;
  height: 2rem;
  margin: 1rem 0;
  line-height: 2rem;
  width: 22%;
  text-align: center;
}
.nav :nth-child(4){
width: 30%;
border-radius:0.5rem;
background: #89a7fa;
}
.function{
  height: 8rem;
  border-bottom:0.3rem solid rgb(228, 225, 225); 
}
.function h2{
  padding: 0 0.5rem;
  height: 30%;
  font-size: 1rem;
  line-height: 2.2rem;
  border-bottom:0.01rem solid rgb(223, 221, 221); 
}
.function h2 p{
  float: right;
}
.function dl{
  padding: 1rem 0.5rem;
  float: left;
  width: 20.5%;
  height: 45%;
  text-align: center;
}
.function dl dt{
  width: 100%;
  height: 70%;
}
.function dl dt img{
  padding: 0.5rem;
  width: 50%;
  height: 75%;
}
.function dl dd{
  width: 100%;
  height: 30%;
}
.leg{
  height: 9rem;
  li{
    padding: 0 1rem;
    height: 3rem;
    line-height: 3rem;
    border-bottom:0.01rem solid #ccc; 
    p{
      float: right;
      i{
          display: block;
        }
    }

  }
  span{
    display: block;
    width: 50%;
    height: 2.5rem;
    background: rgb(231, 6, 6);
    margin: 5px auto;
    text-align: center;
    line-height: 2.5rem;
    color: #fff;
    border-radius: 10px
  }
}
</style>
