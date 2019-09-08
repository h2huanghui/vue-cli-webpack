<template>
  <div>
    <h1>{{ msg1 }}</h1>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg1: 'HHH'
    }
  }
}
</script>

