<template>
  <ul>
    <li>ID: {{$route.query.id2}}</li>
    <li>TITLE: {{messageDetail.title}}</li>
    <li>CONTENT: {{messageDetail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  const messageDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'},
  ]
  export default {
    data () {
      return {
        messageDetail: {}, // 当前需要显示的消息详情对象
      }
    },

    mounted() {
      console.log('detail mounted()')
      // 模拟发请求获取对应的消息详情对象
      setTimeout(() => {
        // 得到当前的id
        const id = this.$route.params.id * 1
        const detail = messageDetails.find(detail => detail.id===id)
        // 更新数据
        this.messageDetail = detail
      }, 1000)
    },

    watch: {
      $route (value) { // 说明请求参数发生了变化
      console.log('watch $route()')
        setTimeout(() => {
          // 得到当前的id
          const id = value.params.id * 1
          const detail = messageDetails.find(detail => detail.id===id)
          // 更新数据
          this.messageDetail = detail
        }, 1000)
      }
    }
  }
</script>

<style scoped>

 
</style>
