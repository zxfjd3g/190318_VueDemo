<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos"></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default {
    data () {
      return {
        todos: [
          {id: 1, title: 'AAA', complete: false},
          {id: 3, title: 'BBB', complete: true},
          {id: 5, title: 'CCC', complete: false},
        ]
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      }
    },

    components: {
      Header,
      List,
      Footer
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
