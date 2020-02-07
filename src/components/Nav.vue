<template>
    <div id="app">
        <div id="nav" style="padding: 0rem;">
            <b-navbar type="dark" variant="dark" class="fixed-top">
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">首页</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/login" v-if="!isLogin">登录</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/register" v-if="!isLogin">注册</router-link>
                    </b-nav-item>
                    <b-nav-item>
                    </b-nav-item>
                    <b-nav-item><router-link to="/email">关于</router-link></b-nav-item>
                    <b-nav-item style="margin-left: 2rem;"><router-link to="/email" v-if="isLogin">欢迎你，{{ nickname }}</router-link></b-nav-item>
                    <b-nav-item v-show="isLogin" style="margin-left: 4rem;"><b-link v-on:click="exit">退出登录</b-link></b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <router-view></router-view>

    </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: false,
      token: this.$store.state.token,
      nickname: this.$store.state.nickname
    }
  },
  methods: {
    exit () {
      localStorage.clear()
      location.reload()
    }
  },
  mounted () {
    if (this.$store.state.token !== null) {
      this.isLogin = true
    }
    console.log('???' + this.$store.state.token)
  }
}
</script>
