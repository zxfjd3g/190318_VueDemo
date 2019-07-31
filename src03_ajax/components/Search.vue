<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="serach">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      serach () {
        const searchName = this.searchName.trim()
        if (searchName) {
          // 分发自定义事件: search
          this.$bus.$emit('search', searchName)
        }
      }
    }
  }
</script>

<style scoped>

 
</style>
