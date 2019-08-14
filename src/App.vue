<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <!-- 使用router-link 声明式的导航 -->
      <!-- 通过传入`to`属性指定链接 -->
      <!-- <router-link>默认会被渲染成一个`<a>`标签 -->
      <router-link :to="{name: 'HelloWorld'}">父页面(主页)</router-link>
      <router-link :to="{name: 'H1'}">子页面H1</router-link>
      <router-link :to="{name: 'H2'}">子页面H2</router-link>
      <!-- 声明式导航 -->
      <router-link :to="{name: 'hi1',params: {username:'huanghui',id:'123'}}" >Hi页面1</router-link>
      <router-link to="/params/1/focus">url-params</router-link>
      <router-link :to="{name:'Query',query:{queryId: '1'}}">url-query</router-link>
      <router-link :to="{name:'Activity'}">GetActivity</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染到这里 -->
    <router-view/>
    <p>route name:{{ $route.name }}</p>
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
