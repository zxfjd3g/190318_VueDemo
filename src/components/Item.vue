<template>
  <li :style="{background: bgColor}" 
    @mouseenter="handleEnter(true)" 
    @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">

  /* 
  模板中读取数据的来源:
    data: 自身可变数据
    props: 外部传入的可弯数据
    computed: 基于已有数据的计算属性
  */
  export default {
    props: { // 属性名 / 属性值的类型
      todo: Object,
      deleteTodo: Function,
      index: Number,
      updateTodo: Function
    },

    data () {
      console.log('Item data()', this.m)
      return {
        bgColor: 'white',
        isShow: false
      }
    },

    methods: {
      handleEnter (isEnter) {
        if (isEnter) {
          this.bgColor = '#cccccc',
          this.isShow = true
        } else {
          this.bgColor = 'white',
          this.isShow = false
        }
      },

      deleteItem () {
        if (confirm('确定删除吗?')) {
          this.deleteTodo(this.index)
        }
      }
    },

    computed: {
      isCheck: {
        get () {// checkout是否勾选, 看接收的todo是否已经完成
          return this.todo.complete
        },

        set (value) { // 当用户操作checkbox界面时调用
          this.updateTodo(this.todo, value)
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
