/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'

import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  store // 配置vuex的store对象  ===> 所有组件对象都可以看一个属性$store
})

