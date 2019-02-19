<template>
  <div class="deal">
    <header><span @click="back()">返回</span><span>人工客服</span></header>
    <div class="message">
        <div v-for="(data,index) in list" :key='index'>
            <div v-if="data.id==id">
                <div class="self"><p>{{data.text}}</p></div>
            </div>
            <div v-else>
                <div class="yours"><p>{{data.text}}</p></div>
            </div>
        </div>
        
        
    </div>
    <div class="font">
        <input type="text" @change="change()">
        <button @click="send()">发送</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket=io('http://47.95.8.3:8000')
export default {
  name: 'HelloWorld',
  data () {
    return {
        ok:false,
        list:[],
        msg:'',
        id:''
    }
  },
  created(){
      this.id=localStorage['userid']
      socket.on('all',(data)=>{
          console.log(data)
          this.list.push(data)
      })
  },
  methods:{
      
      back(){
          this.$router.go(-1)
      },
      send(){
          var str='';
          var inner=document.getElementsByTagName('input')[0].value
          var message=document.getElementsByClassName('message')[0]
          socket.emit('msg',{text:this.msg,id:localStorage['userid']})
          this.msg=''
          document.getElementsByTagName('input')[0].value=''
        //   console.log(this.list)
      },
      change(){
          var inner=document.getElementsByTagName('input')[0].value
          this.msg=inner          
      }
  },
  destoryed(){
      console.log(23)
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
.deal,#app,html,body{
    height: 100%;
}
.deal{
    display: flex;
    flex-direction: column;
}
.deal{
    header{
        width: 100%;
        height: 3.125rem;
        text-align: center;
        background: #222;
        color: #fff;
        line-height: 3.125rem;
        font-size: 1.5rem;
        span{
            font-size: 0.8rem;
            float: left;
            margin-left: 1rem;
            &:nth-child(2){
            font-size: 1.2rem;
            margin-left:7.3rem;
            }
        }
    }
    .show{
        width: 100%;
        height: 6.25rem;
    }
    .font{
        width: 100%;
        height:3rem;
        background: rgb(233, 229, 229);
        position: fixed;
        bottom: 0;
        input{
            width:75%;
            height: 70%;
            margin: 1.5% 0 0 5%;
            outline: none;
        }
        button{
            width: 15%;
            height: 70%;
            border: none;
            border-radius: 4px;
            outline: none;
            background: #aaaa
        }
    }
    .message{
        width: 100%;
        flex: 1;
        .self{
            width: 100%;
            overflow: auto;
            p{
                max-width: 80%;
                float: right;
                background: rgb(24, 209, 24);
                margin: 0.5rem ;
                color: #fff;
                position: relative;
                padding: 0.5rem;
                border-radius: 5px;
            }
        }
        .yours{
            width: 100%;
            overflow: auto;
            p{
                max-width: 80%;
                float: left;
                background: rgb(96, 109, 105);
                margin: 0.5rem ;
                color: #fff;
                position: relative;
                padding: 0.5rem;
                border-radius: 5px;
            }
        }
    }
}
</style>