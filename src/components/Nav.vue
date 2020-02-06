<template>
    <div id="app">
        <div id="nav" style="padding: 0rem;">
            <b-navbar type="dark" variant="dark" class="fixed-top">
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">首页</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/login" v-show="preLogin">登录</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/register" v-show="preLogin">注册</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/register" v-if="afterLogin">个人中心</router-link>
                    </b-nav-item>
                    <b-nav-item><router-link to="/email">关于</router-link></b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <router-view></router-view>

    </div>
</template>
<script>
import login from '../views/Login.vue'

export default {
  data () {
    return {
      preLogin: true,
      afterLogin: false
    }
  },
  mounted () {
    if (login.isLogin === true) {
      this.preLogin = false
      this.afterLogin = false
      this.afterLogin = true
    }
  }
}
</script>
