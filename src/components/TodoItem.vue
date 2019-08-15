<template>
  <div>
    <!-- 属性方式接收父组件数据 -->
    <!-- <div>
      <li >{{ item }}</li>
    </div> -->

    <!-- 插槽方式接收 -->
    <div>
      <li class="item">
        <input id="" v-model="checked" type="checkbox" name="">
        <slot :checked="checked" name="slot-name-item"/>
      </li>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
.item {
  color: red
}

</style>
