<template>
<div>
  <header><span @click="back()">返回</span><span>注册</span></header>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="75px" class="demo-ruleForm">
  <el-form-item label="用户名:" prop="name">
    <el-input v-model="ruleForm2.name" type="text"></el-input>
  </el-form-item>
  <el-form-item label="密码:" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码:" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</div>
  
</template>

<script>
import qs from 'qs'
  export default {
    data() {
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
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
            //注册‘
            var obj={
              username:this.ruleForm2.name,
              password:this.ruleForm2.pass
            }
            obj=qs.stringify(obj)
            this.$axios.post('/H/addUser',obj).then((res)=>{
                console.log(res.data)
                //判断注册是否成功
                if(res.data.status==200){
                    this.$router.push('/login')
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
