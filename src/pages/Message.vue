<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}?id2=${m.id}`">{{m.title}}</router-link>
        --<button @click="pushShow(m.id)">push查看</button>
        --<button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <!-- <MessageDetail :id="3" /> -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MessageDetail from './MessageDetail'
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'},
        ]
        this.messages = messages
      }, 1000);
    },

    methods: {
      pushShow (id) {
        // 编程式路由导航: push
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        // 编程式路由导航: push
        this.$router.replace(`/home/message/detail/${id}`)
      },
    },

    components: {
      MessageDetail
    }
  }
</script>

<style scoped>

 
</style>
