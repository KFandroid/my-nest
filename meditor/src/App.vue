<template>
  <div id="app" >
    <div id="nav">
      <router-link v-show="show" to="/me">Home</router-link> |
      <router-link v-show="show" to="/blog">Blog</router-link> |
      <router-link  to="/">Me</router-link> |
      <router-link v-show="show" to="/category">Category</router-link>
      <input  @keydown.enter="showNewWorld" v-model="password" class="secret-passage" autofocus="autofocus"/>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      password:'',
      show: false
    }
  },
  methods:{
    showNewWorld() {
      if(this.password === "123") {
        this.show = true
      }
    },
    
  }
}
</script>
<style lang="less">
body {
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 1280px;
  color: #2c3e50;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.secret-passage {
  opacity: 0;
}


</style>
