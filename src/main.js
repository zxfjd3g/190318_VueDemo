/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'

import './base.css'

// 给Vue原型对象添加一个属性
Vue.prototype.m = 1


/* 只能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})

