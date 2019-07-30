<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        title: 'HelloWorld 组件'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
