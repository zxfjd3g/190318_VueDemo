/*
入口JS
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button) // <mt-button></mt-button>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})

