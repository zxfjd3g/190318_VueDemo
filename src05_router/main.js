/*
入口JS
*/
import Vue from 'vue'

import router from './router'
import App from './App.vue'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router // 配置路由器
})

