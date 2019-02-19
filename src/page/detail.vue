<template>
  <div class="detail">
    
    <h2><i @click="back()" class="iconfont">&#xe62f;</i><span><i class="iconfont">&#xe639;</i></span> </h2>

    <div class="content">
      <h3>{{this.data.title}}</h3>
      <p class="user"><img src="../assets/星系运转.gif" alt=""> <span>{{this.data.user}}</span></p>
      <p class="describe">{{this.data.content}}</p>
      <ul>
        <li v-for="(data,index) in data.image" :key="index"><img :src="data" alt=""></li>
      </ul>


    </div>
    <div class="comment">
      <p>评论</p>
      <dl v-for="(data,index) in 1" :key="index">
        <dt><img src="../assets/星系运转.gif" alt=""></dt>
        <dd>评论内容</dd>
      </dl>
    </div>

    
      
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
        data:[]
    }
  },
  methods:{
      back(){
				this.$router.go(-1)
			}
  },
  created() {
    var key=this.$route.params.key
    var url=this.$route.params.url
    var obj={
      key:key
    }
    obj=qs.stringify(obj)
    this.$axios.post('GK/'+url,obj).then((res)=>{
          if(url=='getarticle_detail'){
         if(res.data.image!=''){
            res.data.image=res.data.image.split('，')
          }
      }
     this.data=res.data
      console.log(this.data)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.detail{
  width: 100%;
}
.detail h2{
  padding: 0 0.5rem;
  width: 95%;
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom:0.01rem solid #ccc;
  i{
    font-size: 2rem;
  }
  span{
  float: right;
}
}
.content{
  clear: both;
  width: 95%;
  margin: 0.5rem;
  h3{
  margin: 0.5rem;
}
ul{
  li{
  img{
    width: 95%;
    height: 10rem;
    padding: 2.5%
  }
  }
}
}
.user{
  height: 3rem;
  line-height: 3rem;
  img{
    margin: 0.2rem;
    width: 2.5rem;
    border-radius: 50%;
    float: left;
  }
  span{
    margin-left: 0.5rem;
  }
}
.describe{
  width: 100%;
}
.comment{
  width: 100%;
  border-top:0.01rem solid #ccc;
  p{
    height: 2rem;
    line-height: 2rem;
    color: rgb(138, 137, 137);
  }
  dl{
    width: 95%;
    margin: 0.5rem;
    border-bottom: 0.01rem solid #ccc;
    dt{
      width: 100%;
      img{
        width: 2rem;
        border-radius: 50%;
      }
    }
    dd{
      font-size: 0.8rem;
        width: 90%;
        height: 2rem;
        line-height: 2rem;
        margin-left: 2rem;
    }
  }
}
</style>
