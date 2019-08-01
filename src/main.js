/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'
import eventBus from './event-bus'

import './base.css'

// 给Vue原型对象添加一个属性
Vue.prototype.m = 1

// 注册全局组件
Vue.component('Item', Item)


// 登陆一个vm对象作为全局事件总线对象, 并挂载到Vue原型对象上
// 所有的组件对象都可以看到它 ==> 可以通过来来进行事件机制通信
Vue.prototype.$globalEventBus = eventBus


/* 只能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})

