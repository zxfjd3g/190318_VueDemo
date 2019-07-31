<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="todo.id" 
        :todo="todo" :deleteTodo="deleteTodo" :index="index" :updateTodo="updateTodo"/>
  </ul>
</template>

<script type="text/ecmascript-6">
  import Item from './Item.vue'
  export default {

    // 声明接收标签属性: 属性名
    // 接收到的所有标签属性数据都会成功当前组件对象的属性
    props: ['todos', 'deleteTodo', 'updateTodo'],

    components: {
      // Item
    }
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
