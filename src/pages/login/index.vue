<template>
  <div class="login-container">
    <div class="login-bar">
      <el-form
        ref="form"
        :model="form"
        :rules="rules">
        <el-form-item prop="userName">
          <el-input
            v-model.trim="form.userName"
            prefix-icon="el-icon-user-solid"
            class="form-item"
            placeholder="用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="form.password"
            type="password"
            prefix-icon="el-icon-lock"
            class="form-item"
            placeholder="密码"/>
        </el-form-item>
        <el-form-item>
          <el-button class="form-item" type="success" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login({
            userName: this.userName,
            password: this.password
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('~@/static/img/background.png');
    .login-bar{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 30vw;
      height: 40vh;
      border: 1px solid #ddd;
      border-radius: 20px;
      background-color: #eaecef;
      .form-item{
        width: 20vw;
      }
    }
  }
</style>
