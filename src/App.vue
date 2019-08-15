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

    <div class="todo-list">
      <!-- <div>
        <el-input v-model="info" placeholder="" type="text" class="info-text" size="mini"/>
        <el-button type="primary" size="mini" @click="handleAdd">Add</el-button>
        <ul>
          <todo-item v-for="(item,index) in list" :item = "item" :key="index"/>
        </ul>
      </div> -->

      <div>
        <el-input v-model="info2" placeholder="" type="text" class="info-text" size="mini"/>
        <el-button type="primary" size="mini" @click="handleAdd2">Add</el-button>
        <!-- 插槽 -->
        <ul>
          <todo-item v-for="(item2,index2) in list2" :key="index2">
            <!-- 具名插槽 -->
            <template v-slot:slot-name-item="slotProps">
              <span :style="{color: slotProps.checked ? 'red': 'green'}">{{ item2 }}</span>
            </template>
          </todo-item>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  name: 'App',
  components: {
    TodoItem
  },
  data() {
    return {
      info: '',
      list: [],
      info2: '',
      list2: []
    }
  },
  methods: {
    handleAdd() {
      this.list.push(this.info)
      this.info = ''
    },
    handleAdd2() {
      this.list2.push(this.info2)
      this.info2 = ''
    }
  }
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
.todo-list {
  text-align: left
}
.info-text {
  max-width: 120px;
}

</style>
