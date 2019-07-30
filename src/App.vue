<template>
  <div>
    <h1>App</h1>
    <img src="./assets/logo.png" alt="logo">
    <HelloWorld />
    <hello-world />
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>
<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>