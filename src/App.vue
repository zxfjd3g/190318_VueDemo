<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Main from './components/Main.vue'
  import Search from './components/Search.vue'
  export default {
    components: {
      Search,
      Main
    }
  }
</script>

<style scoped>
</style>
