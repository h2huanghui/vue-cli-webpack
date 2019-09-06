<template>
  <div>
    <!-- 阻止单击事件继续传播 -->
    <a href="" @click.stop.prevent="handleClickA">handleClickA</a>

    <!-- 提交事件 -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"/>
          <el-checkbox label="地推活动" name="type"/>
          <el-checkbox label="线下主题活动" name="type"/>
          <el-checkbox label="单纯品牌曝光" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        type: []
      }
    }
  },
  methods: {
    handleClickA() {
      console.log('aaa')
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
