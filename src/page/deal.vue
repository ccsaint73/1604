<template>
  <div class="deal">
    <DealNav :classify='classify'></DealNav>
    <transition>
      <router-view class="childview"></router-view>
    </transition>
    
  </div>
</template>

<script>
import DealNav from '../components/deal_nav'
export default {
  name: 'HelloWorld',
  data () {
    return {
        classify:[],
    }
  },
  created(){
    //获取交易分类
    this.$axios.get('H/subscription').then((res)=>{
      // console.log(res.data)
      this.classify=res.data
    })
  },
  components:{
    DealNav:DealNav
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
