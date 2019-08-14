<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'H1',
  data() {
    return {
      msg: 'I am H1 page,Welcome to H1'
    }
  },
  mounted() {
    /* hash原理;监听hash变化 */
    window.addEventListener('hashchange', function(e) {
      console.log(e.oldURL, e.newURL)
      const hash = location.hash.slice(2)
      document.body.style.backgroundColor = hash
    }, false)
  }
}
</script>
