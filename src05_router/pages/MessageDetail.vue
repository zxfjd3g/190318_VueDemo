<template>
  <ul>
    <li>ID: {{id}}</li>
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
    props: {
      id: Number,
    },
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
        const id = this.id
        const detail = messageDetails.find(detail => detail.id===id)
        // 更新数据
        this.messageDetail = detail
      }, 1000)
    },

    watch: {
      id (value) { // 说明请求参数发生了变化
      console.log('watch $route()')
        setTimeout(() => {
          const detail = messageDetails.find(detail => detail.id===value)
          // 更新数据
          this.messageDetail = detail
        }, 1000)
      }
    }
  }
</script>

<style scoped>

 
</style>
