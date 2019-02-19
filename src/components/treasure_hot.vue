<template>
  <div class="hot">
    <dl v-for="(data,index) in data" :key='index'>
      <router-link :to="'/detail/'+data.id+'/getarticle_detail'">
      <dt><img alt="" v-for="(item,index) in data.image" :key='index' :src="item" class="images"></dt>
      <dd>{{data.title}}</dd>
      <dd>{{data.content}}</dd>
      <dd>{{data.user}}<span>{{data.time}}</span></dd>
      <dd><i class="iconfont">&#xe634;</i>{{data.comment}}&nbsp;&nbsp;<i class="iconfont">&#xe739;</i>{{data.visits}}</dd>

      </router-link>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:[]
    }
  },
   created(){
      this.$axios.get('GK/gethot').then((res)=>{
        for(var i=0;i<res.data.length;i++){
                if(res.data[i].image!=''){
                  res.data[i].image=res.data[i].image.split('，')
                }
              }
          this.data=res.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hot dl{
  width: 90%;
  padding:0 5%;
  border-bottom: 0.5rem solid rgb(228, 225, 225);
  dt{
    height: 57%;
    margin: 1.5% 0;
    width: 100%;
    white-space:nowrap; 
    overflow: hidden;
  }
  dd{
    font-size: 0.8rem;
    color: rgb(158, 158, 158);
    margin-top: 2%;
  }
  :nth-child(2){
      color: #000;
      font-size: 1.2rem;
    }
  :nth-child(4){
      font-size: 1.1rem;
      span{
        font-size: 0.8rem;
        padding-left:1rem; 
      }
    }
  :nth-child(5){
    i{
        color: rgb(158, 158, 158);
        font-size: 1.2rem;
      }
  } 
}
.images{
  width: 55%;
  height: 6rem;
}
.images:nth-child(2){
    width: 40%;
    margin-left: 3%;
  }
</style>
