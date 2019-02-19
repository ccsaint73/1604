<template>
  <div class="deal">
    <header><span @click="talk()">人工客服</span><span>消息</span></header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        
    }
  },
  methods:{
    talk(){
      this.$router.push('/kefu')
    }
  },
  created(){
    
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
header{
  width: 100%;
  height: 3.125rem;
  text-align: center;
  background: #222;
  color: #fff;
  line-height: 3.125rem;
  font-size: 1.5rem;
  span{
    font-size: 0.5rem;
    float: right;
    margin-right: 1rem;
    &:nth-child(2){
      font-size: 1.2rem;
      margin-right: 6.5rem;
    }
  }
}
</style>
