<template>
    <div class="container-fluid" style="padding: 0rem;">
        <v-nav v-show="!afterLogin"></v-nav>
        <div v-show="!afterLogin">
        <div class="row" style="margin-top: 3rem;">
            <div class="col" style="margin-top: 2.5rem;margin: 0 auto;">
                <h1>注册页面</h1>
            </div>
        </div>
        <div class="row">
            <div class="col" style="margin-top: 1.5rem;">
                <h5>仔细填写，不可更改</h5>
            </div>
        </div>
        <div class="row" style="margin: 0 auto;width: 12.5rem;margin-top: 1rem;">
            <label>填写邮箱</label>
            <b-form-input class="col" type="email" style="margin: 0 auto;" placeholder="请填写邮箱地址" required @blur="checkEmail" v-model="getEmail"></b-form-input>
            <b-alert show v-show="showemail" style="margin-top: 0.5rem;">{{checkMsg}}</b-alert>
        </div>
        <div class="row" style="margin: 0 auto;width: 12.5rem;margin-top: 1rem;">
            <label>填写昵称</label>
            <b-form-input type="text" style="margin: 0 auto;" placeholder="请填写昵称" required v-model="nickname"></b-form-input>
        </div>
        <div class="row" style="margin-top: 1rem;">
            <b-form-group style="margin: 0 auto;" id="sex" label="性别">
                <b-form-radio-group v-model="sexChoice">
                    <b-form-radio value="male">男</b-form-radio>
                    <b-form-radio value="female">女</b-form-radio>
                    <b-form-radio value="shemale">人妖</b-form-radio>
                </b-form-radio-group>
            </b-form-group>
        </div>
        <div class="row" style="margin: 0 auto;width: 12.5rem;margin-top: 1rem;">
            <b-col style="margin-top: 1rem;">
                你选择的是  {{ sexChoice }}
            </b-col>
            </div>
        <div class="row" style="margin: 0 auto;width: 12.5rem;margin-top: 1rem;">
            <label>密码</label>
            <b-form-input type="password" style="margin: 0 auto;" placeholder="请填写密码" required v-model="password"></b-form-input>
        </div>
        <div class="row" style="margin: 0 auto;width: 12.5rem;margin-top: 0.5rem;">
            <b-form-input type="password" style="margin: 0 auto;" placeholder="请再次填写密码" required></b-form-input>
        </div>
        <b-row style="margin: 0 auto;margin-top: 0.5rem;width: 30rem;">
                <b-alert
                      :show="dismissCountDown"
                      dismissible
                      variant="danger"
                      @dismissed="dismissCountDown=0"
                      @dismiss-count-down="countDownChanged"
                      style="margin: 0 auto;"
                    >
                      <p>请完善内容或确认内容无误后再提交</p>
                      <p> {{ dismissCountDown }}秒后警告关闭 </p>
                      <b-progress
                        variant="warning"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px"
                      ></b-progress>
                    </b-alert>
        </b-row>
        <div class="row" style="margin: 0 auto;margin-top: 0.5rem;width: 6.25rem;">
            <b-button @click="submit()">确认注册</b-button>
        </div>
        </div>
        <b-container v-show="afterLogin" class="text-center">
            <h1>注册成功</h1>
            <router-link to="/login">点此去登陆</router-link>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index.js'

export default {
  data () {
    return {
      showemail: false,
      getEmail: null,
      checkMsg: '',
      email: '',
      sexChoice: '',
      nickname: '',
      password: '',
      dismissSecs: 10,
      dismissCountDown: 0,
      afterLogin: false
    }
  },
  methods: {
    checkEmail () {
      axios({
        method: 'post',
        url: this.baseURL() + '/account/query',
        data: {
          email: this.getEmail
        }
      }).then(response => {
        let res = JSON.stringify(response.data.email); this.email = JSON.parse(res); console.log(this.email); console.log(this.getEmail); if (this.email === this.getEmail) {
          this.checkMsg = '已被注册'
        } else {
          let reg = /\w+@\w+\.com$/
          if (reg.test(this.getEmail)) {
            this.checkMsg = '可以注册'
          } else { this.checkMsg = '邮箱格式不对' }
        }
      })
      if (this.getEmail !== '') { this.showemail = true } else {
        this.showemail = false
      }
    },
    submit () {
      this.checkEmail()
      if (this.nickname !== '' && this.email !== '' && this.sex !== '' && this.password !== '' && this.checkMsg !== '已被注册') {
        axios({
          method: 'post',
          url: this.baseURL() + '/account/add',
          data: {
            nickname: this.nickname,
            email: this.getEmail,
            password: this.password,
            sex: this.sexChoice
          }
        }).then(response => {
          let res = ''
          res = response.data
          if (res.msg === '注册成功') {
            this.afterLogin = true
            setTimeout(this.push, 3000)
          } else {
            this.dismissCountDown = this.dismissSecs
          }
        })
      } else if (this.checkMsg === '已被注册') {
        this.dismissCountDown = this.dismissSecs
      } else {
        this.dismissCountDown = this.dismissSecs
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    push () {
      router.push('/login')
    }
  }
}
</script>

<style>
    .row {
        margin: 0 auto;
    }
    h1 {
        text-align: center;
        margin-top: 2rem;
    }
    h5 {
        text-align: center;
    }
</style>
