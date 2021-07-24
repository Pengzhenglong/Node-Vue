<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card"  @submit.native.prevent="login">
      <el-form>
        <el-form-item label="用户名">
          <el-input  v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.userpassword"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"   native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
          model:{}
    }
  },
  methods:{
  async  login(){
const  res=await  this.$http.post('login',this.model)
console.log(res)
      // console.log(this.model)
    }
  }

}
</script>

<style  scoped>
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>