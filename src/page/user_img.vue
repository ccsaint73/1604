<template>
  <div class="images">
      <header><span @click="back()">返回</span><span>上传头像</span></header>
      <p><img  :src="img" alt=""></p>
       <div class="photo_main">
			<div class="photo_i">
			</div>
			<div class="photo_tj">
				<div class="infile">
					<input  accept="image/*" name="upfile" id="upfile" type="file" ref="file" class="ss" @change="change()">
				</div>
				
	   			<input type="button" @click="upimg()" value="提交" class="btn">
			</div>
		</div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
        data:[],
        img:''
    }
  },
  methods:{
      
      back(){
          this.$router.go(-1)
      },
    upimg(){
		  		var fileobj = document.getElementById("upfile")
		  		var file = fileobj.files[0]
		  		var formdata = new FormData()
		  		formdata.append("upfile",file)
		  		
		  		axios.post("http://47.95.8.3/index.php/home/GK/upload_img",formdata,{
		  		headers:{"Content-Type": "multipart/form-data" }
		  		})
		  		.then((res)=>{
            this.img = res.data.pic_url
            console.log(res.data.pic_url)
            localStorage.setItem('photo',this.img)
            this.tosever()
            window.history.go(-1)
		  		})
		  	},
       tosever(){
        var obj={
            id:localStorage.getItem('userid'),
            img:localStorage.getItem('photo')
          }
          obj=qs.stringify(obj)
          axios.post('http://47.95.8.3/index.php/home/GK/tosever',obj).then((res)=>{
            console.log(res)
          })
        
       },
       change(){
         console.log(1)
         var fileobj = document.getElementById("upfile")
         var img=this.getObjectURL(fileobj.files[0])
         this.img=img
       },
       getObjectURL (file) {
          let url = null ;
          if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
          }else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
          }else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
          }
          return url ;
        }
  },
  created() {
    var img=localStorage.getItem('photo')
    if(img){
      this.img=img
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
header{
  width: 100%;
  height: 3.125rem;
  text-align: center;
  background: #222;
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
    position: relative;
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
.photo_tj{
				text-align: center;
			.btn{
				width: 90%;
				height: 2.8125rem;
				background: #007AFF;
				color: #fff;
				border: none;
				margin: 20px auto;
			}
			div{
				color: #999;
				font-size: 0.75rem;
			}
    }
      .ss{
        position: absolute;
        top: 6rem;
        left: 4.4rem;
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        opacity: 0;
      }
</style>
