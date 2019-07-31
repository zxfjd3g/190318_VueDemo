/*
入口JS
*/
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App.vue'

// 声明使用vue的插件
Vue.use(VueResource) // 内部给Vue.prototype.$http = 能发ajax请求的对象(.get()/post())


// 创建事件总线对象, 并保存到Vue的原型对象
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})

