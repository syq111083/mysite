<template>
       <div style="padding: 0;">
           <router-view></router-view>
       </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        color:
    }

    #nav a {
        font-weight: bold;
        color: #ffffff;
    }

    #nav a.router-link-exact-active {
        color: #ffffff;
    }
</style>

<script>
export default {
  data () {
    return {
      pageName: null
    }
  },
  methods: {
    checkName () {
      console.log(this.pageName)
    }
  }
}
</script>
