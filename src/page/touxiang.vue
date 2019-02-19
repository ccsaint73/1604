<template>
  <div class="images">
      <header><span @click="back()">返回</span><span>上传头像</span></header>
      <p><img src="" alt=""></p>
       <div align="center">
        <span class="btn btn-success fileinput-button">
            <span>上传头像</span>
            <input type="file">
        </span>
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
    }
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
header{
  width: 100%;
  height: 3.125rem;
  text-align: center;
  background: #000;
  color: #fff;
  line-height: 3.125rem;
  font-size: 1.5rem;
  span{
    font-size: 1rem;
    float: left;
    margin-left: 1rem;
    &:nth-child(2){
      font-size: 1.2rem;
      margin-left: 6.7rem;
    }
  }
}
p{
    width:100%;
    text-align: center;
    height: 20rem;
    box-sizing: border-box;
    padding-top: 2rem;
    img{
        display: block;
        width: 15rem;
        height: 15rem;
        background: url(../assets/user.jpg);
        background-size: 100% 100%;
        margin: 0 auto;
        border-radius: 50%
    }
}
 .fileinput-button {
    position: relative;
    display: inline-block;
    overflow: hidden;
    span{
        background: rgb(8, 160, 231);
        display: block;
        width: 13rem;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        color: #fff;
        font-size: 1.3rem
    }
}

.fileinput-button input{
    position:absolute;
    right: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
    font-size: 200px;
}
</style>
