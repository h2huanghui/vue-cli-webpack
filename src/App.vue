<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{name: 'HelloWorld'}">主页</router-link>
      <router-link :to="{name: 'H1'}">H1页面</router-link>
      <router-link :to="{name: 'H2'}">H2页面</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
