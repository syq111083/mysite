<template>
    <div id="app">
        <div id="nav">
            <b-navbar type="dark" variant="dark" class="fixed-top text-center">
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">首页</router-link>
                    </b-nav-item>
                    <b-nav-item v-if="!isLogin">
                        <router-link to="/login" >登录</router-link>
                    </b-nav-item>
                    <b-nav-item v-if="!isLogin">
                        <router-link to="/register" >注册</router-link>
                    </b-nav-item>
                    <b-nav-item><router-link to="/comic">漫画</router-link></b-nav-item>
                    <b-nav-item v-if="isLogin"><p class="text-success">欢迎, {{ nickname }}</p></b-nav-item>
                    <b-nav-item v-if="isLogin"><b-link v-on:click="exit">退出登录</b-link></b-nav-item>
                    <b-nav-item><router-link to="/email">关于</router-link></b-nav-item>
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
<style>
</style>
