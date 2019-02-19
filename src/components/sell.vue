<template>
  <section class="container">
    <v-refresh :on-refresh="onRefresh">
    <v-reload :on-infinite-load="onInfiniteLoad" :parent-pull-up-state="infiniteLoadData.pullUpState">
   
    <div class="card_order">
      <div slot="load-more">
      <li class="card_list" v-for="(item,index) in infiniteLoadData.pullUpList" :key="index">
        <div class="card_content" :class="infiniteLoadData.pullUpList.length - 1 != index? 'card_content_bottom':''">
         <div class="card_list_text">
           <dl>
                <router-link :to="'/detail/'+item.id+'/getarticle_detail'" class="kuan">
                  <dt><img alt="" v-for="(data,index) in item.image" :key='index' :src="data" class="images"></dt> 
                  <dd>{{item.title}}</dd>
                  <dd>{{item.content}}</dd>
                  <dd>{{item.user}}<span>{{item.time}}</span></dd>
                  <dd><i class="iconfont">&#xe634;</i>{{item.comment}}&nbsp;&nbsp;<i class="iconfont">&#xe739;</i>{{item.visits}}</dd>
                </router-link>
          </dl>
          </div>
        </div>
      </li>
      </div>
    </div>
    </v-reload>
    </v-refresh>
  </section>
</template>

<script>
import DropDownRefresh from './DropDownRefresh'
import PullUpReload from './PullUpReload'
import qs from 'qs'
export default {
  data () {
    return {
      card_list: [],
      // 上拉加载的设置
      infiniteLoadData: {
        initialShowNum: 3, // 初始显示多少条
        everyLoadingNum: 3, // 每次加载的个数
        pullUpState: 0, // 子组件的pullUpState状态
        pullUpList: [], // 上拉加载更多数据的数组
        showPullUpListLength: this.initialShowNum // 上拉加载后所展示的个数
      }
    }
  },
  
  created(){
    this.getNum(this.$route.params.name,this.classify)
  },
  watch:{
    '$route'(to,from){
      this.getNum(to.params.name,this.classify)
    }
  },
  methods: {
    //获取数据
    getNum(name,classify){
      var obj={
        key:name,
        class:classify
      }
      // console.log(obj)
      obj=qs.stringify(obj)
      this.$axios.post('GK/gettype',obj).then((res)=>{
        this.card_list=[]
        for(var i=0;i<res.data.length;i++){
          res.data[i].time=this.getdate(parseInt(res.data[i].time))
          if(res.data[i].image!=''){
            res.data[i].image=res.data[i].image.split('，')
          }
        }
        this.card_list=res.data
        this.getStartPullUpState()
        this.getPullUpDefData()
        
      })
    },
    //时间戳
     getdate(now) {
        var d = new Date(now);    //根据时间戳生成的时间对象
        var date = (d.getFullYear()) + "-" + 
                   (d.getMonth() + 1) + "-" +
                   (d.getDate());
              return date
      },

    // 获取上拉加载的初始数据
    getPullUpDefData () {
       this.infiniteLoadData.pullUpList=[]
      var self=this
      for (let i = 0; i < this.infiniteLoadData.initialShowNum; i++) {
        this.infiniteLoadData.pullUpList.push(this.card_list[i])
        
      }
    },

    getStartPullUpState () {
      if (this.card_list.length === this.infiniteLoadData.initialShowNum) {
        // 修改子组件的pullUpState状态
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 上拉一次加载更多的数据
    getPullUpMoreData () {
      this.showPullUpListLength = this.infiniteLoadData.pullUpList.length
      if (this.infiniteLoadData.pullUpList.length + this.infiniteLoadData.everyLoadingNum > this.card_list.length) {
        for (let i = 0; i < this.card_list.length - this.showPullUpListLength; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      } else {
        for (let i = 0; i < this.infiniteLoadData.everyLoadingNum; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      }
      if (this.card_list.length === this.infiniteLoadData.pullUpList.length) {
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 下拉刷新
    onRefresh (done) {
      // 如果下拉刷新和上拉加载同时使用，下拉时初始化上拉的数据
      this.getStartPullUpState()
      this.getPullUpDefData()
      done() // call done
      console.log(this.card_list)
    },

    // 上拉加载
    onInfiniteLoad (done) {
      if (this.infiniteLoadData.pullUpState === 0) {
        this.getPullUpMoreData()
      }
      done()
      
    }
  },
  components: {
    'v-refresh': DropDownRefresh,
    'v-reload': PullUpReload
  },
  props:{
    classify:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.container {
  width: 100%;
  background-color: #f7f7f7;
}
.card_list_text{
  margin-top: 0.5rem;
  background: #fff
}
dl{
  width: 90%;
  padding:0 5%;
  padding-top: .5rem;
  padding-bottom: .5rem;
  border-bottom: 0.5rem solid rgb(228, 225, 225);
  dt{
    margin: 1.5% 0;
    width: 100%;
    white-space: nowrap;
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