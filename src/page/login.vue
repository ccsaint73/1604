<template>
<div>
  <header><span @click="back()">返回</span><span>登录</span></header>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="75px" class="demo-ruleForm">
  <el-form-item label="用户名:" prop="name">
    <el-input v-model="ruleForm2.name" type="text"></el-input>
  </el-form-item>
  <el-form-item label="密码:" prop="pass">
    <el-input v-model="ruleForm2.pass" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <el-button><router-link to='/search'>注册</router-link>  </el-button>
  </el-form-item>
</el-form>
</div>
  
</template>

<script>
import qs from 'qs'
  export default {
    data() {
      //用户名
      var checkName = (rule, value, callback) => {
        if (!value) {
        console.log(value)
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
            if (value.length<6 || value.length>15) {
              callback(new Error('长度必须在6-15之间'));
            } else {
              callback();
            }
          
        }, 1000);
      };
      //密码
      var passWord = (rule, value, callback) => {
        if(value.length<5 || value.length>15){
          callback(new Error('长度必须在6-15之间'));
        }else{
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          pass:''
        },
        rules2: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: passWord, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //登录
            var obj={
              username:this.ruleForm2.name,
              password:this.ruleForm2.pass
            }
            obj=qs.stringify(obj)
            this.$axios.post('/H/login',obj).then((res)=>{
              console.log(res.data)
              //判断是否登录
              if(res.data.status==200){
                localStorage.setItem('userid',res.data.user_id)
                this.$router.push('/self')
              }else{
                alert('用户名或密码错误')
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

.demo-ruleForm{
  .el-form-item, .el-form-item--feedback{
    .el-input{
      width: 80%;
      height: 1rem;
    }
  }
}
header{
  width: 100%;
  height: 3.125rem;
  text-align: center;
  background: #000;
  color: #fff;
  line-height: 3.125rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  span{
    font-size: 1rem;
    float: left;
    margin-left: 1rem;
    &:nth-child(2){
      font-size: 1.5rem;
      margin-left: 7.5rem;
    }
  }
}
</style>
