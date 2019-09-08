<template>
  <div>
    <h3>vue-router参数传递</h3>
    <ul>
      <li><router-link :to="{name: 'H1'}">用name传递参数</router-link></li>
      <li><router-link :to="{name: 'hi1',params:{userName:'hh',id: '1234'}}">通过router-link标签中的to传参</router-link></li>
      <li><router-link to="/params/1/focus">利用url传递参数----在配置文件里以冒号的形式设置参数</router-link></li>
      <li><router-link :to="{name:'Query',query:{queryId: '1'}}">使用path来匹配路由，然后通过query来传递参数</router-link></li>
    </ul>
    <h3>vue-router配置子路由(二级路由)</h3>
    <ul>
      <li>
        <router-link :to="{name:'Parent'}">主页</router-link>
        <router-link :to="{name:'H1'}">子页面1</router-link>
        <router-link :to="{name:'H2'}">子页面2</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {

  }

}
</script>
