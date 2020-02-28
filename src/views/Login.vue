<template>
    <div class="container-fluid" style="padding: 0rem;">
        <v-nav v-show="!isLogin"></v-nav>
        <div class="text-center" v-show="!isLogin">
            <b-row style="width: 100%;margin-top: 1rem;" class="text-center">
                <b-form style="margin: 0 auto;">
                    <b-form-group>
                        <div class="row" style="width: 30rem;margin-top: 2rem;">
                            <b-col style="width: 6.25rem;margin: 0 auto;margin-top: 5rem;">
                                <label style="font-size: large;font-weight: 600;">账号</label>
                                <b-form-input v-model="form.email" required type="email">
                                </b-form-input>
                            </b-col>
                        </div>
                        <b-row class="row" style="width: 30rem;margin-top: 2rem;">
                            <b-col style="width: 6.25rem;margin: 0 auto;margin-top: 2rem;">
                                <label style="font-size: large;font-weight: 600;">密码</label>
                                <b-form-input v-model="form.password" required type="password">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-form>
            </b-row>
            <b-row class="row" style="margin-top: 1rem;width: 100%;">
                <b-button style="margin: 0 auto;" v-on:click="onSubmit()">登录</b-button>
            </b-row>
            <div class="row" style="margin-top: 2rem;width: 100%;">
                <b-link style="margin: 0 auto;margin-top: 0.4rem;" href="/register">点击此处注册</b-link>
            </div>
            <b-row style="margin: 0 auto;margin-top: 0.5rem;width: 100%;" v-show="show">
                <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged" style="margin: 0 auto;">
                    <p>账号或密码错误，请重新输入</p>
                    <p> {{ dismissCountDown }}秒后警告关闭 </p>
                    <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
                </b-alert>
            </b-row>
        </div>
        <div v-show="isLogin" class="text-center">
            <h1 style="margin-top: 2rem;">登录成功</h1>
            <router-link to="/">如果浏览器没有响应，点击此处返回首页</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index.js'

export default {
  data () {
    return {
      isLogin: false,
      show: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      form: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    if (this.$store.state.token !== null) {
      this.isLogin = true
    }
  },
  methods: {
    onSubmit () {
      console.log(this.baseURL())
      if (this.form.email !== '' && this.form.password !== '') {
        axios({
          method: 'post',
          url: this.baseURL() + '/account/login',
          data: {
            email: this.form.email,
            password: this.form.password
          }
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          window.localStorage.setItem('nickname', res.data.nickname)
          this.isLogin = true
          setTimeout(this.push, 3000)
        }).catch(res => {
          this.dismissCountDown = this.dismissSecs
        })
      } else {
        this.dismissCountDown = this.dismissSecs
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.show = true
    },
    push () {
      router.push('/')
      location.reload()
    }
  }
}
</script>
