<template>
  <div class="deal">
    <h3>资讯</h3>
    <div >

      <ul class="content" v-for="(data,index) in data" :key="index">
        <router-link :to="'/detail/'+data.id+'/getconsult_detail'">
        <li>{{data.title}}</li>
        <li>{{data.content}}</li>
        <li> <img src="../assets/user.jpg" alt=""> {{data.user}}</li>
         </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        data:[]
    }
  },
  created() {
    this.$axios.get('GK/getconsult').then((res)=>{
      this.data=res.data
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
h3{
  height: 3.125rem;
  background: #000;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3.12rem;
}

.content{
  clear: both;
  height: 8rem;
  border-bottom: 0.3rem solid rgb(228, 228, 228);
  padding: 0.5rem;
  :nth-child(1){
    font-size: 1.2rem;
    font-weight: bold;
  }
  :nth-child(2){
    font-size: 0.9rem;
    height: 3.6rem;
    overflow: hidden;
    color: rgb(112, 110, 110);
  }
  :nth-child(3){
    margin-top: 0.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.8rem;
    img{
      float: left;
      width: 2.5rem;
      padding: 0 0.5rem;
      border-radius: 50%;
    }
  }
}
</style>
