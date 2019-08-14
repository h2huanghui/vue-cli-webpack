<template>
  <el-table
    :data="dataList"
    style="width: 100%">
    <el-table-column
      prop="activityContent"/>

    <el-table-column prop="addTime"/>
  </el-table>
</template>

<script>
export default {
  name: 'Activity',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.$service({
      url: '/buyerView/listBuyerActivityByPage.do',
      method: 'post',
      data: {
        currPage: 1,
        pageSize: 2,
        param: {
          buyerId: '24194',
          activityGroup: '',
          activityType: ''
        }
      }
    }).then((rsp) => {
      this.dataList = rsp.data.dataList
    })
  }
}
</script>

