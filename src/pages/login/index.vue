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
            :show-password="!isLogin"
            type="password"
            prefix-icon="el-icon-lock"
            class="form-item"
            placeholder="密码"/>
        </el-form-item>
        <el-form-item v-if="!isLogin" prop="confirmPsd">
          <el-input
            v-model.trim="form.confirmPsd"
            type="password"
            prefix-icon="el-icon-lock"
            class="form-item"
            placeholder="确认密码"
            show-password/>
        </el-form-item>
        <el-form-item v-if="isLogin">
          <el-button class="form-item" type="success" @click="handleLogin">登录</el-button>
          <!-- <div class="register">
            <span>还没有账号？</span>
            <el-link
              :underline="false"
              type="primary"
              @click.native="isLogin=false">注册</el-link>
          </div> -->
        </el-form-item>
        <el-form-item v-else>
          <el-button class="form-item" type="success" @click="handleRegister">注册</el-button>
          <div class="register">
            <span>已注册，返回</span>
            <el-link
              :underline="false"
              type="primary"
              @click.native="isLogin=true">登录</el-link>
          </div>
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
        userName: 'admin',
        password: 'password123',
        confirmPsd: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPsd: [
          { required: true, message: '请输入确认密码', trigger: 'blur' }
        ]
      },
      isLogin: true
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown')
  },
  methods: {
    ...mapActions([
      'login',
      'register'
    ]),
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login({
            userName: this.form.userName,
            password: this.form.password
          }).then(() => {
            this.$router.push({ path: '/home' })
          }).catch(err => {
            this.$message.error(err)
          })
        }
      })
    },
    handleRegister() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.form.password === this.form.confirmPsd) {
            this.register({
              userName: this.form.userName,
              password: this.form.password
            })
          } else {
            this.$message.error('密码不一致')
          }
        }
      })
    },
    keyDown(e) {
      if (e.keyCode === 13) {
        if (this.isLogin) {
          this.handleLogin()
        } else {
          this.handleRegister()
        }
      }
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
    background: url('~@/static/img/background.png') no-repeat;
    background-size: 100% 100%;
    .login-bar{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 30vw;
      padding-top: 30px;
      padding-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 20px;
      background-color: #eaecef;
      .form-item{
        width: 20vw;
      }
      .register{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
